import { useState } from 'react'
import ChatInput from './components/ChatInput';
import ChatMessage from './components/ChatMessage';
import './App.css'

function App() {
  const [messages, setMessages] = useState([])

  function handleSend(newMessage) {
    setMessages(prevMessages => [...prevMessages, newMessage]);
  }

  const arrayOfMessages = messages.map((message) => {
    return (
      <ChatMessage key={message.id} message={message.message} sender={message.sender} />
    )
  });

  return (
    <main>
      <ChatInput onSend={handleSend}  />
{/* ------------------------------------------- */}
      {messages.length === 0 && <p className='welcome-paragraph'>Welcome to the chatbot project! Send a message using the textbox above.</p>}
{/* ------------------------------------------- */}
      {arrayOfMessages}
    </main>
  )
}

export default App
