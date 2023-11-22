import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Home_v7 from './pages/Home_v7';
import JobList from './pages/JobList';
import Employer_v1 from './pages/Employer_v1';
import Employer_v2 from './pages/Employer_v2';
import Employer_v3 from './pages/Employer_v3';
import Employer_v4 from './pages/Employer_v4';
import Employer_v5 from './pages/Employer_v5';
import Employer_v6 from './pages/Employer_v6';
import Employer_v7 from './pages/Employer_v7';
import Employersingle_v1 from './pages/Employersingle_v1';
import Employersingle_v2 from './pages/Employersingle_v2';
import EmployerReview from './pages/EmployerReview';
import Employernotfound from './pages/Employernotfound';
import Employerdashboard from './pages/Employerdashboard';
import Candidates_v1 from './pages/Candidates_v1';
import Candidates_v2 from './pages/Candidates_v2';
import Candidates_v3 from './pages/Candidates_v3';
import Candidates_v4 from './pages/Candidates_v4';
import Candidates_v5 from './pages/Candidates_v5';
import Candidates_v6 from './pages/Candidates_v6';
import Candidates_v7 from './pages/Candidates_v7';
import SampleCV from './pages/SampleCV';
import SampleCVdetails from './pages/SampleCVdetails';
import SampleCVslidebar from './pages/SampleCVslidebar';
import Candidatesingle_v1 from './pages/Candidatesingle_v1';
import Candidatesingle_v2 from './pages/Candidatesingle_v2';
import Blog_v1 from './pages/Blog_v1';
import Blog_v2 from './pages/Blog_v2';
import Blog_v3 from './pages/Blog_v3';
import Blogsingle_v1 from './pages/Blogsingle_v1';
import Blogsingle_v2 from './pages/Blogsingle_v2';
import Blogsingle_v3 from './pages/Blogsingle_v3';
import Shop from './pages/Shop';
import Shopsingle from './pages/Shopsingle';
import Shoppingcart from './pages/Shoppingcart';
import Checkout from './pages/Checkout';
import AboutUs from './pages/AboutUs';
import Faqs from './pages/Faqs';
import Termsofuse from './pages/Termsofuse';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import ContactUs from './pages/ContactUs';
import './index.css';
import JobSingle from './pages/JobSingle';
import { PrivateRoute } from './routes/privateRoute';
import { PublicRoute } from './routes/publicRoute';
import { useSelector } from 'react-redux';
import { CustomToast } from './components/CustomToast';

const App = () => {
  let privateRoute = [
    { path: '/jobList', element: <JobList /> },
    // { path: "/job-grid", element: <Joblist_v2 /> },
    // { path: "/job-list-sidebar", element: <Joblist_v3 /> },
    // { path: "/job-grid-sidebar", element: <Joblist_v4 /> },
    // { path: "/joblist_v5", element: <Joblist_v5 /> },
    // { path: "/joblist_v6", element: <Joblist_v6 /> },
    // { path: "/joblist_v7", element: <Joblist_v7 /> },
    // { path: "/joblist_v8", element: <Joblist_v8 /> },
    // { path: "/joblist_v9", element: <Joblist_v9 /> },
    // { path: "/joblist_v10", element: <Joblist_v10 /> },
    { path: '/jobSingle', element: <JobSingle /> },
    // { path: "/jobsingle_v2", element: <Jobsingle_v2 /> },
    { path: '/employers_v1', element: <Employer_v1 /> },
    { path: '/employers_v2', element: <Employer_v2 /> },
    { path: '/employers_v3', element: <Employer_v3 /> },
    { path: '/employers_v4', element: <Employer_v4 /> },
    { path: '/employers_v5', element: <Employer_v5 /> },
    { path: '/employers_v6', element: <Employer_v6 /> },
    { path: '/employers_v7', element: <Employer_v7 /> },
    { path: '/employersingle_v1', element: <Employersingle_v1 /> },
    { path: '/employersingle_v2', element: <Employersingle_v2 /> },
    { path: '/employerreview', element: <EmployerReview /> },
    { path: '/employernotfound', element: <Employernotfound /> },
    { path: '/employerdashboard', element: <Employerdashboard /> },
    { path: '/candidates_v1', element: <Candidates_v1 /> },
    { path: '/candidates_v2', element: <Candidates_v2 /> },
    { path: '/candidates_v3', element: <Candidates_v3 /> },
    { path: '/candidates_v4', element: <Candidates_v4 /> },
    { path: '/candidates_v5', element: <Candidates_v5 /> },
    { path: '/candidates_v6', element: <Candidates_v6 /> },
    { path: '/candidates_v7', element: <Candidates_v7 /> },
    { path: '/samplecv', element: <SampleCV /> },
    { path: '/samplecvdetails', element: <SampleCVdetails /> },
    { path: '/samplecvslidebar', element: <SampleCVslidebar /> },
    { path: '/candidatesingle_v1', element: <Candidatesingle_v1 /> },
    { path: '/candidatesingle_v2', element: <Candidatesingle_v2 /> },
    { path: '/blog_v1', element: <Blog_v1 /> },
    { path: '/blog_v2', element: <Blog_v2 /> },
    { path: '/blog_v3', element: <Blog_v3 /> },
    { path: '/blogsingle_v1', element: <Blogsingle_v1 /> },
    { path: '/blogsingle_v2', element: <Blogsingle_v2 /> },
    { path: '/blogsingle_v3', element: <Blogsingle_v3 /> },
    { path: '/shop', element: <Shop /> },
    { path: '/shopsingle', element: <Shopsingle /> },
    { path: '/shoppingcart', element: <Shoppingcart /> },
    { path: '/checkout', element: <Checkout /> },
    { path: '/aboutus', element: <AboutUs /> },
    { path: '/faqs', element: <Faqs /> },
    { path: '/termsofuse', element: <Termsofuse /> },
    { path: '/pricing', element: <Pricing /> },
    { path: '/contactus', element: <ContactUs /> },
  ];

  const publicRoutes = [
    { path: '/login', element: <Login /> },
    { path: '/createaccount', element: <CreateAccount /> },
  ];

  const { success, error, message } = useSelector((state) => state.toast);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home_v7 />} exact />
        <Route path="/" element={<PrivateRoute />}>
          {privateRoute.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>
        <Route path="/" element={<PublicRoute />}>
          {publicRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
      <CustomToast success={success} error={error} message={message} />
    </div>
  );
};

export default App;
