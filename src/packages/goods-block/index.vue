<template>
	<div class="anne-goods-block">
    <slot></slot>
	</div>
</template>

<script type="text/ecmascript-6">
  export default {
  	name: 'AnneGoodsBlock',
  	data () {
  		return {
  		}
  	}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
.anne-goods-block{float: left; width:45.5%; height: auto; margin-bottom: 9px; margin-left: 3%; background:#FFFFFF; overflow:hidden; border-radius:6px; box-shadow:0px 0px 6px 0px rgba(204,204,204,0.5);
}
</style>