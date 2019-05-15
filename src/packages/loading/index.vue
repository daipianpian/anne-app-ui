<template>
	<div class="anne-loading">
		<div class="anne-loading-main">
			<span class="anne-loading-spinner">
				<i></i>
				<i></i>
				<i></i>
				<i></i>
				<i></i>
				<i></i>
				<i></i>
				<i></i>
				<i></i>
				<i></i>
				<i></i>
				<i></i>
			</span>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
export default {
	name: "AnneLoading",
	data () {
		return {
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
.anne-loading{ position: fixed; width:100%; height:100%;
	.anne-loading-main{position: absolute; width: 30px; height: 30px;top: 50%; left: 50%; margin-top: -25px; margin-left: -25px; z-index: 0; font-size: 0; line-height: 0; vertical-align: middle;padding: 10px; border-radius: 3px; background-color: rgba(0, 0, 0, 0.5); }
	.anne-loading-spinner{
		    z-index: -1;
		    width: 100%;
		    height: 100%;
		    position: relative;
		    display: inline-block;
		    box-sizing: border-box;
		    -webkit-animation: anne-rotate 0.8s linear infinite;
		    animation: anne-rotate 0.8s linear infinite;
		    -webkit-animation-timing-function: steps(12);
    		animation-timing-function: steps(12);
	}
	.anne-loading-spinner i{top: 0;left: 0;width: 100%;height: 100%; color: #ffffff;position: absolute;
		&::before {width: 2px;height: 25%;content: ' ';display: block;margin: 0 auto;border-radius: 40%;background-color: currentColor;}
		&:nth-of-type(1) {opacity: 1;-webkit-transform: rotate(30deg);transform: rotate(30deg);}
		&:nth-of-type(2) {opacity: 0.9375;-webkit-transform: rotate(60deg);transform: rotate(60deg);}
		&:nth-of-type(3) {opacity: 0.875;-webkit-transform: rotate(90deg);transform: rotate(90deg);}
		&:nth-of-type(4) {opacity: 0.8125;-webkit-transform: rotate(120deg);transform: rotate(120deg);}
		&:nth-of-type(5) {opacity: 0.75;-webkit-transform: rotate(150deg);transform: rotate(150deg);}
		&:nth-of-type(6) {opacity: 0.6875;-webkit-transform: rotate(180deg);transform: rotate(180deg);}
		&:nth-of-type(7) {opacity: 0.625;-webkit-transform: rotate(210deg);transform: rotate(210deg);}
		&:nth-of-type(8) {opacity: 0.5625;-webkit-transform: rotate(240deg);transform: rotate(240deg);}
		&:nth-of-type(9) {opacity: 0.5;-webkit-transform: rotate(270deg);transform: rotate(270deg);}
		&:nth-of-type(10) {opacity: 0.4375;-webkit-transform: rotate(300deg);transform: rotate(300deg);}
		&:nth-of-type(11) {opacity: 0.375;-webkit-transform: rotate(330deg);transform: rotate(330deg);}
		&:nth-of-type(12) {opacity: 0.3125;-webkit-transform: rotate(360deg);transform: rotate(360deg);}
	}
}
</style>