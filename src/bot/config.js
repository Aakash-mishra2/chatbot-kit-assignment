import { createChatBotMessage } from 'react-chatbot-kit';
import MyCalender from '../widgets/calendar';
const botName = 'Excitement Bot';

const config = {
  botName: botName,
  lang: 'no',
  initialMessages: [
    createChatBotMessage(`Hi! I am ${botName}`),
    createChatBotMessage(
      "Here's a quick overview over what I need to function. ask me about the different parts to dive deeper.",
      {
        withAvatar: false,
        delay: 500,
      }
    ),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "black"
    },
    chatButton: {
      backgroundColor: "sky"
    },
  },
  widgets: [
    {
      widgetName: 'student_calendar',
      widgetFunc: () => <MyCalender />
    }
  ],
};

export default config;