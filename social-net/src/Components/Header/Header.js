import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./module.header.css";
import AuthPage from "../AuthPage/AuthPage";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../action/userAction";

function Header() {
  const [authFlg, setAuthFlg] = useState(false);
  const { user, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      setAuthFlg(false);
    }
  }, [user]);

  function handlerExit() {
    dispatch(userLogout());
  }

  return (
    <header className="header">
      <ul className="header__links">
        <li>
          <Link style={{ textDecoration: "none" }} to="/profile">
            Профиль
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/chats">
            Чаты
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/quotes">
            Аниме цитаты
          </Link>
        </li>
      </ul>
      <div className="header__authBtns">
        {/* <button>Регистрация</button> */}
        {!user && <button onClick={() => setAuthFlg(!authFlg)}>Вход</button>}
        {user && <button onClick={() => handlerExit()}>Выход</button>}
      </div>
      {authFlg && <AuthPage error={error} user={user} />}
    </header>
  );
}

export default Header;
