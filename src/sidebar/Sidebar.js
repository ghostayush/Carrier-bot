import './Sidebar.css'
import {  IoLogInOutline } from "react-icons/io5";
import { FaRobot } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Sidebar = () => {

    return ( 
        <div className='ws'>
     
       
       <div className='top'>
       <div className='strip'>
        <p className='head'>Career-Sage<span className='dot'>.</span>Bot</p> 
        </div>
        <div className='options'>
        <a href='https://www.kreatebots.com/'><p className='icon'><AiOutlineHome color="white"/></p></a>
        <Link to='/'><p className='icon'><FaRobot color='white'/></p></Link> 
        <p className='icon'><IoLogInOutline color='white'/></p>
        </div>
        </div>

        <img src="https://img-c.udemycdn.com/course/480x270/5185164_2d11.jpg" className="hero"></img>

        

        </div>

     );
}
 
export default Sidebar;