import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/index';
import Survey from './pages/Survey/index';
import Error from './pages/Error/index';
import Results from './pages/Results/index';
import Freelances from './pages/Freelances/index';
import Header from './components/Header';
import Footer from './components/Footer';
import { SurveyProvider } from './utils/context/index';
import GlobalStyle from './utils/style/GlobalStyle';
import Profile from './pages/Profile';
ReactDOM.render(
   <React.StrictMode>
      <Router>
         <SurveyProvider>
            <GlobalStyle />
            <Header />
            <Routes>
               <Route exact path="/" element={<Home />} />
               <Route
                  exact
                  path="/survey/:questionNumber"
                  element={<Survey />}
               />
               <Route exact path="/results" element={<Results />} />
               <Route exact path="/freelances" element={<Freelances />} />
               <Route exact path="/profile/:id" element={<Profile />} />
               <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
         </SurveyProvider>
      </Router>
   </React.StrictMode>,
   document.getElementById('root')
);
