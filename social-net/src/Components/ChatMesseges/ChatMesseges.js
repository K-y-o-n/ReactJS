import { useParams } from "react-router-dom";
import Messeges from "../Messeges/Messeges";
import InputForm from "../InputForm/InputForm";

function ChatMesseges() {
  const { id } = useParams();
  return (
    <>
      <p>chat id {id}</p>
      <Messeges />
      <InputForm />
    </>
  );
}

export default ChatMesseges;
