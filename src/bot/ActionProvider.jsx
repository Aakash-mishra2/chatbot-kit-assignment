import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello, nice to see you. ');
    setState((prev) => (
      {
        ...prev,
        messages: [...prev.messages, botMessage],
      }
    ));
  };
  const handleBoy = () => {
    const botMessage = createChatBotMessage('Thank you for boy comment. ');
    setState((prev) => (
      {
        ...prev,
        messages: [...prev.messages, botMessage],
      }
    ));
  };
  const handleCalendar = () => {
    const botMessage = createChatBotMessage('Select One Day From Calendar', {
      widget: 'student_calendar'
    });
    setState((prev) => (
      {
        ...prev,
        messages: [...prev.messages, botMessage],
      }
    ));
  }
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleBoy,
            handleCalendar
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;