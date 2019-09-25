<template>
  <div class="index-wrap">
		<router-link :to="{name: 'index'}">首页</router-link>
		<router-link :to="{name: 'login'}">登录</router-link>
		<router-link :to="{name: 'test'}">测试</router-link>
    {{data.pageName}}
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="scss">
  @import './index.scss'
</style>

