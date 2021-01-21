import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.scss';
import ContactModal from './sections/section-contact-modal/SectionContactModal';
import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import ProjectsPage from './pages/projects/ProjectsPage';
import AboutPage from './pages/about/AboutPage';
import Footer from './components/footer/Footer';
import eventScroll from './events/event-sticky-header';
import closeModal from './events/close-modal';
import CONTENT_DATA from './content';
import NoMatch from './pages/404/NoMatch';
import FormContextProvider from './contexts/FormContext';
import AboutPageContextProvider from './contexts/AboutPageContext';
import HomePageContextProvider from './contexts/HomePageContext';
import ProjectsPageContextProvider from './contexts/ProjectsPageContext';
import ContactSectionContext from './contexts/ContactSectionContext';

class App extends Component {
  constructor () {
    super();
    eventScroll();
    closeModal();

    this.state = CONTENT_DATA;
  }
  
  render () {
    return (
      <div className="App">
        <FormContextProvider>
          <div className='overlay' onClick={closeModal}></div>
          <div className='thanks flex ai-center jc-center'>
            <h3>Message send!</h3>
          </div>
          <ContactModal closeModal={closeModal}/>
          <Header/>
          <ContactSectionContext>
            <Switch>
              <Route exact path='/' >
                <HomePageContextProvider>
                  <HomePage/>
                </HomePageContextProvider>
              </Route>
              <Route path='/projects'>
                <ProjectsPageContextProvider>
                  <ProjectsPage/>
                </ProjectsPageContextProvider>
              </Route>
              <Route path='/about'>
                <AboutPageContextProvider>
                  <AboutPage/>
                </AboutPageContextProvider>
              </Route>
              <Route component={NoMatch}/>
            </Switch>
          </ContactSectionContext>
          <Footer/>
        </FormContextProvider>
      </div>
    );
  }
}

export default App;
