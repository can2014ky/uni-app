<template>
	<view class="mine-ctn">
		<div>我的</div>
		<div @click="setting">设置</div>
	</view>
</template>

<script>
export default {
	data() {
		return {

		}
	},
	onLoad() {

	},
	methods: {
		setting() {
			uni.navigateTo({
				url: '/pages/setting/setting'
			})
		},
	}
}
</script>

<style>
	.index-ctn {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
