import { setName } from "../../action/profileActions";
import profileReducer from "../profileReducer";

it("изменяет имя пользователя на указанное", () => {
  const expected = {
    name: "Kyon",
  };
  const received = profileReducer(null, setName("Kyon"));

  expect(received).toEqual(expected);
});
