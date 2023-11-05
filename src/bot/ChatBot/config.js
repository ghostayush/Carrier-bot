import { createChatBotMessage } from 'react-chatbot-kit';
import BotAvatar from '../BotAvatar/BotAvatar';
import UserAvatar from '../BotAvatar/UserAvatar';
import StartBtn from '../Components/StartBtn';

const config = {
    initialMessages: [createChatBotMessage(`Hey buddy! Welcome to Pdf-Bot!🤗`, {
      widget: 'startBtn',
    })],
    botName: "DATA-MS.Bot",
    customComponents:{
      botAvatar: (props) => <BotAvatar/>,
      userAvatar: (props) => <UserAvatar/>
    },
    widgets:[
      {
        widgetName: 'startBtn',
        widgetFunc: (props) => <StartBtn {...props} />,
      },
    ]
  
};

export default config;