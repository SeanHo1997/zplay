<template>
	<view class="content">
		<view class="content-layer">
			<image src="/static/images/circle-green.svg" mode="aspectFit" id="green-1" :style="{ animationDuration: animationSpeeds.shake1 + 's' }"></image>
			<image src="/static/images/circle-green-2.svg" mode="aspectFit" id="green-2" :style="{ animationDuration: animationSpeeds.shake2 + 's' }"></image>
			<image src="/static/images/circle-pink.svg" mode="aspectFit" id="pink" :style="{ animationDuration: animationSpeeds.shake3 + 's' }"></image>
			<image src="/static/images/circle-pink-2.svg" mode="aspectFit" id="pink-2" :style="{ animationDuration: animationSpeeds.shake4 + 's' }"></image>
			<image src="/static/images/circle-orange.svg" mode="aspectFit" id="orange" :style="{ animationDuration: animationSpeeds.shake5 + 's' }"></image>
			<image src="/static/images/circle-orange-2.svg" mode="aspectFit" id="orange-2" :style="{ animationDuration: animationSpeeds.shake6 + 's' }"></image>
			<view
				class="z-wrapper"
				@touchstart="handleTouchStart"
				@touchend="handleTouchEnd"
				@mousedown="handleMouseDown"
				@mouseup="handleMouseUp"
				@mouseleave="handleMouseUp"
			>
				<image v-show="!isPressing" src="/static/images/serrated.gif" mode="aspectFit" class="z-icon"></image>
				<image v-show="isPressing" src="/static/images/wave.gif" mode="aspectFit" class="z-icon"></image>
			</view>
		</view>
		
		<view v-if="isAvatarActive" class="dark-overlay"></view>

		<!-- avatar -->
		<view
			class="avatar-container"
			v-show="!showShopList"
		>
			<image
				src="/static/images/cake.svg"
				mode="aspectFit" 
				id="avatar"
				@tap="toggleAvatar"
			></image>
			<image v-if="isAvatarActive" src="/static/images/setting.png" mode="aspectFit" class="avatar-icon" id="setting-icon"></image>
			<image v-if="isAvatarActive" src="/static/images/explore.png" mode="aspectFit" class="avatar-icon" id="explore-icon"></image>
			<image v-if="isAvatarActive" src="/static/images/story.png" mode="aspectFit" class="avatar-icon" id="story-icon"></image>
		</view>

		<!-- 控制面板按钮 -->
		<view class="panel-toggle" @tap="togglePanel">
			<text class="panel-toggle-text">{{ showPanel ? '隐藏' : '显示' }}</text>
		</view>

		<!-- 动画控制面板 -->
		<view v-show="showPanel" class="animation-panel">
			<view class="panel-header">
				<text class="panel-title">动画速度控制</text>
				<text class="panel-close" @tap="togglePanel">×</text>
			</view>
			<view class="panel-content">
				<view class="slider-item">
					<text class="slider-label">Green-1</text>
					<slider 
						:value="animationSpeeds.shake1" 
						min="1" 
						max="15" 
						step="0.5"
						@change="onSpeedChange('shake1', $event)"
						activeColor="#64c8ff"
						backgroundColor="#e0e0e0"
					/>
					<text class="slider-value">{{ animationSpeeds.shake1 }}s</text>
				</view>
				<view class="slider-item">
					<text class="slider-label">Green-2</text>
					<slider 
						:value="animationSpeeds.shake2" 
						min="1" 
						max="15" 
						step="0.5"
						@change="onSpeedChange('shake2', $event)"
						activeColor="#64c8ff"
						backgroundColor="#e0e0e0"
					/>
					<text class="slider-value">{{ animationSpeeds.shake2 }}s</text>
				</view>
				<view class="slider-item">
					<text class="slider-label">Pink</text>
					<slider 
						:value="animationSpeeds.shake3" 
						min="1" 
						max="15" 
						step="0.5"
						@change="onSpeedChange('shake3', $event)"
						activeColor="#64c8ff"
						backgroundColor="#e0e0e0"
					/>
					<text class="slider-value">{{ animationSpeeds.shake3 }}s</text>
				</view>
				<view class="slider-item">
					<text class="slider-label">Pink-2</text>
					<slider 
						:value="animationSpeeds.shake4" 
						min="1" 
						max="15" 
						step="0.5"
						@change="onSpeedChange('shake4', $event)"
						activeColor="#64c8ff"
						backgroundColor="#e0e0e0"
					/>
					<text class="slider-value">{{ animationSpeeds.shake4 }}s</text>
				</view>
				<view class="slider-item">
					<text class="slider-label">Orange</text>
					<slider 
						:value="animationSpeeds.shake5" 
						min="1" 
						max="15" 
						step="0.5"
						@change="onSpeedChange('shake5', $event)"
						activeColor="#64c8ff"
						backgroundColor="#e0e0e0"
					/>
					<text class="slider-value">{{ animationSpeeds.shake5 }}s</text>
				</view>
				<view class="slider-item">
					<text class="slider-label">Orange-2</text>
					<slider 
						:value="animationSpeeds.shake6" 
						min="1" 
						max="15" 
						step="0.5"
						@change="onSpeedChange('shake6', $event)"
						activeColor="#64c8ff"
						backgroundColor="#e0e0e0"
					/>
					<text class="slider-value">{{ animationSpeeds.shake6 }}s</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				isAvatarActive: false,
				isPressing: false,
				showPanel: false,
				animationSpeeds: {
					shake1: 6,
					shake2: 5.5,
					shake3: 7,
					shake4: 9,
					shake5: 8.5,
					shake6: 8
				}
			}
		},
		onLoad() {

		},
		methods: {
			toggleAvatar() {
				this.isAvatarActive = !this.isAvatarActive;
			},
			handleTouchStart() {
				this.isPressing = true;
			},
			handleTouchEnd() {
				this.isPressing = false;
			},
			handleMouseDown() {
				this.isPressing = true;
			},
			handleMouseUp() {
				this.isPressing = false;
			},
			togglePanel() {
				this.showPanel = !this.showPanel;
			},
			onSpeedChange(type, event) {
				this.animationSpeeds[type] = event.detail.value;
			}
		}
	}
