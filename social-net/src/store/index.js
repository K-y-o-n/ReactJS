import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import profileReducer from "./profileReducer";
import chatsReducer from "./chatsReducer";
import messagesReducer from "./messagesReducer";
import quotesReducer from "./quotesReducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage

// создаем объект конфигурации для persist
const persistConfig = {
  key: "socialNet",
  storage,
  blacklist: ["quotes"],
};

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagesReducer,
  quotes: quotesReducer,
});

// оборачиваем редьюсеры в persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

// создаем store с использованием persistedReducer
export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// создаем persistor
export const persistor = persistStore(store);
