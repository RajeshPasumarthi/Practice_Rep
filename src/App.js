import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import BlogContent from './BlogContent';
import Sidebar from './Sidebar';
import BlogPost from './BlogPost';
import Footer from './Footer';
import './styles.css';
import Sidebar1 from './Sidebar1';

function App() {
  return (
    <>
      {/* <CssBaseline /> */}

        <Sidebar1/>
        <Footer/>
    </>
  );
}

export default App;
