import { useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { setName } from "../../action/profileActions";
import Header from "../Header/Header";

function Profile() {
  const name = useSelector((state) => state.profile.name, shallowEqual);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  document.title = "Профиль";

  function submitHandler(e) {
    e.preventDefault();
    dispatch(setName(value));
    setValue("");
  }

  return (
    <>
      <Header />
      <div>
        <h4>Профиль</h4>
      </div>
      <div>{name}</div>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div>
        <button onClick={submitHandler}>Изменить имя</button>
      </div>
    </>
  );
}

export default Profile;
