<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <button @click="login">登录</button>
  </view>
</template>

<script setup>
const login = () => {
  console.log(">>>>调用登录", uni.$UIKit);
  uni.$UIKit.chatStore
    .login({
      user: "YOUR USER ID", // 用户 ID
      accessToken: "YOUR USER TOKEN", // 用户 Token
    })
    .then(() => {
      // 登录成功后，跳转会话列表页面
      uni.navigateTo({
        url: "/ChatUIKit/modules/Conversation/index",
      });
    });
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
