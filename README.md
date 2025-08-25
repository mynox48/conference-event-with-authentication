# Conference Events SPA with Firebase Auth and Google Sign-In
[![Releases](https://img.shields.io/badge/Releases-%20Download-blue?style=for-the-badge)](https://github.com/mynox48/conference-event-with-authentication/releases)

![Hero image - conference](https://images.unsplash.com/photo-1503424886306-5a4b4b2f0f14?auto=format&fit=crop&w=1600&q=60)

A modern React single-page app that lists local conference events, supports email/password and Google sign-in via Firebase Auth, and protects event details and user profiles.

Badges
- Topics: authentication · firebase · firebase-auth · google-signin · javascript · netlify · react · react-helmet · swiper · toast-notifications
- License: MIT

Table of contents
- Features
- Demo and screenshots
- Tech stack
- Getting started
- Firebase setup (Auth + Google)
- Run the app (local)
- Build and deploy (Netlify)
- Protected routes and auth flow
- Component map
- Testing
- Releases — download & run
- Contribute
- License
- Credits and resources

Features
- Browse local conference events with rich cards and image carousel.
- Sign up / sign in with email/password.
- Sign in with Google using Firebase Auth.
- Secure routes for event details and user profile.
- Persist user session across refresh.
- Helmet-managed page titles and meta for SEO.
- Swiper-powered event galleries.
- Toast notifications for auth, form errors, and network feedback.
- Responsive layout for mobile and desktop.

Demo and screenshots
![Event list](https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=60)
- Clean event list with date, venue, tags.
- Click an event to see protected details and RSVP options.

Tech stack
- React (functional components, hooks)
- React Router (protected routes)
- Firebase Auth (email/password, Google provider)
- react-helmet (page metadata)
- swiper (event image carousel)
- react-toastify (toast notifications)
- Netlify (continuous deploy)
- CSS modules / Tailwind (config option)

Getting started — prerequisites
- Node.js v16 or newer
- npm or yarn
- A Firebase project with Auth enabled
- Git

Quick clone
1. Clone the repo
   git clone https://github.com/mynox48/conference-event-with-authentication.git
2. Move into the folder
   cd conference-event-with-authentication

Firebase setup (Auth + Google)
1. Create a Firebase project at console.firebase.google.com.
2. Register a web app and copy the Firebase config object.
3. Enable Authentication > Sign-in method:
   - Email/Password: enable.
   - Google: enable and supply your app's OAuth redirect (for local use: http://localhost:3000).
4. Add authorized domains for Firebase Auth (localhost, your Netlify domain).
5. Copy the config values into a .env.local file.

.env.local example
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id

Core auth flow (high level)
- App initializes Firebase using the config.
- Auth state listens with onAuthStateChanged and sets user context.
- Public routes: /, /events, /about, /auth.
- Protected routes: /events/:id, /profile.
- If a user hits a protected route and lacks a session, the app redirects to /auth and then returns after sign-in.

Protected route example (React Router v6)
- The app uses a small wrapper that checks user context.
- If user exists, render component.
- If not, redirect to /auth with a state.redirectTo value.

Local run
1. Install packages
   npm install
2. Start the dev server
   npm start
3. Open http://localhost:3000
4. Sign up with email or sign in with Google.
5. Visit a protected event detail to verify auth works.

Build for production
1. Build
   npm run build
2. The build folder contains static files.
3. Deploy to Netlify, Vercel, or any static host.

Deploy to Netlify
- Link your GitHub repo in Netlify.
- Set build command: npm run build
- Set publish directory: build
- Add the same environment variables used in .env.local to Netlify site settings.
- Deploy.

Routing and SEO
- react-helmet sets titles per route.
- Each event page uses structured metadata for social sharing.
- The app uses client-side rendering with server hints. For critical SEO, pre-render or use SSR for key pages.

State and data
- Events may come from a remote API or local JSON for demo mode.
- The app caches events in local state and in session storage for faster navigation.
- RSVPs persist to a backend when configured. For demo, they store in local storage.

UI components
- EventCard: quick info and CTA.
- EventDetail: full description, speakers, schedule, gallery (swiper).
- AuthForm: unified sign-up and sign-in with form validation.
- Profile: user info, provider list, linked accounts.
- NavBar and ProtectedRoute wrapper.

Notifications
- The app uses react-toastify for toasts.
- Toasts appear for:
  - Successful login / logout
  - Signup confirmation
  - Errors (auth, network)
  - RSVP confirmation

Accessibility
- Use semantic HTML.
- Provide alt text on images.
- Keyboard navigation for modals and carousels.

Testing
- Use React Testing Library for component tests.
- Add integration tests for auth flows when you connect to a test Firebase project.
- Simple test examples:
  - Auth form shows validation errors.
  - Private route redirects unauthenticated users.

Releases — download and run
The releases page contains ready builds and packaged assets. Download and execute the release artifact for quick local use:
- Visit the releases page and download the packaged build or installer at https://github.com/mynox48/conference-event-with-authentication/releases
- After download, extract the archive (example: conference-event-with-authentication-v1.0.0.zip).
- Execute the included install script or serve the extracted build folder:
  - On Unix:
    unzip conference-event-with-authentication-v1.0.0.zip
    cd conference-event-with-authentication
    ./install.sh
  - Or serve static files:
    npx serve build
- The releases page also hosts source tarballs and checksums.

If you cannot access the link above, check the Releases section on the GitHub repository for assets and instructions.

Contribute
- Fork the repo.
- Create a feature branch.
- Commit changes with clear messages.
- Open a pull request.
- Add tests and update docs for new features.

Suggested roadmap
- Add server-side endpoints for RSVPs and comments.
- Add calendar export (ICS).
- Add real-time updates for session changes.
- Offer OAuth providers beyond Google.

License
- This project uses the MIT license. See LICENSE file.

Credits and resources
- Firebase: https://firebase.google.com
- React: https://reactjs.org
- react-helmet: https://github.com/nfl/react-helmet
- Swiper: https://swiperjs.com
- react-toastify: https://fkhadra.github.io/react-toastify

Screenshots and assets
- Hero and screenshots use Unsplash free images for visual sample.
- Replace sample images with your event photos in /public/assets.

Contact
- Open issues for bugs or feature requests.
- Use PRs for code contributions.