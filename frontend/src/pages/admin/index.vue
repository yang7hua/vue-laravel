<template>
	<div id="admin-layout">
		<el-container>
			<el-header>Header</el-header>
			<el-container>
				<el-aside width="200px">
					<!--Menu组件显示在这里-->
					<Menu />
				</el-aside>
				<el-main>Main</el-main>
			</el-container>
		</el-container>
	</div>
</template>
<script>
	import Vue from 'vue'
	//导入elementui的相关组件
	import { Container, Aside, Header, Footer, Main } from 'element-ui'
	Vue.use(Container) //容器
	Vue.use(Aside) //左侧菜单区域
	Vue.use(Header)
	Vue.use(Footer)
	Vue.use(Main)

	//加载全局样式 
	import "../../../public/less/admin.less"

	//导入自定义的菜单组件
	import Menu from './components/menu'

	export default {
		components: {
			//挂载组件
			Menu,
		}
	}
</script>
<style lang="stylus" scoped>
#admin-layout, .el-container {
	width: 100%;
	height: 100%;
	overflow: hidden;
	color: #fff;
}

/* 顶部导航 */
.el-header {
	background: #000;
}

/* 左侧菜单 */
.el-aside {
	background: #33454a;
}

/* 右侧主视窗 */
.el-main {
	color: #333;
}
</style>