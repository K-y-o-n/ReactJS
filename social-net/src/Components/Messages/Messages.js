import "./module.messages.css";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useEffect } from "react";
import addMessage from "../../action/messagesActions";

function Messages({ chatId }) {
  const messages = useSelector(
    (state) => state.messages.messageList[chatId],
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (chatId === "id0" && messages[messages.length - 1].author !== "ГЛаДОС") {
      setTimeout(() => {
        dispatch(
          addMessage(chatId, "Отступитесь, и вам принесут тортик.", "ГЛаДОС")
        );
      }, 2000);
    }
  }, [messages]);

  return (
    <ul className="messages">
      {messages
        ? messages.map((el) => (
            <li key={el.id} className="messages__item">
              <p className="messages__item-name">{el.author + " говорит:"}</p>
              <p className="messages__item-text">{el.text}</p>
            </li>
          ))
        : null}
    </ul>
  );
}

export default Messages;
