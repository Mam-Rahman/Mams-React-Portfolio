import React from 'react';
import "../styles/about.css"

import { Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";

import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

// Images
import web from '../images/web.png';


const About = () => {
  return (
    <div className='aboutme'>
      <div className='background'>
        <br></br>
        <br></br>
    <h1 className='aboutme-title'>About Me</h1>
    <Container className='info'> 
    <div className="row align-items-center" id="pannel">
        <div className="col-lg-5 order-lg-2">
          <div className="p-5">
            <img className='img-fluid' src={web} alt="computer"/>
          </div>
        </div>
        <div className="col-lg-7 order-lg-1">
          <div className="p-5">
            <h3 className="knowMe">What I do</h3>
            <p> Based in the UK, I'm a front-end developer passionate about building accessible web apps that users love.</p>
            
          
           <a className='resumeIcon' target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1rUe99CtO-eabPI_1fs9b2dWw7BGzAIPX/view?usp=sharing">
			             <CloudDownloadIcon/>
		                 	</a>
  

          </div>
        </div>
        
      </div>
      </Container>
      

{/* SKILLS SECTION */}

  <h2 className='skills-title'> My Skills</h2>
   
 
    {/* CARD 1 */}
    <Row className="card-containers"> 
    <Col size="lg-4"> 
    <div className="myCard">
        <div className="innerCard">
            <div className="frontSide">
                <p className="title">Technical Skills</p>
            </div>
            <div className="backSide">
                <p>HTML / CSS / JavaScript</p>
                <p>React Js</p>
                <p>Node Js</p>
                <p>jQuery</p>
                <p>Bootstrap</p>
                <p>APIs</p>
                <p>Responsive Design</p>
            </div>
        </div>
    </div>
    </Col>

{/* CARD 2 */}
<Col size="lg-4"> 
<div className="myCard">
        <div className="innerCard">
            <div className="frontSide">
                <p className="title">Soft Skills</p>
            </div>
            <div className="backSide">
                <p>Creativity</p>
                <p>Teamwork</p>
                <p>Problem-Solving</p>
                <p>Critical Thinking</p>
                <p>Attention To Details</p>
                <p>Time and Project Management</p>
                <p>Communication</p>
            </div>
        </div>
    </div>
    </Col>

    {/* CARD 3 */}
<Col size="lg-4"> 
<div className="myCard">
        <div className="innerCard">
            <div className="frontSide">
                <p className="title">Design Skills</p>
            </div>
            <div className="backSide">
                <p>Adobe Creative Cloud</p>
                <p>Color Theory</p>
                <p>UX Design</p>
                <p>UI Design</p>
                <p>Figma</p>
                <p>Typography</p>
                <p>Illustration</p>
            </div>
        </div>
    </div>
    </Col>



    </Row>

  </div>
  </div>
  );
}

export default About;




