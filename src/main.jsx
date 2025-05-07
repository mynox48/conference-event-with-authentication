import { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider, { AuthContext } from "./Provider/AuthProvider";
import Root from "./Router/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import ContactUs from "./Components/Contact Us/ContactUs.jsx";
import Error404 from "./Components/Errror404/Error404.jsx";
import CoRoot from "./Router/CoRoot.jsx";
import PrivacyPolicy from "./Components/Policy/PrivacyPolicy.jsx";
import TermsAndCondition from "./Components/Policy/TermsAndCondition.jsx";
import ReturnPolicy from "./Components/Policy/ReturnPolicy.jsx";
import TermsAndService from "./Components/Policy/TermsAndService.jsx";
import Faq from "./Components/Faq/Faq.jsx";
import Login from "./Components/Auth/Login.jsx";
import Signup from "./Components/Auth/Signup.jsx";
import EventDetails from "./Components/Event Details/EventDetails.jsx";
import Teams from "./Components/Teams/Teams.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import "./index.css";
import MyProfile from "./Components/MyProfile/MyProfile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    loader: () => fetch("/event.json"),
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "*",
    element: <Error404></Error404>,
  },
  {
    path: "/",
    element: <CoRoot></CoRoot>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "/terms-condition",
        element: <TermsAndCondition></TermsAndCondition>,
      },
      {
        path: "/return-policy",
        element: <ReturnPolicy></ReturnPolicy>,
      },
      {
        path: "/terms-service",
        element: <TermsAndService></TermsAndService>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/event-details/:id",
        element: (
          <PrivateRoute>
            <EventDetails></EventDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/event.json"),
      },
      {
        path: "/teams",
        element: (
          <PrivateRoute>
            <Teams></Teams>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

// Main App Component
function App() {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  return <RouterProvider router={router} />;
}

// Rendering the App
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
