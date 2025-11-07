<template>
	<view class="content">
		<view class="content-layer">
			<image src="/static/images/circle-green.svg" mode="aspectFit" id="green-1"></image>
			<image src="/static/images/circle-green-2.svg" mode="aspectFit" id="green-2"></image>
			<image src="/static/images/circle-pink.svg" mode="aspectFit" id="pink"></image>
			<image src="/static/images/circle-pink-2.svg" mode="aspectFit" id="pink-2"></image>
			<image src="/static/images/circle-orange.svg" mode="aspectFit" id="orange"></image>
			<image src="/static/images/circle-orange-2.svg" mode="aspectFit" id="orange-2"></image>
			<image src="/static/images/z.svg" mode="aspectFit" id="z"></image>
		</view>
		
		<view v-if="isAvatarActive" class="dark-overlay"></view>

		<view class="avatar-container">
			<image 
				src="/static/images/cake.svg" 
				mode="aspectFit" 
				id="avatar"
				@tap="toggleAvatar"
			></image>
			<image src="/static/images/setting.svg" mode="aspectFit" class="avatar-icon" id="setting-icon"></image>
			<image src="/static/images/explore.svg" mode="aspectFit" class="avatar-icon" id="explore-icon"></image>
			<image src="/static/images/story.svg" mode="aspectFit" class="avatar-icon" id="story-icon"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				isAvatarActive: false
			}
		},
		onLoad() {

		},
		methods: {
			toggleAvatar() {
				this.isAvatarActive = !this.isAvatarActive;
			}
		}
	}
</script>

<style scoped>
	.content {
		position: relative;
		min-height: 100vh;
		width: 100%;
	}
	
	.content-layer {
		position: relative;
		min-height: 100vh;
		width: 100%;
		background-image: url("~@/static/images/bg.png");
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		z-index: 0;
	}
	
	.dark-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 1;
		transition: opacity 0.3s ease;
	}
	
	.avatar-container {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
	}
	
	#green-1 {
		position: absolute;
		left: 26px;
		top: 140px;
		width: 45px;
		height: 45px;
		animation: shake1 6s ease-in-out infinite;
		animation-delay: 0s;
	}
	
	#green-2 {
		position: absolute;
		top: 571px;
		right: 174px;
		width: 44px;
		height: 44px;
		animation: shake2 5.5s ease-in-out infinite;
		animation-delay: 0.5s;
	}

	#pink {
		position: absolute;
		top: 239px;
		right: 57px;
		width: 59px;
		height: 59px;
		animation: shake3 7s ease-in-out infinite;
		animation-delay: 1s;
	}
	
	#pink-2 {
		position: absolute;
		top: 452px;
		right: 219px;
		width: 56px;
		height: 56px;
		animation: shake4 6.5s ease-in-out infinite;
		animation-delay: 0.3s;
	}
	
	#orange {
		position: absolute;
		top: 410px;
		left: 89px;
		width: 32px;
		height: 32px;
		animation: shake5 6.2s ease-in-out infinite;
		animation-delay: 0.8s;
	}
	
	#orange-2 {
		position: absolute;
		top: 748px;
		left: 334px;
		width: 32px;
		height: 32px;
		animation: shake6 5.8s ease-in-out infinite;
		animation-delay: 1.2s;
	}

	.avatar-icon {
		position: absolute;
		width: 40px;
		height: 40px;
	}

	#setting-icon {
		top: 72px;
		left: 134px;
	}

	#explore-icon {
		top: 160px;
		left: 134px;
	}

	#story-icon {
		top: 204px;
		left: 54px;
	}

	/* 不规则的上下左右晃动动画 */
	@keyframes shake1 {
		0%, 100% { transform: translate(0, 0); }
		10% { transform: translate(-8px, 5px); }
		20% { transform: translate(6px, -4px); }
		30% { transform: translate(-5px, 6px); }
		40% { transform: translate(7px, -3px); }
		50% { transform: translate(-4px, 4px); }
		60% { transform: translate(5px, -5px); }
		70% { transform: translate(-6px, 3px); }
		80% { transform: translate(4px, -6px); }
		90% { transform: translate(-3px, 5px); }
	}

	@keyframes shake2 {
		0%, 100% { transform: translate(0, 0); }
		15% { transform: translate(10px, -6px); }
		25% { transform: translate(-7px, 8px); }
		35% { transform: translate(8px, -5px); }
		45% { transform: translate(-6px, 7px); }
		55% { transform: translate(5px, -4px); }
		65% { transform: translate(-9px, 6px); }
		75% { transform: translate(7px, -7px); }
		85% { transform: translate(-4px, 5px); }
	}

	@keyframes shake3 {
		0%, 100% { transform: translate(0, 0); }
		12% { transform: translate(-6px, -5px); }
		22% { transform: translate(9px, 7px); }
		32% { transform: translate(-7px, -6px); }
		42% { transform: translate(5px, 8px); }
		52% { transform: translate(-8px, -4px); }
		62% { transform: translate(6px, 6px); }
		72% { transform: translate(-5px, -7px); }
		82% { transform: translate(7px, 5px); }
		92% { transform: translate(-4px, -6px); }
	}

	@keyframes shake4 {
		0%, 100% { transform: translate(0, 0); }
		8% { transform: translate(7px, 6px); }
		18% { transform: translate(-9px, -5px); }
		28% { transform: translate(6px, 7px); }
		38% { transform: translate(-8px, -6px); }
		48% { transform: translate(5px, 4px); }
		58% { transform: translate(-7px, -8px); }
		68% { transform: translate(8px, 5px); }
		78% { transform: translate(-6px, -7px); }
		88% { transform: translate(4px, 6px); }
	}

	@keyframes shake5 {
		0%, 100% { transform: translate(0, 0); }
		11% { transform: translate(-5px, 7px); }
		21% { transform: translate(8px, -6px); }
		31% { transform: translate(-6px, 5px); }
		41% { transform: translate(7px, -8px); }
		51% { transform: translate(-9px, 6px); }
		61% { transform: translate(5px, -5px); }
		71% { transform: translate(-7px, 8px); }
		81% { transform: translate(6px, -4px); }
		91% { transform: translate(-4px, 7px); }
	}

	@keyframes shake6 {
		0%, 100% { transform: translate(0, 0); }
		9% { transform: translate(6px, -7px); }
		19% { transform: translate(-8px, 5px); }
		29% { transform: translate(7px, -6px); }
		39% { transform: translate(-5px, 8px); }
		49% { transform: translate(9px, -5px); }
		59% { transform: translate(-6px, 7px); }
		69% { transform: translate(4px, -8px); }
		79% { transform: translate(-7px, 6px); }
		89% { transform: translate(5px, -4px); }
	}

	#z {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	#avatar {
		position: absolute;
		top: 84px;
		left: 26px;
		width: 84px;
		height: 84px;
	}

	.setting-text {
		position: absolute;
		top: 84px;
		left: 120px;
		font-size: 16px;
		color: #333;
		line-height: 84px;
	}
</style>
