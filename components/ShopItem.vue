<template>
	<view class="shop-item" @tap="handleClick">
		<view class="shop-card" :class="orderClass">
			<view class="shop-body">
				<view class="shop-image">
					<image src="/static/images/shop-avatar.svg" mode="aspectFill" class="image"></image>
				</view>
				<view class="shop-info">
					<view class="shop-name">{{ shop.name }}</view>
					<view class="shop-rating">
						<text class="stars">★★★★★</text>
						<text class="rating-text">{{ shop.rating }}分</text>
					</view>
					<view class="shop-tag">
            <image src="/static/images/ai-text.svg" mode="aspectFill" class="tag-icon"></image>
            <text>{{ shop.tag }}</text>
          </view>
					<view class="shop-address">
            <image :src="mapIconSrc" mode="aspectFill" class="map-pointer-icon"></image>
						<text>{{ shop.address }}</text>
					</view>
					<view class="shop-directions">{{ shop.directions }}</view>
					<view class="shop-actions">
						<view class="action-btn" @tap.stop="handleReserve">
							<text>预定</text>
						</view>
						<view class="action-btn" @tap.stop="handleShare">
							<text>分享</text>
						</view>
						<view class="action-btn" @tap.stop="handleComment">
							<text>评论</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'ShopItem',
	props: {
		shop: {
			type: Object,
			required: true
		},
		first: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		orderClass() {
			return this.first ? 'first-style' : 'other-than-first-style';
		},
		mapIconSrc() {
			return this.first ? '/static/images/map-pointer-gold.svg' : '/static/images/map-pointer-black.svg';
		}
	},
	methods: {
		handleClick() {
			this.$emit('click', this.shop);
		},
		handleReserve() {
			this.$emit('reserve', this.shop);
		},
		handleShare() {
			this.$emit('share', this.shop);
		},
		handleComment() {
			this.$emit('comment', this.shop);
		}
	}
}
</script>

<style scoped>
.shop-item {
	padding: 0 20px;
}

.shop-card {
  width: 100%;
  height: 156px;
	border-radius: 12px;
	overflow: hidden;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.first-style .shop-body {
	background-color: #A0522D;
}

.other-than-first-style .shop-body {
	background-color: #FFFFFF;
}

.shop-body {
	display: flex;
  height: 100%;
}

.image {
	width: 156px;
	height: 156px;
}

.shop-info {
	flex: 1;
	display: flex;
	flex-direction: column;
  padding: 5px 10px;
}

.shop-name {
	font-size: 18px;
	font-weight: bold;
	/* margin-bottom: 8px; */
	color: #333;
}

.first-style .shop-name {
	color: #FFF;
}

.shop-rating {
	display: flex;
	align-items: center;
	margin-bottom: 6px;
}

.rating-text {
	font-size: 14px;
	margin-left: 6px;
	color: #666;
}

.first-style .rating-text {
	color: #FFF;
}

.stars {
	font-size: 12px;
	color: #FFD700;
}

.shop-tag {
  width: fit-content;
	font-size: 12px;
	background-color: #FFEAAE;
	padding: 4px 6px;
	border-radius: 4px;
	margin-bottom: 8px;
	display: inline-block;
	color: #666;
}

.tag-icon {
  width:20px;
  height:14px;
}

.shop-address {
	font-size: 12px;
	color: #666;
	display: flex;
	align-items: center;
	min-width: 0; /* 允许 flex 子项缩小 */
}

.shop-address text {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	flex: 1; /* 让文本占据剩余空间 */
}

.map-pointer-icon {
  width:14px;
  height:14px;
  margin-right: 4px;
}

.first-style .shop-address {
	color: #FFF;
}

.location-icon {
	margin-right: 8px;
}

.shop-directions {
	font-size: 12px;
	color: #999;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.first-style .shop-directions {
	color: rgba(255, 255, 255, 0.7);
}

.shop-actions {
	display: flex;
	gap: 6px;
	margin-top: auto;
  height: 26px;
}

.action-btn {
	flex: 1;
	display: flex;
  justify-content: center;
  align-items: center;
	background-color: #F5F5F5;
	border-radius: 6px;
	font-size: 12px;
	color: #666;
}

.first-style .action-btn {
	background-color: rgba(255, 255, 255, 0.15);
	color: #FFF;
}

.action-icon {
	font-size: 16px;
	margin-bottom: 4px;
}
</style>
