import React from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import logo1 from './bkgd.jpg';
import SectionSeparator from './components/SectionSeparator';
import SpacerDiv from './components/SpacerDiv';
import srishtiPic from './me.jpg';
import TextContainer from './components/TextContainer';

function App() {

  
  const fontStyles = {
    fontSize: 100 + '%',
    fontFamily: "Times New Roman",
  }

  const backgrounds = {
    textbox: {
      backgroundColor: 'rgba(102,153,204,0)'
    }
  }

  const navBarContent = [
    "About Me",
    "Work Experience",
    "Side Projects",
    "Resume",
    "Say Hi"
  ]

  const navLinks = [

  ]

  const spacerHeight =
  {
    height: 7.5 + "vh"
  };

  return (
    <div className="App">
      <Header text="Hello World"></Header>
      <NavBar displayText={navBarContent} links={navLinks}>
      </NavBar>
      <div className="jumbotron" style={{ height: 100 + 'em', backgroundImage: logo1, backgroundSize: 'cover' }}>
        <div className="container container-fluid text-white bg-dark" >
          <h1 className="display-4">Hello, world!</h1>
          <h3 className="display-1 ">My name is Srishti.</h3>
          <p>_______________________________________________________________________________________________________</p>
          <h1 className="display-6 text-secondary"> Machine Learning Engineer </h1>
          <p className="lead">You can find me eating a banana or behind a computer with a banana.</p>
          <hr className="my-4" />
          <p className="lead">***Looking for Canadian or remote full-time opportunities starting May 2020.</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#ContactMe" role="button">Get in touch</a>
          </p>
        </div>
      </div>
      <SpacerDiv height={spacerHeight} />
      <SectionSeparator></SectionSeparator>
      <SpacerDiv height={spacerHeight} />
      <Header>About Me</Header>
      <SpacerDiv height={spacerHeight} />
      <div className="aboutMe">
        <div className="aboutMeText">
          <ul style={{ background: '#212121', listStyleType: 'none', color: 'white', fontSize: 25 + 'px', paddingRight: 5 + 'em', paddingLeft: 5 + 'em' }}>
            <li className="liAboutMe"><br />&nbsp; </li>
            <li className="liAboutMe">>Srishti.greeting</li>
            <li className="liAboutMe" style={{ paddingLeft: 3 + 'em' }}>  >> Hello world! </li>
            <li className="liAboutMe"> <br />&nbsp;</li>
            <li className="liAboutMe">>Srishti.background</li>
            <li className="liAboutMe" style={{ paddingLeft: 3 + 'em' }}>  >> Machine Learning Engineer with a background in aerospace engineering</li>
            <li className="liAboutMe"><br />&nbsp; </li>
            <li className="liAboutMe">>Srishti.Education</li>
            <li className="liAboutMe" style={{ paddingLeft: 3 + 'em' }}>
              <span>{">> {"}</span><br />
              <span style={{ paddingLeft: 3 + 'em' }}>University: 'University of Toronto',</span><br />
              <span style={{ paddingLeft: 3 + 'em' }}>Degree: 'Bachelors in Applied Science in Engineering Science',</span><br />
              <span style={{ paddingLeft: 3 + 'em' }}>Major: 'Aerospace Engineering',</span><br />
              <span style={{ paddingLeft: 3 + 'em' }}> Minor: ['Computer Science', 'Business']</span><br />
              <span style={{ paddingLeft: 1 + 'em' }}>{"};"}</span>
            </li>

            <li className="liAboutMe"> <br />&nbsp;</li>
            <li className="liAboutMe">>Srishti.interests</li>
            <li className="liAboutMe" style={{ paddingLeft: 3 + 'em' }}>  >> ['Machine learning', &nbsp; 'parallel computing', &nbsp; 'physics', &nbsp; 'math',  <br /> &nbsp; &nbsp; 'cool programming', &nbsp;  'computer science memes & all things data science'] </li>
            <li className="liAboutMe"><br />&nbsp; </li>
            <li className="liAboutMe">>Srishti.currentWorkplace</li>
            <li className="liAboutMe" style={{ paddingLeft: 3 + 'em' }}>  >> National Research Council, Canada's Institute for Aerospace Research in Ottawa. </li>
            <li className="liAboutMe"><br />&nbsp; </li>
            <li className="liAboutMe">>Srishti.hobbies</li>
            <li className="liAboutMe" style={{ paddingLeft: 3 + 'em' }}>  >>['baking', &nbsp; 'chasing cats', &nbsp; 'going on food adventures', &nbsp; 'playing the guitar', &nbsp; 'practicing French and German']. </li>
            <li><br />&nbsp;</li>
          </ul>
        </div>
        <div className="aboutMePics">
          <img src={srishtiPic} alt="me" style={{maxHeight: 30 + '%', maxWidth: 50 + '%'}}/>
        </div>
      </div>
      <SpacerDiv height={spacerHeight}/>
      <SectionSeparator/>
      <SpacerDiv height={spacerHeight}/>
      <Header>Testimonials</Header>
      <SpacerDiv height={spacerHeight}/>
      <div className="testimonialDiv">
        <TextContainer fontSize={fontStyles.fontSize} backgroundColor={"rbga(120,150,175,0)"}>
          Srishti has been a pleasure to work with. Her drive and motivation for continuous learning is always a wonderful addition to her strong aptitude for implementing and developing machine learning technologies and software programs.
          </TextContainer>
        <TextContainer fontSize={fontStyles.fontSize} backgroundColor={backgrounds.textbox.backgroundColor}>
          Srishti provided great ideas and thoughtful questions. She has great integrity in her work. She is a great listener, works well independently and collaboratively. Srishti was a great addition to our community!
          </TextContainer>
        <TextContainer fontSize={fontStyles.fontSize} fontFamily={fontStyles.fontFamily} backgroundColor={backgrounds.textbox.backgroundColor}>
          Srishti has a great mind for research and for software development. She always provided participates with meaningful discussion at team meetings and was a hard-working and reliable member of our team. She never failed to amaze me!
          </TextContainer>
      </div>
      <SpacerDiv height={spacerHeight}/>
      <SectionSeparator/>
      <SpacerDiv height={spacerHeight}/>
      <Header>Technical Skills</Header>
      <SpacerDiv height={spacerHeight}/>
      <div className="technicalDiv">

      </div>
      <SpacerDiv height={spacerHeight}/>
      <SectionSeparator/>
      <SpacerDiv height={spacerHeight}/>
      <Header>Professional Experience</Header>
      <SpacerDiv height={spacerHeight}/>
      <div className="workExpDiv">

      </div>
      <SpacerDiv height={spacerHeight}/>
      <SectionSeparator/>
      <SpacerDiv height={spacerHeight}/>
      <Header>Publications</Header>
      <SpacerDiv height={spacerHeight}/>
      <div className="pubsDiv">

      </div>
      <SpacerDiv height={spacerHeight}/>
      <SectionSeparator/>
      <SpacerDiv height={spacerHeight}/>
      <Header>Funzies</Header>
      <SpacerDiv height={spacerHeight}/>
      <div className="funDiv">

      </div>
      <SpacerDiv height={spacerHeight}/>
      <SectionSeparator/>
      <SpacerDiv height={spacerHeight}/>
      <Header>Get in Touch!</Header>
      <SpacerDiv height={spacerHeight}/>
      <div className="touchDiv">

      </div>
      <SpacerDiv height={spacerHeight}/>
      <SectionSeparator/>
    </div >
  );
}

export default App;
