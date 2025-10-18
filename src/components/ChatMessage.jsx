function ChatMessage({sender, message}) {

  return (
    <div className={sender === 'user' ? 'message-el message-user' : 'message-el message-chatbot'}>
      {sender === 'chatbot' && <i className="fa-solid fa-robot"></i>}
      <span>{message}</span>
      {sender === 'user' && <i className="fa-solid fa-circle-user"></i>}
    </div>
  )
}

export default ChatMessage;