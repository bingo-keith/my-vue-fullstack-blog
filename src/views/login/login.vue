<template>
  <div class="login-wrap">
    {{data.pageName}}
    {{author2}}
    <br/>
    <van-icon name="location" />
    <van-button type="primary">按钮</van-button>
    <van-row>
      <van-col span="4">span: 4</van-col>
      <van-col span="10" offset="4">offset: 4, span: 10</van-col>
    </van-row>
  </div>
</template>

<script lang="ts" src="./login.ts"></script>

<style lang="scss">
  @import './login.scss';
</style>

