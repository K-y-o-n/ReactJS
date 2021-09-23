import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Chats from "./Components/Chats/Chats";
import ChatMesseges from "./Components/ChatMesseges/ChatMesseges";

function App() {
  // const [messageList, setMessageList] = useState([
  //   {
  //     author: "ГЛаДОС",
  //     text: "Добро пожаловать в компьютеризированный экспериментальный центр при лаборатории исследования природы ReactJS!",
  //   },
  //   {
  //     author: "ГЛаДОС",
  //     text: "Перед началом тестирования хотим вам напомнить, что хотя основным принципом экспериментального центра является обучение в игровой форме, мы не гарантируем отсутствие увечий и травм.",
  //   },
  // ]);

  // useEffect(() => {
  //   if (messageList[messageList.length - 1].author !== "ГЛаДОС") {
  //     setTimeout(() => {
  //       setMessageList((prev) => [
  //         ...prev,
  //         { author: "ГЛаДОС", text: "Отступитесь, и вам принесут тортик." },
  //       ]);
  //     }, 2000);
  //   }
  // }, [messageList]);

  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Header}></Route>
        <Route exact path="/profile" component={Profile}></Route>
        <Route exact path="/chats">
          <Chats />
        </Route>
        <Route exact path="/chats/:id">
          <ChatMesseges />
        </Route>
      </Router>
    </div>
  );
}

export default App;
