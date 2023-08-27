<template>
	<view class="content">
		<view class="main">
			<view v-for="message in messageArray">{{message}}</view>
		</view>

		<view class="foot">
			<input type="text" class="cont" v-model="message">
			<button @tap="sendMessage">提交</button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				message: '',
				messageArray: [],
			}
		},
		onLoad() {
			this.getMessage()
		},
		methods: {

			sendMessage: function() {
				if (this.message.length > 0) {
					this.messageArray.push(this.message)

					let data = this.message
					this.socket.emit('appMessage', data)
				}
			},

			getMessage: function() {
				this.socket.on('serverBroadcastMessage', (data) => {
					this.messageArray.push(data)
				})
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


	.foot {
		position: fixed;
		width: 100%;
		bottom: 0;

		.cont {
			background-color: #eee;
			height: 60rpx;
			width: 100%;

		}
	}
</style>