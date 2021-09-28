import { ADD_MESSAGE } from "./types/messagesTypes";

const initialState = {
  // будет храниться в виде {[chatId]: [{id, text, author}]}
  messageList: {
    ["id0"]: [
      {
        id: 0,
        text: "Добро пожаловать в компьютеризированный экспериментальный центр при лаборатории исследования природы ReactJS!",
        author: "ГЛаДОС",
      },
      {
        id: 1,
        text: "Перед началом тестирования хотим вам напомнить, что хотя основным принципом экспериментального центра является обучение в игровой форме, мы не гарантируем отсутствие увечий и травм.",
        author: "ГЛаДОС",
      },
    ],
  },
};

function messegesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE: {
      const currentList = state.messageList[action.chatId] || [];
      return {
        ...state,
        messageList: {
          ...state.messageList,
          [action.chatId]: [
            ...currentList,
            {
              id: currentList.length,
              text: action.message,
              author: action.author,
            },
          ],
        },
      };
    }
    default:
      return state;
  }
}

export default messegesReducer;
