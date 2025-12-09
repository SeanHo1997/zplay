<template>
	<view class="content">
		<!-- 店铺列表 -->
		<div class="shop-list-wrapper">
			<image
				class="pin-icon"
				src="/static/images/pin.svg"
				mode="aspectFit"
			></image>

			<view class="shop-list">
				<ShopItem
					v-for="(shop, index) in shopList"
					:key="shop.id"
					:shop="shop"
					:first="index === 0"
					@click="handleShopClick"
				/>
			</view>

			<image
				class="next-page-arrow"
				src="/static/images/next-page-arror.svg"
				mode="aspectFit"
			></image>
		</div>
	</view>
</template>

<script>
	import ShopItem from '@/components/ShopItem.vue'

	export default {
		components: {
			ShopItem
		},
		data() {
			return {
				shopList: [
					{
						id: 1,
						name: '酒吞(乐坊店)',
						rating: 4.5,
						tag: '火锅料理好评榜・第1名',
						address: '虹井路288号乐虹坊4楼401号',
						directions: '地铁像龙柏新村站出入口步行20m',
						image: 'https://via.placeholder.com/120x120'
					},
					{
						id: 2,
						name: '酒吞(乐坊店)',
						rating: 4.5,
						tag: '火锅料理好评榜・第1名',
						address: '虹井路288号乐虹坊4楼401号',
						directions: '地铁像龙柏新村站出入口步行20m',
						image: 'https://via.placeholder.com/120x120'
					},
					{
						id: 3,
						name: '酒吞(乐坊店)',
						rating: 4.5,
						tag: '火锅料理好评榜・第1名',
						address: '虹井路288号乐虹坊4楼401号',
						directions: '地铁像龙柏新村站出入口步行20m',
						image: 'https://via.placeholder.com/120x120'
					}
				]
			}
		},
		methods: {
			handleShopClick(shop) {
				uni.navigateTo({
					url: `/pages/shop/detail?id=${shop.id}`
				});
			}
		}
	}
</script>

<style scoped>
.content {
	position: relative;
	min-height: 100vh;
	width: 100%;
  background-image: url('~@/static/images/shop-list-bg.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.shop-list-wrapper {
	position: absolute;
	inset: 0;
	z-index: 5;
}

.pin-icon {
	position: absolute;
	right: 21px;
	top: 30px;
	width: 40px;
	height: 40px;
}

.shop-list {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 80px 0;
	box-sizing: border-box;
	gap: 10px;
}

.next-page-arrow {
	position: absolute;
  left: 50%;
  transform: translateX(-50%);
	bottom: 30px;
	width: 50px;
	height: 50px;
	animation: float-down 2s ease-in-out infinite;
}

@keyframes float-down {
	0%, 100% {
		transform: translateX(-50%) translateY(0);
	}
	50% {
		transform: translateX(-50%) translateY(10px);
	}
}
</style>
