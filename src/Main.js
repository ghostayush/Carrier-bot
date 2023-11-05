import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import MessageParser from './bot/ChatBot/MessageParser.js';
import ActionProvider from './bot/ChatBot/ActionProvider.js';
import config from './bot/ChatBot/config';
import './App.css'
import {Route,BrowserRouter as Router, Routes} from 'react-router-dom' 
import Sidebar from './sidebar/Sidebar';

const Main = () => {

    return (
         <div className='App'>
          <Router>

          <Sidebar/>
          
          <Routes>
          <Route exact path='/' element={<Chatbot
            className="cb"
            id='cbt'
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          /> }/>
          </Routes>


          </Router>
    </div>
     );
}
 
export default Main;