<template>
	<div id="app">
		<!--注释掉这些默认内容
		<img
			alt="Vue logo"
			src="./assets/logo.png"
		>
		<HelloWorld msg="Welcome to Your Vue.js App" />
		-->
		<router-view>
			<!--路由匹配到的页面组件会渲染到这里-->
		</router-view>
	</div>
</template>

<script>
	//import HelloWorld from "./components/HelloWorld.vue";

	//加载element-ui样式库
	import "element-ui/lib/theme-chalk/index.css";

	import Vue from "vue";
	//加载element相关组件
	import { Message, Button, Input, Card, Row, Col } from "element-ui";
	Vue.use(Row); //layout布局行
	Vue.use(Col); //列
	Vue.use(Button); //按钮
	Vue.use(Input); //输入框
	Vue.use(Card); //卡片

	Vue.prototype.$message = Message;
	//调动方法：this.$message.success("content");
	//success、error、warning

	export default {
		name: "app",
		components: {
			//HelloWorld
		}
	};
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
