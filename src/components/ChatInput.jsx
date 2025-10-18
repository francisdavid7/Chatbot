import { useState } from "react";
import { chatbot} from 'supersimpledev';

function ChatInput({onSend}) {
  const [inputText, setInputText] = useState('');

  function handleInput(event) {
    setInputText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const text = inputText.trim();
    if (!text) return;

    onSend({
      id: crypto.randomUUID(),
      sender: 'user',
      message: text
    })

    const response = chatbot.getResponse(text);

    onSend({
      id: crypto.randomUUID(),
      sender: 'chatbot',
      message: response
    });
    setInputText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Send a message to chatbot'
        onChange={handleInput}
        value={inputText}
     />
      <button>Send</button>
    </form>
  )
}

export default ChatInput;