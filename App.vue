<script lang="ts">
import { ChatUIKit } from "./ChatUIKit";
import websdk from "easemob-websdk/uniApp/Easemob-chat";
import { EasemobChatStatic } from "easemob-websdk/Easemob-chat";

// 创建 IM 实例
const chat = new (websdk as unknown as EasemobChatStatic).connection({
  appKey: "YOUR APPKEY", // 应用的 App Key
  isHttpDNS: false,
  url: "wss://im-api-wechat.easemob.com/websocket", // 环信 websocket URL
  apiUrl: "https://a1.easemob.com", // 环信 Restful API URL
  delivery: true, // 是否开启消息已送达回执
});
// 初始化 ChatUIKit
ChatUIKit.init({
  chat, // 传入 IM 实例
  config: {
    theme: {
      // 头像形状：圆形（circle）和方形（square）
      avatarShape: "square",
    },
    isDebug: true, // 是否开启调试模式
  },
});

uni.$UIKit = ChatUIKit;
export default {
  onLaunch: function () {
    console.log("App Launch");
    console.log("ChatUIKit", websdk, ChatUIKit);
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style>
/*每个页面公共css */
/* 通用样式 */
html,
body,
page {
  height: 100%;
  width: 100%;
}
</style>
