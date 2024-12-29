import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'; // Corrected import
import Layout from './Layout.jsx';
import Home from './componetns/Home/Home.jsx'; // Fixed typo in 'components'
import Footer from './componetns/Footer/Footer.jsx'; // Fixed typo in 'components'
import Header from './componetns/Header/Header.jsx';
import About from './componetns/About/About.jsx';
import Contact from './componetns/Contact/Contact.jsx';
import Github, { githubInfoLoader } from './componetns/Github/Github.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//       {
//         path: 'contact',
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route loader={githubInfoLoader} 
      path='github' 
      element={<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* Corrected component */}
  </StrictMode>
);
