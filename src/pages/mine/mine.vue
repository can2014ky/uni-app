<template>
	<view class="mine-ctn">
		<div>手机号：<input v-model="mobile" type="number"></div>
		<div>验证码：<input v-model="smsCode" type="text"></div>
		<button @click="login">登陆</button>
		<button @click="setting" class="setting">设置</button>
	</view>
</template>

<script>
import api from '../../api/request.js'
import { constants } from 'crypto';
export default {
	data() {
		return {
			mobile: '', 
			smsCode: '',
			res: ''
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
		async login() {
			const params = {mobile: this.mobile, smsCode: this.smsCode}
			const res = await api.getLogin(params);
			console.log('login:', res)
			const {data, status} = res;
			if(status) {
				uni.reLaunch({
						url: '../index/index'
				});
			}
		}
	}
}
</script>

<style lang='less'>
	.mine-ctn {
		font-size: 32rpx;
		input {
			border: 1px solid #ccc;
			margin-bottom: 10rpx;
			width: 600rpx;
		}
		.setting {
			margin-top: 100rpx;
		}
	}
</style>
