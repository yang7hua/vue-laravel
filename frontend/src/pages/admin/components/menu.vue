<template>
	<el-menu
		default-active="2"
		class="el-menu-vertical-demo"
		@open="handleOpen"
		@close="handleClose"
		@select="handleSelect"
		background-color="#33454a"
		text-color="#fff"
	>
		<el-submenu :index="item.label" v-for="(item,index) in list" :key="index">
			<template slot="title">
				<i :class="item.icon"></i>
				<span>{{item.label}}</span>
			</template>
			<el-menu-item
				v-for="child in item.children"
				:key="child.name"
				:index="child.name"
			>{{child.label}}</el-menu-item>
		</el-submenu>
	</el-menu>
</template>
<script>
	import Vue from 'vue'
	//导入ElementUI相关组件
	import { Menu, MenuItem, Submenu, MenuItemGroup } from 'element-ui'
	Vue.use(Menu)
	Vue.use(MenuItem)
	Vue.use(Submenu)
	Vue.use(MenuItemGroup)
	export default {
		data() {
			return {
				//所有的导航菜单项
				list: [
					{
						label: '文章管理',
						icon: 'el-icon-s-order',
						children: [
							{
								name: 'mm.article', //注意，name对应的是在routes/index.js中定义的路由中的名称name，如果没有定义name对应的路由的话，导航会失败
								label: '文章列表',
							},
							{
								name: 'mm.article.new',
								label: '创建文章',
							}
						]
					}
				]
			}
		},

		methods: {
			//菜单激活回调
			//index: 选中菜单项的 index, indexPath: 选中菜单项的 index path
			handleSelect(index, indexPath) {
				console.log(index, indexPath)
			},
			//sub-menu 展开的回调
			//index: 打开的 sub-menu 的 index， indexPath: 打开的 sub-menu 的 index path
			handleOpen(index, indexPath) {
				console.log(index, indexPath)
			},
			//sub-menu 收起的回调
			//index: 收起的 sub-menu 的 index， indexPath: 收起的 sub-menu 的 index path
			handleClose(index, indexPath) {
				console.log(index, indexPath)
			}
		}
	}
</script>
<style lang="stylus" scoped>
.el-menu {
	border: none; /* 去掉右边的边框。因为背景是深色，这里的白色右边框会导致看起来有一个缺口 */
}
</style>