import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.scss';
import ContactModal from './components/1.sections/section-contact-modal/section-contact-modal';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homePage.component';
import ProjectsPage from './pages/projects/projectsPage.component';
import AboutPage from './pages/about/aboutPage.component';
import Footer from './components/footer/footer.component';
import eventScroll from './events/event-sticky-header';
import closeModal from './events/close-modal';
import CONTENT_DATA from './content';

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
        <div className='overlay' onClick={closeModal}></div>
        <div className='thanks flex ai-center jc-center'>
          <h3>Message send!</h3>
        </div>
        <ContactModal closeModal={closeModal}/>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/projects' component={ProjectsPage} />
          <Route path='/about' component={AboutPage} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
