
# Conference Event – A Local Event Discovery Platform

Conference Event is a modern single-page application (SPA) built with React that allows users to discover and explore local events like conferences. Users can browse upcoming events, reserve seats, and view full event details after logging in.


# GitHub Link: 
https://github.com/programming-hero-web-course1/b11a9-react-authentication-freelancer-rased


# Key Features
- Email and Passowrd login using Firebase Authentication
- Google sign in Integration
- Protected Routes for event details and profile
- Forget Password functionality
- Dynamics page titles using React Helmet
- User image show after login beside the logout button and User name will show if hover on image
- Swiper slider integrated 
- Fully REsponsive design (Mobile, Tablet, Desktop)
- 404 Not Found Page setup 
- Added 2 Extra route 
- Signup integration 
- Logout Integration
- If user reload the page after login then User will not logout
- Added back to home button in 404 page
- Toggle eye button
- Toast integration


# JSON Data
- Created a local JSON file with 6+ events
- Each event contains:

    - id
    - category_id
    - name
    - thumbnail
    - category
    - date
    - location
    - entry_free
    - description
    - description_detials



# Authentication Features

- Password must contain:
  - At least 6 characters
  - One uppercase letter
  - One lowercase letter
- Google Sign-In
- Show/Hide Password toggle
- Forget password feature that redirects to Gmail after reset
- Session stays active after page reload



## My Profile (Challenge)

- Protected route
- Displays name, email, and profile image
- Allows editing name and photoURL
- Uses Firebase `updateProfile()` to update data



##  Environment Variables

Create a `.env.local` file in root

## Deployment
- Hosted on: Netlify




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


