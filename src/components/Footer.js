import React from "react";
import "../styles/footer.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


const Footer = () => {
 return (
	<div className="footer">
		<div className="socialMedia"> 
		<a target="_blank" rel="noreferrer" href="https://github.com/mam-rahman">
			<GitHubIcon />
			</a> 

			<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/myuserurl/">
			<LinkedInIcon />
			</a>

			<a href="mailto: mamunurrah@gmail.com">
			<EmailIcon />
			</a>
		</div>

		<p> &copy; 2023 Mamunur Rahman Portfolio</p>
	</div>
	
  );
}

export default Footer;
