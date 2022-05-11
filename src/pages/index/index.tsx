import { Component } from "react";
import { View, Text } from "@tarojs/components";
import "./index.css";
import { AtButton } from "taro-ui";
const Index: any = () => {
  return (
    <View className="index">
      <Text>Hello world,</Text>
      <Text>begin for 咕咚回收!</Text>
      <AtButton>Click</AtButton>
    </View>
  );
};
export default Index;
