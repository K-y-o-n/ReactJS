// const InitialState = {
//   id1: {
//     name: "ГЛаДОС",
//     messages: [
//       {
//         text: "Добро пожаловать в компьютеризированный экспериментальный центр при лаборатории исследования природы ReactJS!",
//         author: "ГЛаДОС",
//       },
//       {
//         text: "Перед началом тестирования хотим вам напомнить, что хотя основным принципом экспериментального центра является обучение в игровой форме, мы не гарантируем отсутствие увечий и травм.",
//         author: "ГЛаДОС",
//       },
//     ],
//   },
//   id2: {
//     name: "Test",
//     messages: [{ text: "Test Messege!", author: "Bot" }],
//   },
// };
import CHANGE_NAME from "./types/profileTypes";

const InitialState = { name: "Без имени" };

function profileReducer(state = InitialState, { type, payload }) {
  switch (type) {
    case CHANGE_NAME:
      return { name: payload };
    default:
      return state;
  }
}

export default profileReducer;
