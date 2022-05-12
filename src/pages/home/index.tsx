import { View, Text, Image } from "@tarojs/components";
import "./index.css";
import { useReducer } from "react";

import { AtButton, AtSearchBar, AtGrid, AtCard } from "taro-ui";
import { Swiper, SwiperItem } from "@tarojs/components";

import { useSelector, useDispatch } from "react-redux";
import { dispatchHome } from "@/constants/home";
import Taro from "@tarojs/taro";
const Index: any = () => {
  const initState = {
    searchKey: "",
    newGoodsList: [
      {
        id: "1",
        picUrl:
          "https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png",
        name: "也让车",
        retailPrice: "100",
      },
      {
        id: "1",
        picUrl:
          "https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png",
        name: "也让车",
        retailPrice: "100",
      },
      {
        id: "1",
        picUrl:
          "https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png",
        name: "也让车",
        retailPrice: "100",
      },
    ],
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
      <View onClick={() => Taro.navigateTo({ url: "/pages/search/index" })}>
        <AtSearchBar value="" onChange={(value) => console.log(value)} />
      </View>
      <Swiper
        className="test-h"
        indicatorColor="#999"
        indicatorActiveColor="#333"
        circular
        indicatorDots
        autoplay
        interval={2000}
      >
        <SwiperItem>
          <View className="demo-text-1">1</View>
        </SwiperItem>
        <SwiperItem>
          <View className="demo-text-2">2</View>
        </SwiperItem>
        <SwiperItem>
          <View className="demo-text-3">3</View>
        </SwiperItem>
      </Swiper>
      <View>
        <AtGrid
          mode="rect"
          data={[
            {
              image:
                "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png",
              value: "奶嘴",
            },
            {
              image:
                "https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png",
              value: "奶瓶",
            },
            {
              image:
                "https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png",
              value: "婴儿车",
            },
            {
              image:
                "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png",
              value: "衣服",
            },
            {
              image:
                "https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png",
              value: "裤子",
            },
            {
              image:
                "https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png",
              value: "xxx",
            },
          ]}
        />
      </View>
      {state.newGoodsList && state.newGoodsList.length > 0 && (
        <View className="a-section a-new">
          <View className="h">
            <Text className="txt">周一周四 · 新品首发</Text>
          </View>
          <View className="b">
            {state.newGoodsList.map((item) => {
              return (
                <View className="item" key={item.id}>
                  <View>
                    <Image className="img" src={item.picUrl}></Image>
                    <Text className="name">{item.name}</Text>
                    <Text className="price">￥{item.retailPrice}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      )}
      {/* <View
        className="at-row at-row--wrap"
        style={{ width: "100%", height: "100%" }}
      >
        <View
          className="at-col at-col-5"
          style={{
            border: "1px solid black",
            borderRadius: "30px",
            height: "200px",
          }}
        >
          <View
            className="at-row at-col-5 at-col--auto"
            style={{ borderBottom: "1px solid black" }}
          >
            <Image
              style={{ width: "100px", height: "100px", margin: "0 auto" }}
              src="https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png"
            />
          </View>
          <View className="at-row at-col-3 at-row--wrap">
            <Text style={{ margin: "0 auto" }}>200</Text>
          </View>
        </View>
        <View
          className="at-col at-col-5"
          style={{ border: "1px solid black", borderRadius: "30px" }}
        >
          <View
            className="at-row at-col-9 at-col--auto"
            style={{ borderBottom: "1px solid black" }}
          >
            <Image
              style={{ width: "100px", height: "100px", margin: "0 auto" }}
              src="https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png"
            />
          </View>
          <View className="at-row at-col-3 at-row--wrap">2</View>
        </View>
        <View
          className="at-col at-col-5"
          style={{ border: "1px solid black", borderRadius: "30px" }}
        >
          <View
            className="at-row at-col-9 at-col--auto"
            style={{ borderBottom: "1px solid black" }}
          >
            <Image
              style={{ width: "100px", height: "100px", margin: "0 auto" }}
              src="https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png"
            />
          </View>
          <View className="at-row at-col-3 at-row--wrap">2</View>
        </View>
      </View> */}
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
