# SSJS USA Visa Booking Website

A responsive React-based website for SSJS Visa Services, providing USA visa application assistance.

## Overview

This website provides information and services for various US visa types including B1/B2 (Business/Tourist), F1 (Student), H1B (Work), L1 (Intra-company Transfer), and other visa categories. The site includes comprehensive details about visa requirements, application processes, and services offered by SSJS.

## Features

- **Responsive Design**: Fully mobile-responsive layout for all devices
- **Modern UI**: Built with Material-UI components for a clean, professional look
- **Comprehensive Information**: Detailed pages for various visa types
- **Contact Form**: Form validation with Formik and Yup
- **Easy Navigation**: Intuitive menu system for desktop and mobile

## Pages

1. **Home Page**: Overview of visa categories and services
2. **About Us Page**: Information about SSJS, mission, and trust highlights
3. **Visa Services Page**: Details about different visa types and application processes
4. **Contact Page**: Contact details and inquiry form

## Technology Stack

- React.js (Create React App)
- React Router for navigation
- Material-UI component library
- Formik for form handling
- Yup for form validation
- CSS-in-JS styling with Emotion
- Express.js for backend server
- Nodemailer for email functionality
- Axios for API requests

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine

### Installation

1. Clone the repository
```
git clone https://github.com/your-username/usa-visa-booking-website.git
```

2. Navigate to the project directory
```
cd usa-visa-booking-website
```

3. Install dependencies
```
npm install
```

### Running the Application

#### Setup Email Functionality

1. Create a `.env` file in the root directory with the following content:
```
PORT=3001
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

2. For Gmail accounts, you'll need to:
   - Enable 2-Step Verification in your Google account
   - Create an App Password: Go to your Google Account > Security > App passwords
   - Use this App Password in the `.env` file instead of your regular password

#### Development Mode

##### `npm run dev`

This command runs both the frontend and backend servers concurrently:
- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:3001](http://localhost:3001)

##### `npm start`

Runs only the frontend in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

##### `npm run server`

Runs only the backend server for email functionality.\
The server will run on [http://localhost:3001](http://localhost:3001).

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Setting Up Email Functionality

The contact form on this website uses a Node.js/Express server with Nodemailer to send emails. Follow these steps to set up email functionality:

1. **Configure Gmail Account**
   - Set up 2-Step Verification on your Gmail account if not already enabled
   - Generate an App Password:
     1. Go to https://myaccount.google.com/apppasswords
     2. Select "Mail" as the app and "Other" as the device (you can name it "SSJS Website")
     3. Copy the generated 16-character password

2. **Configure Environment Variables (Simple Setup)**
   - Create or edit the `.env` file in the root directory
   - Add the following configuration:
     ```
     PORT=3001
     EMAIL_USER=your-gmail-address@gmail.com
     EMAIL_PASS=your-16-character-app-password
     ```

3. **Configure Environment Variables (Secure Setup with Encryption)**
   - For enhanced security, you can encrypt your email password
   - Run the password encryption utility:
     ```
     node setup-email-encryption.js
     ```
   - Follow the prompts to enter your Gmail App Password
   - The script will automatically:
     - Generate an encryption key
     - Encrypt your password
     - Update the `.env` file with both values

4. **Starting the Email Server**
   - To start both the React frontend and Express email server:
     ```
     npm run dev
     ```
   - To start only the email server:
     ```
     npm run server
     ```

5. **Testing Email Functionality**
   - Fill out the contact form on the website
   - Check console output for success/error messages
   - Verify that both notification and confirmation emails are sent
   - For debugging email issues, visit `http://localhost:3001/api/email-config-check`

**Note:** Make sure you never commit your `.env` file with actual credentials to version control.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
