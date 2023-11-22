<!--  -->
<template>
  <div class="">
    <div class='at-container'>
	<div class='at-item' >404</div>
</div>

  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
div.at-container {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}
	.at-item {
		color: #3079ed; font-weight:bold; font-size:45em;
		
		animation-name: text-shadow-multicolor2;
		animation-duration: 1s;
		animation-timing-function: linear;
		animation-delay: 1s;
		animation-iteration-count: infinite;
		animation-direction: normal;
		animation-fill-mode: forwards;
			
		/* shorthand
		animation: text-shadow-multicolor2 1s linear 1s infinite normal forwards;*/
	}
	@keyframes text-shadow-multicolor2 {
			
		0% {
			text-shadow:0 0 black, 0 0 red, 0 0 orange,0 0 yellow,0 0 green,0 0 skyblue,0 0 blue,0 0 white;
			transform:translateX(0) translateY(0);
		}
		100% {
			text-shadow:-1px -1px black,-3px -3px red,-5px -5px orange,-7px -7px yellow,-9px -9px green,-11px -11px skyblue,-13px -13px blue,-15px -15px white;
			transform:translateX(8px) translateY(8px);
		}
	}

/* 应用动画到文本元素 */

</style>


