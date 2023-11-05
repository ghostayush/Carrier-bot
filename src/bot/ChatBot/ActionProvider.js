import { createClientMessage } from 'react-chatbot-kit';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  
  // const [name, setName] = useState();

  const initialAction = async () => {
    const cmessage = createClientMessage("Chatbot intialised");
    updateState(cmessage, "");
    const message = createChatBotMessage("You can ask any queries now");
      updateState(message, "query") ;
    // await firstAction();
  };

  // const firstAction = async () => {
  //   const message = createChatBotMessage("Enter your name");
  //   updateState(message, "name");
  // };

  // const nameAction = async (msg) =>{
  //   setName(msg);
  //   const message = createChatBotMessage("Thanks " + msg + ", " + "you can upload your pdf in the sidebar");
  //   updateState(message);
  // }
  
  // const thirdAction = (file) =>{
  //   const cmessage = createClientMessage("done!");
  //   updateState(cmessage) ;
  //   const formData = new FormData();
  //   // formData.append("pdf", file);
  //   // formData.append("name", name);
  //   axios.post('https://pdf-bot-5wz7dep6ya-uc.a.run.app/upload', formData, {
  //   headers: { 'Content-Type': 'multipart/form-data' },
  // })
  // .then((response) => {
  //   const message = createChatBotMessage("Pdf has been uploaded! Now you can ask me any queries");
  //   updateState(message, "query") ;
  // })
  // .catch((error) => {
  //   console.error('Error uploading PDF:', error);
  // });
  // }

  const queryAction = (msg) =>{
    const message = createChatBotMessage(msg);
    updateState(message, "query") ;
  }

  const updateState = (message, checker) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      checker,
    })) 
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            initialAction,
            /* firstAction,
            nameAction,
            thirdAction, */
            queryAction,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;

