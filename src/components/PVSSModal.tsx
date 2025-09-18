'use client';

import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface PVSSModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface PanelType {
  name: string;
  powerWp: number; // Wp
  efficiency: number;
  costPerKwpGbp: number;
  costPerKwpAed: number;
  areaSqm: number; // m²
}

interface InverterType {
  name: string;
  baseCostGbp: number;
  baseCostAed: number;
  costPerKwGbp: number;
  costPerKwAed: number;
  efficiency: number; // decimal (0.96 = 96%)
}

interface Results {
  panelSize: number;
  energyGenerated: number;
  batteryStorage: number;
  inverterSize: number;
  co2Savings: number;
  totalCost: number;
  totalCostAed: number;
  annualSavings: number;
  annualSavingsAed: number;
  annualMaintenanceCost: number;
  annualMaintenanceCostAed: number;
  paybackPeriod: number;
  costBreakdown: {
    panels: number;
    panelsAed: number;
    inverter: number;
    inverterAed: number;
    battery: number;
    batteryAed: number;
    installation: number;
    permits: number;
    inspection: number;
    interconnection: number;
    monitoring: number;
    financing: number;
    contingency: number;
  };
}

export default function PVSSModal({ isOpen, onClose }: PVSSModalProps) {
  const { currentLang, langContent } = useLanguage();
  const [roofSize, setRoofSize] = useState('');
  const [roofUnit, setRoofUnit] = useState('m²');
  const [panelType, setPanelType] = useState('Standard Monocrystalline (350Wp)');
  const [inverterType, setInverterType] = useState('Hybrid Inverter (5kW)');
  const [bedrooms, setBedrooms] = useState(3);
  const [appliances, setAppliances] = useState({
    airConditioning: true,
    refrigerator: true,
    waterHeater: true,
    washingMachine: false,
    electricOven: false,
    electronics: true,
  });
  const [dailyConsumption, setDailyConsumption] = useState('');
  const [includeMaintenance, setIncludeMaintenance] = useState(false);
  const [maintenancePercentage, setMaintenancePercentage] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<Results | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [showAssumptions, setShowAssumptions] = useState(false);
  const [mounted, setMounted] = useState(false);

  const panelLayoutRef = useRef<HTMLDivElement>(null);
  const monthlyChartRef = useRef<HTMLDivElement>(null);
  const savingsTimelineRef = useRef<HTMLDivElement>(null);
  const resultsSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const panelTypes: PanelType[] = [
    { name: 'Standard Monocrystalline (350Wp)', powerWp: 350, efficiency: 0.18, costPerKwpGbp: 700, costPerKwpAed: 3200, areaSqm: 1.7 },
    { name: 'Premium Monocrystalline (400Wp)', powerWp: 400, efficiency: 0.20, costPerKwpGbp: 850, costPerKwpAed: 3800, areaSqm: 1.8 },
    { name: 'High Efficiency (450Wp)', powerWp: 450, efficiency: 0.21, costPerKwpGbp: 1000, costPerKwpAed: 4500, areaSqm: 1.9 },
  ];

  const inverterTypes: InverterType[] = [
    { name: 'Hybrid Inverter (5kW)', baseCostGbp: 500, baseCostAed: 2200, costPerKwGbp: 100, costPerKwAed: 450, efficiency: 0.96 },
    { name: 'String Inverter (5kW)', baseCostGbp: 400, baseCostAed: 1800, costPerKwGbp: 80, costPerKwAed: 360, efficiency: 0.97 },
    { name: 'Micro-Inverters', baseCostGbp: 1000, baseCostAed: 4500, costPerKwGbp: 200, costPerKwAed: 900, efficiency: 0.95 },
  ];

  const calculateSystem = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setShowResults(false);

    if (!roofSize) {
      setErrorMessage('Please enter your roof size.');
      return;
    }

    const roofSizeValue = parseFloat(roofSize);
    if (isNaN(roofSizeValue) || roofSizeValue <= 0) {
      setErrorMessage('Please enter a valid roof size.');
      return;
    }

    // Convert roof size to m²
    let roofSizeSqm = roofSizeValue;
    if (roofUnit === 'ft²') {
      roofSizeSqm = roofSizeValue * 0.092903; // Convert ft² to m²
    }

    // Get selected panel and inverter
    const selectedPanel = panelTypes.find(p => p.name === panelType) || panelTypes[0];
    const selectedInverter = inverterTypes.find(i => i.name === inverterType) || inverterTypes[0];

    // Calculate energy consumption based on bedrooms and appliances
    let baseConsumption = bedrooms * 10; // kWh per bedroom per day
    if (appliances.airConditioning) baseConsumption += 15;
    if (appliances.refrigerator) baseConsumption += 5;
    if (appliances.waterHeater) baseConsumption += 10;
    if (appliances.washingMachine) baseConsumption += 3;
    if (appliances.electricOven) baseConsumption += 4;
    if (appliances.electronics) baseConsumption += 2;

    // Use manual override if provided
    if (dailyConsumption && parseFloat(dailyConsumption) > 0) {
      baseConsumption = parseFloat(dailyConsumption);
    }

    // Constants and Assumptions (matching original)
    const usableRoofAreaFactor = 0.70; // 70% of roof area is usable
    const peakSunHoursDubai = 5.5; // Average peak sun hours for Dubai
    const systemLossesFactor = 0.80; // General system losses
    const electricityPriceGbpPerKwh = 0.28; // Average residential electricity price in GBP/kWh
    const electricityPriceAedPerKwh = 0.45; // Average residential electricity price in AED/kWh
    const co2FactorKgPerKwh = 0.233; // kg CO2 per kWh

    // Calculate system size
    const usableRoofArea = roofSizeSqm * usableRoofAreaFactor;
    const numberOfPanels = Math.floor(usableRoofArea / selectedPanel.areaSqm);
    const totalPanelPowerWp = numberOfPanels * selectedPanel.powerWp;
    const totalPanelPowerKwp = totalPanelPowerWp / 1000; // Total Kilowatt-peak

    // Energy Generation Calculation (including inverter efficiency)
    const dailyEnergyGeneratedKwh = (totalPanelPowerKwp * peakSunHoursDubai * systemLossesFactor * selectedInverter.efficiency);
    const annualEnergyGeneratedKwh = dailyEnergyGeneratedKwh * 365;

    // Battery Sizing: Use daily consumption for battery sizing
    let requiredBatteryKwh = baseConsumption;
    // Round up to nearest 0.5 kWh for practical battery sizing
    requiredBatteryKwh = Math.ceil(requiredBatteryKwh * 2) / 2;

    // Inverter Sizing: 1.0 to 1.2 times the PV array's peak power
    const inverterSizeKw = Math.ceil(totalPanelPowerKwp * 1.1 * 2) / 2; // Round up to nearest 0.5 kW

    // Cost Calculation (matching original structure)
    const costPerKwhBatteryGbp = 300;
    const costPerKwhBatteryAed = 1400;
    const softCostsGbp = 1000;
    const softCostsAed = 4500;

    const panelCostGbp = totalPanelPowerKwp * selectedPanel.costPerKwpGbp;
    const panelCostAed = totalPanelPowerKwp * selectedPanel.costPerKwpAed;
    const inverterCostGbp = selectedInverter.baseCostGbp + (inverterSizeKw * selectedInverter.costPerKwGbp);
    const inverterCostAed = selectedInverter.baseCostAed + (inverterSizeKw * selectedInverter.costPerKwAed);
    const batteryCostGbp = requiredBatteryKwh * costPerKwhBatteryGbp;
    const batteryCostAed = requiredBatteryKwh * costPerKwhBatteryAed;
    const totalCostGbp = panelCostGbp + inverterCostGbp + batteryCostGbp + softCostsGbp;
    const totalCostAed = panelCostAed + inverterCostAed + batteryCostAed + softCostsAed;

    // Calculate Annual Maintenance Cost if enabled
    let annualMaintenanceCostGbp = 0;
    let annualMaintenanceCostAed = 0;
    if (includeMaintenance && maintenancePercentage >= 0) {
      annualMaintenanceCostGbp = totalCostGbp * (maintenancePercentage / 100);
      annualMaintenanceCostAed = totalCostAed * (maintenancePercentage / 100);
    }

    // Calculate savings
    const annualSavingsGbp = annualEnergyGeneratedKwh * electricityPriceGbpPerKwh;
    const annualSavingsAed = annualEnergyGeneratedKwh * electricityPriceAedPerKwh;
    const co2Savings = annualEnergyGeneratedKwh * co2FactorKgPerKwh;

    // Adjust annual savings for maintenance before calculating payback
    const netAnnualSavingsGbp = annualSavingsGbp - annualMaintenanceCostGbp;
    const netAnnualSavingsAed = annualSavingsAed - annualMaintenanceCostAed;

    // Payback Period Calculation using net annual savings
    let paybackPeriodGbp = 0;
    let paybackPeriodAed = 0;
    if (netAnnualSavingsGbp > 0) {
      paybackPeriodGbp = totalCostGbp / netAnnualSavingsGbp;
    } else if (totalCostGbp > 0) {
      paybackPeriodGbp = Infinity;
    }
    
    if (netAnnualSavingsAed > 0) {
      paybackPeriodAed = totalCostAed / netAnnualSavingsAed;
    } else if (totalCostAed > 0) {
      paybackPeriodAed = Infinity;
    }

    // Average payback period (matching original)
    const paybackPeriod = (paybackPeriodGbp === Infinity || paybackPeriodAed === Infinity) ? Infinity : (paybackPeriodGbp + paybackPeriodAed) / 2;

    const calculationResults: Results = {
      panelSize: Math.round(totalPanelPowerKwp * 100) / 100,
      energyGenerated: Math.round(annualEnergyGeneratedKwh),
      batteryStorage: Math.round(requiredBatteryKwh * 100) / 100,
      inverterSize: Math.round(inverterSizeKw * 100) / 100,
      co2Savings: Math.round(co2Savings),
      totalCost: Math.round(totalCostGbp),
      totalCostAed: Math.round(totalCostAed),
      annualSavings: Math.round(annualSavingsGbp),
      annualSavingsAed: Math.round(annualSavingsAed),
      annualMaintenanceCost: Math.round(annualMaintenanceCostGbp),
      annualMaintenanceCostAed: Math.round(annualMaintenanceCostAed),
      paybackPeriod: paybackPeriod === Infinity ? Infinity : Math.round(paybackPeriod * 100) / 100,
      costBreakdown: {
        panels: Math.round(panelCostGbp),
        panelsAed: Math.round(panelCostAed),
        inverter: Math.round(inverterCostGbp),
        inverterAed: Math.round(inverterCostAed),
        battery: Math.round(batteryCostGbp),
        batteryAed: Math.round(batteryCostAed),
        installation: 0, // Included in soft costs
        permits: 0, // Included in soft costs
        inspection: 0, // Included in soft costs
        interconnection: 0, // Included in soft costs
        monitoring: 0, // Included in soft costs
        financing: 0, // Included in soft costs
        contingency: 0, // Included in soft costs
      },
    };

    setResults(calculationResults);
    setShowResults(true);

    // Draw charts after a short delay to ensure DOM is updated
    setTimeout(() => {
      if (panelLayoutRef.current) {
        drawPanelLayout(panelLayoutRef, numberOfPanels, selectedPanel.areaSqm, usableRoofArea);
      }
      if (monthlyChartRef.current) {
        drawMonthlyChart(monthlyChartRef, annualEnergyGeneratedKwh);
      }
      if (savingsTimelineRef.current) {
        drawSavingsTimeline(savingsTimelineRef, totalCostGbp, netAnnualSavingsGbp, paybackPeriod, '£');
      }
      
      // Scroll to results section
      if (resultsSectionRef.current) {
        resultsSectionRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }, 100);
  };

  const drawPanelLayout = (containerRef: React.RefObject<HTMLDivElement | null>, numberOfPanels: number, panelAreaSqm: number, usableRoofAreaSqm: number) => {
    if (!containerRef.current) return;
    
    containerRef.current.innerHTML = '';
    containerRef.current.style.display = 'flex';
    
    const svgWidth = containerRef.current.clientWidth || 300;
    const svgHeight = 200; // Fixed height for the layout for consistency
    
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', svgWidth.toString());
    svg.setAttribute('height', svgHeight.toString());
    svg.setAttribute('viewBox', `0 0 ${svgWidth} ${svgHeight}`);
    svg.classList.add('panel-layout-svg');

    if (numberOfPanels === 0) {
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', '50%');
      text.setAttribute('y', '50%');
      text.setAttribute('dominant-baseline', 'middle');
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('fill', '#4a5568');
      text.textContent = 'No panels to display.';
      svg.appendChild(text);
      containerRef.current.appendChild(svg);
      return;
    }

    const effectiveRoofWidth = Math.sqrt(usableRoofAreaSqm * (16/9));
    const effectiveRoofHeight = Math.sqrt(usableRoofAreaSqm * (9/16));
    
    const panelAspectRatio = 1.7 / 1.0;
    const panelWidth = Math.sqrt(panelAreaSqm / panelAspectRatio);
    const panelHeight = panelWidth * panelAspectRatio;

    const scaleFactor = Math.min(
      (svgWidth - 20) / effectiveRoofWidth,
      (svgHeight - 20) / effectiveRoofHeight
    );

    const scaledPanelWidth = panelWidth * scaleFactor;
    const scaledPanelHeight = panelHeight * scaleFactor;
    const panelSpacing = 5;

    let xOffset = 10;
    let yOffset = 10;
    let panelsInRow = Math.floor((svgWidth - 2 * xOffset) / (scaledPanelWidth + panelSpacing));
    if (panelsInRow === 0) panelsInRow = 1;

    for (let i = 0; i < numberOfPanels; i++) {
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      const currentX = xOffset + (i % panelsInRow) * (scaledPanelWidth + panelSpacing);
      const currentY = yOffset + Math.floor(i / panelsInRow) * (scaledPanelHeight + panelSpacing);

      if (currentX + scaledPanelWidth + panelSpacing > svgWidth - xOffset && (i % panelsInRow) !== 0) {
        xOffset = 10;
        yOffset += scaledPanelHeight + panelSpacing;
        if (currentY + scaledPanelHeight + panelSpacing > svgHeight - yOffset) {
          break;
        }
      }

      rect.setAttribute('x', currentX.toString());
      rect.setAttribute('y', currentY.toString());
      rect.setAttribute('width', scaledPanelWidth.toString());
      rect.setAttribute('height', scaledPanelHeight.toString());
      rect.setAttribute('fill', '#60a5fa');
      rect.setAttribute('stroke', '#3b82f6');
      rect.setAttribute('stroke-width', '1');
      rect.setAttribute('rx', '2');
      svg.appendChild(rect);
    }

    containerRef.current.appendChild(svg);
  };

  const drawMonthlyChart = (containerRef: React.RefObject<HTMLDivElement | null>, annualEnergyGeneratedKwh: number) => {
    if (!containerRef.current) return;
    
    containerRef.current.innerHTML = '';
    const svgWidth = containerRef.current.clientWidth || 300;
    const svgHeight = 250;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const chartWidth = svgWidth - margin.left - margin.right;
    const chartHeight = svgHeight - margin.top - margin.bottom;

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', svgWidth.toString());
    svg.setAttribute('height', svgHeight.toString());
    svg.setAttribute('viewBox', `0 0 ${svgWidth} ${svgHeight}`);
    svg.classList.add('chart-svg');

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('transform', `translate(${margin.left},${margin.top})`);
    svg.appendChild(g);

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthlyFactors = [0.06, 0.07, 0.09, 0.10, 0.11, 0.11, 0.10, 0.09, 0.08, 0.07, 0.06, 0.06];
    const monthlyData = months.map((month, i) => ({
      month: month,
      value: annualEnergyGeneratedKwh * monthlyFactors[i]
    }));

    const maxValue = Math.max(...monthlyData.map(d => d.value));
    const yScale = (value: number) => chartHeight - (value / maxValue) * chartHeight;
    const barWidth = chartWidth / monthlyData.length;

    // Draw bars
    monthlyData.forEach((d, i) => {
      const barHeight = chartHeight - yScale(d.value);
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute('x', (i * barWidth + barWidth * 0.1).toString());
      rect.setAttribute('y', yScale(d.value).toString());
      rect.setAttribute('width', (barWidth * 0.8).toString());
      rect.setAttribute('height', barHeight.toString());
      rect.classList.add('chart-bar');
      g.appendChild(rect);

      // Value labels on top of bars
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', (i * barWidth + barWidth / 2).toString());
      text.setAttribute('y', (yScale(d.value) - 5).toString());
      text.setAttribute('text-anchor', 'middle');
      text.classList.add('chart-label');
      text.textContent = d.value.toFixed(0);
      g.appendChild(text);
    });

    // X-axis labels (months)
    months.forEach((month, i) => {
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', (i * barWidth + barWidth / 2).toString());
      text.setAttribute('y', (chartHeight + 20).toString());
      text.setAttribute('text-anchor', 'middle');
      text.classList.add('chart-label');
      text.textContent = month;
      g.appendChild(text);
    });

    // Y-axis label
    const yAxisLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    yAxisLabel.setAttribute('x', (-chartHeight / 2).toString());
    yAxisLabel.setAttribute('y', (-margin.left + 15).toString());
    yAxisLabel.setAttribute('text-anchor', 'middle');
    yAxisLabel.setAttribute('transform', 'rotate(-90)');
    yAxisLabel.classList.add('chart-label');
    yAxisLabel.textContent = 'Energy (kWh)';
    g.appendChild(yAxisLabel);

    // X-axis line
    const xAxisLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    xAxisLine.setAttribute('x1', '0');
    xAxisLine.setAttribute('y1', chartHeight.toString());
    xAxisLine.setAttribute('x2', chartWidth.toString());
    xAxisLine.setAttribute('y2', chartHeight.toString());
    xAxisLine.classList.add('axis-line');
    g.appendChild(xAxisLine);

    // Y-axis line
    const yAxisLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    yAxisLine.setAttribute('x1', '0');
    yAxisLine.setAttribute('y1', '0');
    yAxisLine.setAttribute('x2', '0');
    yAxisLine.setAttribute('y2', chartHeight.toString());
    yAxisLine.classList.add('axis-line');
    g.appendChild(yAxisLine);

    containerRef.current.appendChild(svg);
  };

  const drawSavingsTimeline = (containerRef: React.RefObject<HTMLDivElement | null>, totalCost: number, annualSavings: number, paybackPeriod: number, currencySymbol: string) => {
    if (!containerRef.current) return;
    
    containerRef.current.innerHTML = '';
    const svgWidth = containerRef.current.clientWidth || 300;
    const svgHeight = 250;
    const margin = { top: 20, right: 20, bottom: 30, left: 80 };
    const chartWidth = svgWidth - margin.left - margin.right;
    const chartHeight = svgHeight - margin.top - margin.bottom;

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', svgWidth.toString());
    svg.setAttribute('height', svgHeight.toString());
    svg.setAttribute('viewBox', `0 0 ${svgWidth} ${svgHeight}`);
    svg.classList.add('chart-svg');

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('transform', `translate(${margin.left},${margin.top})`);
    svg.appendChild(g);

    const years = Array.from({ length: 26 }, (_, i) => i);
    let maxCumulativeValue = totalCost;
    
    const data = years.map(year => {
      const cumulativeCost = totalCost;
      const cumulativeSavings = annualSavings * year;
      if (cumulativeSavings > maxCumulativeValue) maxCumulativeValue = cumulativeSavings;
      return { year, cumulativeCost, cumulativeSavings };
    });

    maxCumulativeValue *= 1.1;

    const xScale = (year: number) => (year / years[years.length - 1]) * chartWidth;
    const yScale = (value: number) => chartHeight - (value / maxCumulativeValue) * chartHeight;

    // Grid lines
    for (let i = 0; i <= 5; i++) {
      const y = (chartHeight / 5) * i;
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', '0');
      line.setAttribute('y1', y.toString());
      line.setAttribute('x2', chartWidth.toString());
      line.setAttribute('y2', y.toString());
      line.classList.add('grid-line');
      g.appendChild(line);

      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', '-10');
      text.setAttribute('y', y.toString());
      text.setAttribute('dominant-baseline', 'middle');
      text.setAttribute('text-anchor', 'end');
      text.classList.add('chart-label');
      text.textContent = `${currencySymbol}${(maxCumulativeValue * (5 - i) / 5).toFixed(0)}`;
      g.appendChild(text);
    }

    // Draw cumulative cost line
    const costPathData = data.map(d => `${xScale(d.year)},${yScale(d.cumulativeCost)}`).join(' ');
    const costPath = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    costPath.setAttribute('points', costPathData);
    costPath.classList.add('line-chart-line', 'line-chart-cost');
    g.appendChild(costPath);

    // Draw cumulative savings line
    const savingsPathData = data.map(d => `${xScale(d.year)},${yScale(d.cumulativeSavings)}`).join(' ');
    const savingsPath = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    savingsPath.setAttribute('points', savingsPathData);
    savingsPath.classList.add('line-chart-line', 'line-chart-savings');
    g.appendChild(savingsPath);

    // X-axis labels (years)
    for (let i = 0; i <= 25; i += 5) {
      const x = xScale(i);
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', x.toString());
      text.setAttribute('y', (chartHeight + 20).toString());
      text.setAttribute('text-anchor', 'middle');
      text.classList.add('chart-label');
      text.textContent = i.toString();
      g.appendChild(text);
    }

    // Y-axis label
    const yAxisLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    yAxisLabel.setAttribute('x', (-chartHeight / 2).toString());
    yAxisLabel.setAttribute('y', (-margin.left + 25).toString());
    yAxisLabel.setAttribute('text-anchor', 'middle');
    yAxisLabel.setAttribute('transform', 'rotate(-90)');
    yAxisLabel.classList.add('chart-label');
    yAxisLabel.textContent = `Amount (${currencySymbol})`;
    g.appendChild(yAxisLabel);

    // X-axis line
    const xAxisLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    xAxisLine.setAttribute('x1', '0');
    xAxisLine.setAttribute('y1', chartHeight.toString());
    xAxisLine.setAttribute('x2', chartWidth.toString());
    xAxisLine.setAttribute('y2', chartHeight.toString());
    xAxisLine.classList.add('axis-line');
    g.appendChild(xAxisLine);

    // Y-axis line
    const yAxisLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    yAxisLine.setAttribute('x1', '0');
    yAxisLine.setAttribute('y1', '0');
    yAxisLine.setAttribute('x2', '0');
    yAxisLine.setAttribute('y2', chartHeight.toString());
    yAxisLine.classList.add('axis-line');
    g.appendChild(yAxisLine);

    // Payback point
    if (paybackPeriod !== Infinity && paybackPeriod > 0) {
      const paybackX = xScale(paybackPeriod);
      const paybackY = yScale(totalCost);
      
      const paybackDot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      paybackDot.setAttribute('cx', paybackX.toString());
      paybackDot.setAttribute('cy', paybackY.toString());
      paybackDot.setAttribute('r', '4');
      paybackDot.classList.add('payback-dot');
      g.appendChild(paybackDot);

      const paybackLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      paybackLabel.setAttribute('x', (paybackX + 8).toString());
      paybackLabel.setAttribute('y', (paybackY - 8).toString());
      paybackLabel.classList.add('chart-label');
      paybackLabel.textContent = `Payback: ${paybackPeriod.toFixed(1)}y`;
      g.appendChild(paybackLabel);
    }

    containerRef.current.appendChild(svg);
  };

  if (!isOpen || !mounted) return null;

  const modalContent = (
    <div className="pvss-modal-overlay">
      <div className="pvss-modal-content scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{langContent.pvssTitle}</h2>
              <p className="text-sm text-gray-600">{langContent.pvssSubtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
              aria-label={langContent.pvssCloseButton}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <form onSubmit={calculateSystem} className="space-y-6">
            {/* Roof Size */}
            <div className="bg-gray-50 p-4 rounded-xl">
              <h3 className={`text-lg font-semibold text-gray-800 mb-3 ${currentLang === 'ar' ? 'text-right' : 'text-left'}`}>
                {currentLang === 'ar' ? 'حجم السطح' : 'Roof Size'}
              </h3>
              <div className={`flex gap-3 items-center ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                <input
                  type="number"
                  value={roofSize}
                  onChange={(e) => setRoofSize(e.target.value)}
                  placeholder="Enter roof size"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <select
                  value={roofUnit}
                  onChange={(e) => setRoofUnit(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="m²">m²</option>
                  <option value="ft²">ft²</option>
                </select>
              </div>
            </div>

            {/* Equipment Selection */}
            <div className="bg-gray-50 p-4 rounded-xl">
              <h3 className={`text-lg font-semibold text-gray-800 mb-3 ${currentLang === 'ar' ? 'text-right' : 'text-left'}`}>
                {currentLang === 'ar' ? 'اختيار المعدات' : 'Equipment Selection'}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${currentLang === 'ar' ? 'text-right' : 'text-left'}`}>{langContent.pvssPanelTypeLabel}</label>
                  <select
                    value={panelType}
                    onChange={(e) => setPanelType(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    {panelTypes.map((panel) => (
                      <option key={panel.name} value={panel.name}>
                        {panel.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${currentLang === 'ar' ? 'text-right' : 'text-left'}`}>{langContent.pvssInverterTypeLabel}</label>
                  <select
                    value={inverterType}
                    onChange={(e) => setInverterType(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    {inverterTypes.map((inverter) => (
                      <option key={inverter.name} value={inverter.name}>
                        {inverter.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Energy Consumption */}
            <div className="bg-gray-50 p-4 rounded-xl">
              <h3 className={`text-lg font-semibold text-gray-800 mb-3 ${currentLang === 'ar' ? 'text-right' : 'text-left'}`}>
                {currentLang === 'ar' ? 'الاستهلاك اليومي للطاقة' : 'Daily Energy Consumption'}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${currentLang === 'ar' ? 'text-right' : 'text-left'}`}>{langContent.pvssBedroomsLabel}</label>
                  <input
                    type="number"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    min="1"
                    max="10"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${currentLang === 'ar' ? 'text-right' : 'text-left'}`}>{langContent.pvssAppliancesLabel}</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { key: 'airConditioning', label: langContent.pvssApplianceAC },
                      { key: 'waterHeater', label: langContent.pvssApplianceWaterHeater },
                      { key: 'refrigerator', label: langContent.pvssApplianceRefrigerator },
                      { key: 'washingMachine', label: langContent.pvssApplianceWashingMachine },
                      { key: 'electricOven', label: langContent.pvssApplianceOven },
                      { key: 'electronics', label: langContent.pvssApplianceElectronics },
                    ].map((appliance) => (
                      <label key={appliance.key} className={`flex items-center ${currentLang === 'ar' ? 'flex-row-reverse space-x-reverse' : 'space-x-2'}`}>
                        <input
                          type="checkbox"
                          checked={appliances[appliance.key as keyof typeof appliances]}
                          onChange={(e) => setAppliances(prev => ({
                            ...prev,
                            [appliance.key]: e.target.checked
                          }))}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className={`text-sm text-gray-700 ${currentLang === 'ar' ? 'text-right' : 'text-left'}`}>{appliance.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Daily Energy Consumption Override */}
            <div className="bg-gray-50 p-4 rounded-xl">
              <label className={`block text-sm font-medium text-gray-700 mb-2 ${currentLang === 'ar' ? 'text-right' : 'text-left'}`}>{langContent.pvssDailyConsumptionLabel}</label>
              <div className={`flex items-center gap-3 ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                <input
                  type="number"
                  value={dailyConsumption}
                  onChange={(e) => setDailyConsumption(e.target.value)}
                  placeholder="e.g., 20"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  min="0"
                />
                <span className="text-sm text-gray-600 font-medium">kWh</span>
              </div>
              <p className={`text-sm text-gray-500 mt-1 ${currentLang === 'ar' ? 'text-right' : 'text-left'}`}>If manually entered, this value will override the estimated consumption.</p>
            </div>

            {/* Maintenance Cost */}
            <div className="bg-gray-50 p-4 rounded-xl">
              <h3 className={`text-lg font-semibold text-gray-800 mb-3 flex items-center ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                <i className={`fas fa-tools text-blue-500 ${currentLang === 'ar' ? 'ml-2' : 'mr-2'}`}></i>
                {langContent.pvssMaintenanceTitle}
              </h3>
              <div className={`flex items-center mb-4 ${currentLang === 'ar' ? 'flex-row-reverse space-x-reverse' : 'space-x-2'}`}>
                <input
                  type="checkbox"
                  checked={includeMaintenance}
                  onChange={(e) => setIncludeMaintenance(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label className={`text-gray-700 font-medium ${currentLang === 'ar' ? 'text-right' : 'text-left'}`}>
                  {currentLang === 'ar' ? 'تضمين تكلفة الصيانة السنوية في الحسابات' : 'Include annual maintenance cost in calculations'}
                </label>
              </div>
              {includeMaintenance && (
                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${currentLang === 'ar' ? 'text-right' : 'text-left'}`}>
                    {currentLang === 'ar' ? 'تكلفة الصيانة السنوية (% من إجمالي تكلفة النظام):' : 'Annual Maintenance Cost (% of Total System Cost):'}
                  </label>
                  <div className={`flex items-center gap-3 ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                    <input
                      type="number"
                      value={maintenancePercentage}
                      onChange={(e) => setMaintenancePercentage(parseFloat(e.target.value) || 1)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      min="0"
                      max="10"
                    />
                    <span className="text-sm text-gray-600 font-medium">%</span>
                  </div>
                  <p className={`text-sm text-gray-500 mt-1 ${currentLang === 'ar' ? 'text-right' : 'text-left'}`}>
                    {currentLang === 'ar' ? 'عادة 1-2% من تكلفة النظام سنوياً.' : 'Typically 1-2% of system cost annually.'}
                  </p>
                </div>
              )}
            </div>

            {errorMessage && (
              <div className="text-red-600 text-center font-medium p-4 bg-red-50 rounded-xl border-2 border-red-200">
                <i className="fas fa-exclamation-triangle mr-2"></i>
                {errorMessage}
              </div>
            )}

            {/* Calculate Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors shadow-lg hover:shadow-xl"
              >
                <i className="fas fa-calculator mr-2"></i>
                {langContent.pvssCalculateButton}
              </button>
            </div>

            {/* Results */}
            {showResults && results && (
              <div ref={resultsSectionRef} className="space-y-4 mt-6 pt-6 border-t-2 border-gray-200">
                {/* Your PV System Recommendation */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <i className="fas fa-solar-panel mr-2 text-blue-500"></i>
                    {langContent.pvssResultsTitle}
                  </h3>
                  
                  <div className="space-y-3">
                    {/* Recommended PV Panel Size */}
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <div className={`flex items-center ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-6 h-6 flex items-center justify-center ${currentLang === 'ar' ? 'ml-3' : 'mr-3'}`}>
                          <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{langContent.pvssPanelSizeLabel}</div>
                          <div className="text-lg font-bold text-gray-800">{results.panelSize} kWp</div>
                          <div className="text-sm text-gray-600">
                            ({Math.round(results.panelSize * 1000 / 350)} panels, approx. 1.7m² each)
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Estimated Annual Energy Generated */}
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <div className={`flex items-center ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-6 h-6 flex items-center justify-center ${currentLang === 'ar' ? 'ml-3' : 'mr-3'}`}>
                          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{langContent.pvssEnergyGeneratedLabel}</div>
                          <div className="text-lg font-bold text-gray-800">{results.energyGenerated.toLocaleString()} kWh/year</div>
                          <div className="text-sm text-gray-600">
                            ({(results.energyGenerated / 365).toFixed(1)} kWh/day)
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Recommended Battery Storage */}
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <div className={`flex items-center ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-6 h-6 flex items-center justify-center ${currentLang === 'ar' ? 'ml-3' : 'mr-3'}`}>
                          <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H4zm2 4a1 1 0 000 2h4a1 1 0 100-2H6zm0 3a1 1 0 000 2h4a1 1 0 100-2H6zm0 3a1 1 0 000 2h2a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{langContent.pvssBatteryStorageLabel}</div>
                          <div className="text-lg font-bold text-gray-800">{results.batteryStorage} kWh</div>
                          <div className="text-sm text-gray-600">
                            (Lithium-ion Battery - LiFePO4 recommended)
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Recommended Inverter Size */}
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <div className={`flex items-center ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-6 h-6 flex items-center justify-center ${currentLang === 'ar' ? 'ml-3' : 'mr-3'}`}>
                          <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{langContent.pvssInverterSizeLabel}</div>
                          <div className="text-lg font-bold text-gray-800">{results.inverterSize} kW</div>
                          <div className="text-sm text-gray-600">
                            ({inverterType})
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Estimated Annual CO2 Savings */}
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <div className={`flex items-center ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-6 h-6 flex items-center justify-center ${currentLang === 'ar' ? 'ml-3' : 'mr-3'}`}>
                          <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{langContent.pvssCO2SavingsLabel}</div>
                          <div className="text-lg font-bold text-gray-800">{results.co2Savings.toLocaleString()} kg CO₂/year</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Charts */}
                <div className="space-y-4">
                  <div className="bg-blue-100 p-4 rounded-xl">
                    <h4 className="text-sm font-semibold text-blue-800 mb-2">{langContent.pvssVisualSystemLayout}</h4>
                    <div ref={panelLayoutRef} className="bg-blue-100 rounded-lg p-3" style={{ height: '200px' }}></div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-green-50 p-4 rounded-xl">
                      <h4 className="text-sm font-semibold text-green-800 mb-3">{langContent.pvssMonthlyEnergyProduction}</h4>
                      <div ref={monthlyChartRef} className="bg-white rounded-lg p-3" style={{ height: '250px' }}></div>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-xl">
                      <h4 className="text-sm font-semibold text-purple-800 mb-3">{langContent.pvssSavingsTimeline}</h4>
                      <div ref={savingsTimelineRef} className="bg-white rounded-lg p-3" style={{ height: '250px' }}></div>
                    </div>
                  </div>
                </div>

                {/* Cost Breakdown */}
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">{langContent.pvssCostBreakdownTitle}</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{langContent.pvssCostPanels}</span>
                      <div className="text-right">
                        <div className="text-sm font-bold text-gray-800">£{results.costBreakdown.panels.toLocaleString()}</div>
                        <div className="text-xs text-gray-600">AED {results.costBreakdown.panelsAed.toLocaleString()}</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{langContent.pvssCostInverter}</span>
                      <div className="text-right">
                        <div className="text-sm font-bold text-gray-800">£{results.costBreakdown.inverter.toLocaleString()}</div>
                        <div className="text-xs text-gray-600">AED {results.costBreakdown.inverterAed.toLocaleString()}</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{langContent.pvssCostBattery}</span>
                      <div className="text-right">
                        <div className="text-sm font-bold text-gray-800">£{results.costBreakdown.battery.toLocaleString()}</div>
                        <div className="text-xs text-gray-600">AED {results.costBreakdown.batteryAed.toLocaleString()}</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{langContent.pvssCostInstallation}</span>
                      <div className="text-right">
                        <div className="text-sm font-bold text-gray-800">£1,000</div>
                        <div className="text-xs text-gray-600">AED 4,500</div>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-300 mt-4 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-800">{langContent.pvssTotalCostGBP}</span>
                      <span className="text-lg font-bold text-blue-600">£{results.totalCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-sm font-medium text-gray-600">{langContent.pvssTotalCostAED}</span>
                      <span className="text-sm font-bold text-blue-600">AED {results.totalCostAed.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Estimated Savings & Payback */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className={`text-xl font-bold text-gray-800 mb-4 flex items-center ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                    <svg className={`w-5 h-5 text-blue-500 ${currentLang === 'ar' ? 'ml-2' : 'mr-2'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                    {langContent.pvssSavingsTitle}
                  </h3>
                  
                  <div className="space-y-3">
                    {/* Estimated Annual Maintenance Cost */}
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <div className={`flex items-center ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-6 h-6 flex items-center justify-center ${currentLang === 'ar' ? 'ml-3' : 'mr-3'}`}>
                          <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{langContent.pvssMaintenanceCostLabel}</div>
                          <div className="text-lg font-bold text-gray-800">
                            £{results.annualMaintenanceCost.toLocaleString()}/year
                          </div>
                          <div className="text-sm text-gray-600">
                            AED {results.annualMaintenanceCostAed.toLocaleString()}/year
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Estimated Annual Savings (GBP) */}
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <div className={`flex items-center ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-6 h-6 flex items-center justify-center ${currentLang === 'ar' ? 'ml-3' : 'mr-3'}`}>
                          <div className="w-4 h-4 bg-green-500 rounded-sm flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{langContent.pvssAnnualSavingsGBP}</div>
                          <div className="text-lg font-bold text-gray-800">
                            £{results.annualSavings.toLocaleString()}/year
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Estimated Annual Savings (AED) */}
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <div className={`flex items-center ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-6 h-6 flex items-center justify-center ${currentLang === 'ar' ? 'ml-3' : 'mr-3'}`}>
                          <div className="w-4 h-4 bg-green-500 rounded-sm flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{langContent.pvssAnnualSavingsAED}</div>
                          <div className="text-lg font-bold text-gray-800">
                            AED {results.annualSavingsAed.toLocaleString()}/year
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Estimated Payback Period */}
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <div className={`flex items-center ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-6 h-6 flex items-center justify-center ${currentLang === 'ar' ? 'ml-3' : 'mr-3'}`}>
                          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{langContent.pvssPaybackPeriod}</div>
                          <div className="text-lg font-bold text-gray-800">
                            {results.paybackPeriod === Infinity ? 'Not achievable with current savings' : `${results.paybackPeriod} years`}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Collapsible Assumptions */}
            <div className="mt-6">
              <button
                type="button"
                onClick={() => setShowAssumptions(!showAssumptions)}
                className="flex items-center justify-between w-full p-4 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
              >
                <span className="font-medium text-gray-700">{langContent.pvssAssumptionsTitle}</span>
                <i className={`fas fa-chevron-${showAssumptions ? 'up' : 'down'} text-gray-500`}></i>
              </button>
              
              {showAssumptions && (
                <div className={`mt-4 p-4 bg-gray-50 rounded-xl text-sm text-gray-600 space-y-3 ${currentLang === 'ar' ? 'text-right' : 'text-left'}`}>
                  <p><strong>{currentLang === 'ar' ? '١. ' : '1. '}{langContent.pvssAssumption5}</strong></p>
                  <p><strong>{currentLang === 'ar' ? '٢. ' : '2. '}{langContent.pvssAssumption6}</strong></p>
                  <p><strong>{currentLang === 'ar' ? '٣. ' : '3. '}{langContent.pvssAssumption7}</strong></p>
                  <p><strong>{currentLang === 'ar' ? '٤. ' : '4. '}{langContent.pvssAssumption8}</strong></p>
                  <p><strong>{currentLang === 'ar' ? '٥. ' : '5. '}{langContent.pvssAssumption9}</strong></p>
                  <p><strong>{currentLang === 'ar' ? '٦. ' : '6. '}{langContent.pvssAssumption10}</strong></p>
                  <p><strong>{currentLang === 'ar' ? '٧. ' : '7. '}{currentLang === 'ar' ? 'أبعاد الألواح النموذجية: مفترضة ١.٧ متر × ١.٠ متر (حوالي ١.٧ م² لكل لوح).' : 'Typical Panel Dimensions: Assumed 1.7 meters x 1.0 meter (approximately 1.7 m² per panel).'}</strong></p>
                  <p><strong>{currentLang === 'ar' ? '٨. ' : '8. '}{currentLang === 'ar' ? 'كفاءة العاكس: بناءً على نوع العاكس المحدد.' : 'Inverter Efficiency: Based on selected inverter type.'}</strong></p>
                  <p><strong>{currentLang === 'ar' ? '٩. ' : '9. '}{currentLang === 'ar' ? 'أسعار الكهرباء المقدرة ومنهجية الوفورات:' : 'Estimated Electricity Prices and Savings Methodology:'}</strong></p>
                  <div className="ml-4 space-y-2">
                    <p><strong>{currentLang === 'ar' ? 'أ. ' : 'a. '}{currentLang === 'ar' ? 'أسعار الكهرباء المقدرة: مفترضة ٠.٢٨ جنيه إسترليني / ٠.٤٥ درهم إماراتي لكل كيلوواط ساعة (متوسط الأسعار السكنية).' : 'Estimated Electricity Prices: Assumed £0.28 / AED 0.45 per kWh (average residential prices).'}</strong></p>
                    <p><strong>{currentLang === 'ar' ? 'ب. ' : 'b. '}{currentLang === 'ar' ? 'منهجية توفير التكاليف: تحسب هذه الطريقة المبلغ الذي لن تضطر إلى دفعه مقابل الكهرباء من الشبكة، لأن نظامك الشمسي يولد تلك الكهرباء لك. يتم اشتقاقها بضرب "إجمالي الطاقة السنوية المولدة (كيلوواط ساعة/سنة)" في "سعر الكهرباء المقدر (£/كيلوواط ساعة أو درهم إماراتي/كيلوواط ساعة)". يفترض هذا أن جميع الطاقة المولدة تعوض الاستهلاك أو يتم احتسابها لك عبر نظام صافي القياس.' : 'Cost Savings Methodology: This method calculates the amount you won\'t have to pay for grid electricity because your solar system generates that electricity for you. It is derived by multiplying "Total Annual Energy Generated (kWh/year)" by "Estimated Electricity Price (£/kWh or AED/kWh)". This assumes all generated energy offsets consumption or is credited via a net metering system.'}</strong></p>
                    <p><strong>{currentLang === 'ar' ? 'ج. ' : 'c. '}{currentLang === 'ar' ? 'تكلفة الصيانة السنوية: إذا تم تمكينها، يتم خصم تكلفة صيانة سنوية (عادة ١-٢% من إجمالي تكلفة النظام) من إجمالي الوفورات السنوية لتحديد صافي الوفورات.' : 'Annual Maintenance Cost: If enabled, an annual maintenance cost (typically 1-2% of the total system cost) is deducted from the total annual savings to determine net savings.'}</strong></p>
                    <p><strong>{currentLang === 'ar' ? 'د. ' : 'd. '}{currentLang === 'ar' ? 'منهجية فترة الاسترداد البسيطة: تقدر هذه المدة التي يستغرقها استرداد استثمارك الأولي في نظام الطاقة الشمسية من خلال وفورات التكلفة السنوية "الصافية". يتم حسابها بقسمة "إجمالي التكلفة المقدرة (الألواح، العاكس، البطارية، التركيب)" على "صافي الوفورات السنوية المقدرة".' : 'Simple Payback Period Methodology: This estimates the time it takes to recover your initial investment in a solar system through "net" annual cost savings. It is calculated by dividing "Estimated Total Cost (Panels, Inverter, Battery, Installation)" by "Estimated Net Annual Savings".'}</strong></p>
                    <p className="text-red-600"><strong>{currentLang === 'ar' ? 'تستند هذه الأرقام إلى الافتراضات الحالية ولا تأخذ في الاعتبار تقلبات أسعار الكهرباء المستقبلية أو التضخم أو عوامل مالية معقدة أخرى لتحليل أكثر تفصيلاً.' : 'These figures are based on current assumptions and do not account for future electricity price fluctuations, inflation, or other complex financial factors for a more detailed analysis.'}</strong></p>
                  </div>
                  <p><strong>{currentLang === 'ar' ? '١٠. ' : '10. '}{currentLang === 'ar' ? 'التكاليف التقديرية: بناءً على المعدات المختارة وأسعار السوق التقريبية لـ:' : 'Estimated Costs: Based on selected equipment and approximate market prices for:'}</strong></p>
                  <div className="ml-4 space-y-2">
                    <p><strong>{currentLang === 'ar' ? 'الألواح الشمسية: تختلف حسب النوع المختار' : 'Solar Panels: Varies by selected type.'}</strong></p>
                    <p><strong>{currentLang === 'ar' ? 'العاكس: يختلف حسب النوع المختار' : 'Inverter: Varies by selected type.'}</strong></p>
                    <p><strong>{currentLang === 'ar' ? 'البطارية: ٣٠٠ جنيه إسترليني / ١٤٠٠ درهم إماراتي لكل كيلوواط ساعة' : 'Battery: £300 / AED 1400 per kWh.'}</strong></p>
                    <p><strong>{currentLang === 'ar' ? 'تكاليف التركيب والخدمات الإضافية: ١٠٠٠ جنيه إسترليني / ٤٥٠٠ درهم إماراتي (تغطي العمالة، التركيب، الأسلاك، التصاريح، إلخ)' : 'Installation & Soft Costs: £1000 / AED 4500 (covers labor, installation, wiring, permits, etc.).'}</strong></p>
                    <p className="text-red-600"><strong>{currentLang === 'ar' ? 'هذه تقديرات تقريبية وقد تختلف بشكل كبير بناءً على العلامة التجارية والجودة والموقع ومتطلبات التركيب المحددة.' : 'These are approximate estimates and may vary significantly based on brand, quality, location, and specific installation requirements.'}</strong></p>
                  </div>
                  <p><strong>{currentLang === 'ar' ? '١١. ' : '11. '}{langContent.pvssAssumption3}</strong></p>
                  <p><strong>{currentLang === 'ar' ? '١٢. ' : '12. '}{langContent.pvssAssumption12}</strong></p>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
