import config from "./bot/config";
import MessageParser from "./bot/MassageParser";
import ActionProvider from "./bot/ActionProvider";
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

const ChatBot = () => {
    return (
        <div>
            <Chatbot 
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
            />
        </div>
    )
};

export default ChatBot;