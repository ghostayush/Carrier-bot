//Pdf-Chatbot
import './App.css';
import Main from './Main';
import { Helmet } from 'react-helmet';
function App() {

  return (
    <div className='App'>

      <Helmet>
      <title>Kreatebots - free</title> 
      <meta name="description" content="Chat with your PDFs and get answers to any question instantly with our AI chatbot"/>
      <meta name="keywords" content="AI, Chatbot, kreatebot, kreatewebsites" />
      </Helmet>
      <Main/>

    </div>
  );
}

export default App;