</script>

<style scoped>
	.content {
		position: relative;
		max-height: 100vh;
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
		animation: shake1 ease-in-out infinite;
		animation-delay: 0s;
	}
	
	#green-2 {
		position: absolute;
		top: 571px;
		right: 174px;
		width: 44px;
		height: 44px;
		animation: shake2 ease-in-out infinite;
		animation-delay: 0.5s;
	}

	#pink {
		position: absolute;
		top: 239px;
		right: 57px;
		width: 59px;
		height: 59px;
		animation: shake3 ease-in-out infinite;
		animation-delay: 1s;
	}
	
	#pink-2 {
		position: absolute;
		top: 452px;
		right: 219px;
		width: 56px;
		height: 56px;
		animation: shake4 ease-in-out infinite;
		animation-delay: 0.3s;
	}
	
	#orange {
		position: absolute;
		top: 410px;
		left: 89px;
		width: 32px;
		height: 32px;
		animation: shake5 ease-in-out infinite;
		animation-delay: 0.8s;
	}
	
	#orange-2 {
		position: absolute;
		top: 748px;
		left: 334px;
		width: 32px;
		height: 32px;
		animation: shake6 ease-in-out infinite;
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
		8% { transform: translate(7px, 12px); }
		18% { transform: translate(-9px, -10px); }
		28% { transform: translate(6px, 14px); }
		38% { transform: translate(-8px, -12px); }
		48% { transform: translate(5px, 8px); }
		58% { transform: translate(-7px, -16px); }
		68% { transform: translate(8px, 10px); }
		78% { transform: translate(-6px, -14px); }
		88% { transform: translate(4px, 12px); }
	}

	@keyframes shake5 {
		0%, 100% { transform: translate(0, 0); }
		11% { transform: translate(-5px, 14px); }
		21% { transform: translate(8px, -12px); }
		31% { transform: translate(-6px, 10px); }
		41% { transform: translate(7px, -16px); }
		51% { transform: translate(-9px, 12px); }
		61% { transform: translate(5px, -10px); }
		71% { transform: translate(-7px, 16px); }
		81% { transform: translate(6px, -8px); }
		91% { transform: translate(-4px, 14px); }
	}

	@keyframes shake6 {
		0%, 100% { transform: translate(0, 0); }
		9% { transform: translate(6px, -14px); }
		19% { transform: translate(-8px, 10px); }
		29% { transform: translate(7px, -12px); }
		39% { transform: translate(-5px, 16px); }
		49% { transform: translate(9px, -10px); }
		59% { transform: translate(-6px, 14px); }
		69% { transform: translate(4px, -16px); }
		79% { transform: translate(-7px, 12px); }
		89% { transform: translate(5px, -8px); }
	}
	
	.z-wrapper {
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

	/* 控制面板样式 */
	.panel-toggle {
		position: fixed;
		bottom: 30px;
		right: 30px;
		width: 80px;
		height: 80px;
		background: rgba(100, 200, 255, 0.9);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 100;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	.panel-toggle-text {
		color: #fff;
		font-size: 14px;
		font-weight: bold;
	}

	.animation-panel {
		position: fixed;
		bottom: 130px;
		right: 30px;
		width: 320px;
		background: rgba(255, 255, 255, 0.95);
		border-radius: 12px;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
		z-index: 99;
		overflow: hidden;
	}

	.panel-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 16px 20px;
		background: rgba(100, 200, 255, 0.1);
		border-bottom: 1px solid rgba(100, 200, 255, 0.2);
	}

	.panel-title {
		font-size: 16px;
		font-weight: bold;
		color: #333;
	}

	.panel-close {
		font-size: 24px;
		color: #999;
		line-height: 1;
		cursor: pointer;
	}

	.panel-content {
		padding: 20px;
		max-height: 400px;
		overflow-y: auto;
	}

	.slider-item {
		margin-bottom: 24px;
	}

	.slider-item:last-child {
		margin-bottom: 0;
	}

	.slider-label {
		display: block;
		font-size: 14px;
		color: #666;
		margin-bottom: 8px;
		font-weight: 500;
	}

	.slider-value {
		display: inline-block;
		margin-top: 8px;
		font-size: 12px;
		color: #999;
		min-width: 40px;
		text-align: right;
	}

</style>
