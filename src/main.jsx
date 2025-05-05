import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Router/Root.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import ContactUs from './Components/Contact Us/ContactUs.jsx';
import Error404 from './Components/Errror404/Error404.jsx';
import CoRoot from './Router/CoRoot.jsx';
import PrivacyPolicy from './Components/Policy/PrivacyPolicy.jsx';
import TermsAndCondition from './Components/Policy/TermsAndCondition.jsx';
import ReturnPolicy from './Components/Policy/ReturnPolicy.jsx';
import TermsAndService from './Components/Policy/TermsAndService.jsx';
import Faq from './Components/Faq/Faq.jsx';
import Login from './Components/Auth/Login.jsx';
import Signup from './Components/Auth/Signup.jsx';
import { HelmetProvider } from 'react-helmet-async';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    loader: () => fetch('event.json'),
    children: [
      {
        index: true,
        element: <Home></Home>
      }, 
    ]
  },

  {
    path: '*',
    element: <Error404></Error404>
  },


  // CoRoot for footer 
  {
    path: '/',
    element: <CoRoot></CoRoot>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
     {
        path: '/contact-us',
        element: <ContactUs></ContactUs>
      },
     {
        path: '/privacy-policy',
        element: <PrivacyPolicy></PrivacyPolicy>
      },
     {
        path: '/terms-condition',
        element: <TermsAndCondition></TermsAndCondition>
      },
     {
        path: '/return-policy',
        element: <ReturnPolicy></ReturnPolicy>
      },
     {
        path: '/terms-service',
        element: <TermsAndService></TermsAndService>
      },
     {
        path: '/faq',
        element: <Faq></Faq>
      },
      {
        path: '/login',
        element: <Login></Login>
      }, 
      {
        path: '/signup',
        element: <Signup></Signup>
      }
    ]
  }
  
  
  

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <HelmetProvider>
     <RouterProvider router={router} />
     </HelmetProvider>
  </StrictMode>,
)
