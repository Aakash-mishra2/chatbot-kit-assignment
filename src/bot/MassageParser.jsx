import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('hello')){
      actions.handleHello();
    }
    if (message.includes('boy')){ actions.handleBoy(); }
    if (message.includes('Got it')){ actions.handleCalendar();  }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;