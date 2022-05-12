// Taro 额外添加的 hooks 要从 '@tarojs/taro' 中引入
import { useDidShow, useDidHide } from "@tarojs/taro";

// 假设我们要使用 Redux
import { Provider } from "react-redux";
import "./app.css";
import configStore from "./store";
import "taro-ui/dist/style/index.scss";
import { AtButton } from "taro-ui";

const store = configStore();

const App = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default App;
