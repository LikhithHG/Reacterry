import React, { useState } from 'react';
import styled from 'styled-components';

const MessageFeed = () => {
  const [messages, setMessages] = useState(["The minute she landed she understood the reason this was a fly-over state.", "She thought there'd be sufficient time if she hid her watch."]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <MessageFeedContainer>
      <MessageContainer data-testid="message-container">
        {messages.map((message, index) => (
          <Message data-testid="message" key={index}>{message}</Message>
        ))}
      </MessageContainer>
      <MessageInput
        data-testid="message-input"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type your message and press Shift + Enter to send"
      />
    </MessageFeedContainer>
  );
};

export default MessageFeed;

const MessageFeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: 80vh;
  margin-bottom: 10px;
`;

const Message = styled.div`
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

const MessageInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
  &:focus {
    border-color: #999;
  }
`;