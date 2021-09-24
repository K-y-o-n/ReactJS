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

const InitialState = { checkbox: false };

function reducer(state = InitialState, action) {
  switch (action.type) {
    case "SET_CHECKBOX":
      return { ...state, checkbox: !state.checkbox };
    default:
      return state;
  }
}

export default reducer;
