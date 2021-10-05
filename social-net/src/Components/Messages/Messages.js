import "./module.messages.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { botReply } from "../../action/messagesActions";

function Messages({ chatId, messages }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (chatId === "id0" && messages[messages.length - 1].author !== "ГЛаДОС") {
      dispatch(botReply(chatId));
    }
  }, [messages]);

  return (
    <ul className="messages">
      {messages
        ? messages.map((el) => (
            <li key={el.id} className="messages__item">
              <p className="messages__item-name">
                <b>{el.author}</b> говорит:
              </p>
              <p className="messages__item-text">{el.text}</p>
            </li>
          ))
        : null}
    </ul>
  );
}

export default Messages;
