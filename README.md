
# Conference Event – A Local Event Discovery Platform

Conference Event is a modern single-page application (SPA) built with React that allows users to discover and explore local events like conferences. Users can browse upcoming events, reserve seats, and view full event details after logging in.


# GitHub Link: 
https://github.com/programming-hero-web-course1/b11a9-react-authentication-freelancer-rased

# Live Link: https://a9-conference-event.netlify.app/

# Key Features
- Email and Passowrd login using Firebase Authentication
- Google sign in Integration
- Protected Routes for event details and profile
- Protected Route for Teams. I will show after login.
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


## Main Technologies Used

- React.js
- Firebase Authentication
- React Router
- React Helmet
- Swiper.js
- React Toastify
- Netlify
- JavaScript (ES6+)
- CSS / Responsive Design


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




