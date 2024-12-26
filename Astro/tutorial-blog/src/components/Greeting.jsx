import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [message, setMessage] = useState(messages[0]);

  return (
    <div>
      <h3>{message} ¡Gracias por tu visita!</h3>
      <button onClick={() => setMessage(randomMessage())}>Nuevo saludo</button>
    </div>
  );
}
