import { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import "./index.css";
import { AtButton, AtIcon } from "taro-ui";
import * as images from "@/public/assets/images/pics";
const POWER_LIST_CONFIG = {
  coupon: {
    image: images.coupon,
    value: "优惠券",
    url: "/pages/ucenter/couponList/couponList",
  },
  collect: {
    image: images.collect,
    value: "收藏",
    url: "/pages/ucenter/collect/collect",
  },
  footprint: {
    image: images.footprint,
    value: "足迹",
    url: "/pages/ucenter/footprint/footprint",
  },
  group: {
    image: images.group,
    value: "拼团",
    url: "/pages/groupon/myGroupon/myGroupon",
  },
  address: {
    image: images.address,
    value: "地址",
    url: "/pages/ucenter/address/address",
  },
  bindPhone: {
    image: images.mobile,
    value: "绑定手机",
    url: "",
  },
  customer: {
    image: images.customer,
    value: "联系客服",
    url: "",
  },
  about: {
    image: images.about,
    value: "关于我们",
    url: "/pages/about/about",
  },
};
const Index: any = () => {
  const config = {
    bgGradient: "white",
    headPosition: "",
  };
  const userInfo = {
    avatarUrl: "",
    nickName: "qq",
  };
  return (
    <View className="layout-my">
      <View
        style={{
          backgroundImage:
            config.bgGradient === "white"
              ? `linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255)), url(${images.headerBg})`
              : `url(${images.headerBg})`,
        }}
        className={`header ${config.headPosition}`}
      >
        <Image className="avatar" src={userInfo.avatarUrl}></Image>
        <View className="info">{userInfo.nickName}</View>
        <View className="vip" onClick={() => console.log(1)}>
          <View>微商城</View>
          <AtIcon value="chevron-right" size="15" color="#fff"></AtIcon>
        </View>
      </View>
    </View>
  );
};
export default Index;
