export default defineAppConfig({
  pages: ["pages/index/index", "pages/me/index", "pages/publish/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./public/assets/images/tab-bar/home.png",
        selectedIconPath: "./public/assets/images/tab-bar/home-active.png",
      },
      {
        pagePath: "pages/publish/index",
        text: "发布",
        iconPath: "./public/assets/images/tab-bar/cart.png",
        selectedIconPath: "./public/assets/images/tab-bar/cart-active.png",
      },
      {
        pagePath: "pages/me/index",
        text: "我的",
        iconPath: "./public/assets/images/tab-bar/user.png",
        selectedIconPath: "./public/assets/images/tab-bar/user-active.png",
      },
    ],
  },
});
