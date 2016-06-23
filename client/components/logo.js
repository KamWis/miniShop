import React from "react";
import LogoImg from '../images/logo.png';
import {Link} from 'react-router';
const Logo = () => <div className="logo"><Link to="/"><img src={LogoImg} /></Link></div>;

export default Logo;