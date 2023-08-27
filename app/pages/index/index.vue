<template>
	<view class="content">
		<view class="main">
			<view v-for="e in arr">{{e}}</view>
		</view>
		
		<view class="foot">
			<input type="text" class="cont" v-model="cont">
			<button @tap="send">提交</button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				cont: '',
				arr:['adsad','adsa','awra'],
			}
		},
		onLoad() {

		},
		methods: {
				
			send: function(){
				this.arr.push(this.cont)
			}

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}


	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	
		
	.foot{
		position: fixed;
		width: 100%;
		bottom: 0;
			
		.cont{
			background-color: #eee;
			height: 60rpx;
			width: 100%;
			
		}
	}
</style>
