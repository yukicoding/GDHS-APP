import { View, Text } from "@tarojs/components";
import "./index.css";
import { useState, useReducer } from "react";

import { AtButton, AtSearchBar } from "taro-ui";
import { useSelector, useDispatch } from "react-redux";
import { dispatchHome } from "@/constants/home";
import Taro from "@tarojs/taro";
const Index: any = () => {
  const initState = {
    searchKey: "",
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "patch":
        return { ...state, ...action.data };
    }
  };
  const [state, stateDispatch] = useReducer(reducer, initState);
  const home = useSelector((state: any) => state.homeReducer);

  const dispatch = useDispatch();
  console.log(home);
  return (
    <View className="index">
      <View onClick={() => Taro.navigateTo({ url: "/pages/me" })}>
        <AtSearchBar
          value=""
          onChange={(value) => console.log(value)}
          onFocus={() => console.log("1")}
        />
      </View>

      {/* <AtButton
        onClick={() => {
          dispatch({
            type: dispatchHome,
            data: { info: { name: "huangyongqi" } },
          });
          console.log(home);
        }}
      >
        Click
      </AtButton> */}
    </View>
  );
};
export default Index;
