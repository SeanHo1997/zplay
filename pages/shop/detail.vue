<template>
	<view class="detail-page">
		<view class="detail-content">
			<text>店铺详情页</text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			shopId: ''
		}
	},
	onLoad(options) {
		if (options.id) {
			this.shopId = options.id;
		}
	}
}
</script>

<style scoped>
.detail-page {
	min-height: 100vh;
	background-color: #F5F5F5;
}

.detail-content {
	padding: 20px;
	text-align: center;
	color: #666;
}
</style>
