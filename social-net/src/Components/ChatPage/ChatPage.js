import { useParams } from "react-router-dom";
import Messages from "../Messages/Messages";
import InputForm from "../InputForm/InputForm";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import Header from "../Header/Header";
import NotFound from "../NotFound/NotFound";

function ChatPage() {
  const { chatId } = useParams();

  const currentChat = useSelector(
    (state) => state.chats.chatList.find((el) => el.id === chatId),
    shallowEqual
  );
  const author = useSelector((state) => state.profile.name, shallowEqual);
  const messages = useSelector(
    (state) => state.messages.messageList[chatId],
    shallowEqual
  );

  document.title = `${currentChat.name}`;

  return (
    <>
      {currentChat ? (
        <>
          <Header />
          <h3>{currentChat.name}</h3>
          <Messages chatId={chatId} messages={messages} />
          <InputForm chatId={chatId} author={author} />
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
}

export default ChatPage;
