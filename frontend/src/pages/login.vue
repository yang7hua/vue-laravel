<template>
	<div>
		<el-row>
			<el-col :span="8">
				<p></p>
			</el-col>
			<el-col :span="8">
				<el-card
					class="box-card"
					style="text-align:left;"
				>
					<div
						slot="header"
						class="clearfix"
					>
						<span>管理员登录</span>
					</div>
					<div item>
						<!-- 指定v-model直接与data.form.username绑定 -->
						<el-input
							v-model="form.username"
							placeholder="管理员账号"
						/>
					</div>
					<div item>
						<el-input
							v-model="form.password"
							placeholder="管理员密码"
							type="password"
						/>
					</div>
					<div item>
						<el-button
							type="primary"
							@click="submit"
						>登录</el-button>
					</div>
				</el-card>
			</el-col>
			<el-col :span="8"></el-col>
		</el-row>
	</div>
</template>
<script>
export default {
	//因为是组件形式，可能被多次实例化和调用，为了确保子组件的数据的独立性和隔离性，这里必须是函数的形式返回数据
	data() {
		return {
			//定义一个form对象与input关联，包含用户名和密码
			form: {
				username: null,
				password: null
			}
		};
	},
	mounted() {},
	methods: {
		//提交按钮点击事件，表单提交
		submit() {
			const $this = this;
			//console.log(this.form);
			this.$util.axios.post("/user/login", this.form, function(res) {
				if (res.status != 200) {
					return $this.$message.error(res.message);
				}
				$this.$message.success(res.message);
				//1秒钟后跳转到name为admin的组件页面
				setTimeout(function() {
					$this.$router.push({
						name: "admin" //src/routes/index.js中定义
					});
				}, 1000);
			});
		}
	}
};
</script>
<style lang="stylus" scoped>
[item] {
	margin-bottom: 20px;
}
</style>