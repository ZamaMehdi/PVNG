# MongoDB Atlas Setup Guide

## 1. Get Your MongoDB Atlas Connection String

1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Sign in to your account
3. Click on "Connect" for your cluster
4. Choose "Connect your application"
5. Select "Node.js" as the driver
6. Copy the connection string

## 2. Update Environment Variables

Edit the `.env.local` file in your project root and replace the placeholder values:

```env
# MongoDB Atlas Configuration
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
MONGODB_DB=pvng_website
```

Replace:
- `<username>` with your MongoDB Atlas username
- `<password>` with your MongoDB Atlas password
- `<cluster>` with your cluster name
- `<database>` with your preferred database name (or use `pvng_website`)

## 3. Database Collections

The system will automatically create these collections:
- `contact_submissions` - Stores all contact form submissions
- `pvss_calculations` - (Optional) For future PVSS calculator data

## 4. Test the Connection

1. Start your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the contact form
4. Check your MongoDB Atlas dashboard to see the new document

## 5. View Submissions

You can view all form submissions by visiting:
- `http://localhost:3000/api/contact` (GET request)

## 6. Security Notes

- Never commit your `.env.local` file to version control
- Use strong passwords for your MongoDB Atlas account
- Consider setting up IP whitelisting in MongoDB Atlas for production
- Use environment-specific connection strings for different deployments

## 7. Production Deployment

For production deployment (Vercel, Netlify, etc.):
1. Add the environment variables in your hosting platform's dashboard
2. Make sure to use the production MongoDB Atlas connection string
3. Update the database name if needed

