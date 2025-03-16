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
  console.log('>>>>调用登录', uni.$UIKit);
  uni.$UIKit.chatStore
    .login({
      user: 'hfp', // 用户 ID
      accessToken:
        'YWMtIg8RmAJKEfCf1kdVXi5Dqw1mN7fFQUJHtJstEOESXXmL9dUAWVkR77XfC6ZH8GNUAwMAAAGVnk_VwTeeSAAtx3O-C7bP5c6AACrCF3KpNdLeTmY32Yej_Y7GjIIPhw', // 用户 Token
    })
    .then(() => {
      // 登录成功后，跳转会话列表页面
      uni.navigateTo({
        url: '/ChatUIKit/modules/Conversation/index',
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
