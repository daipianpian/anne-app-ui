<template>
	<div class="anne-goods-block-list">
    <div class="anne-goods-block-box">
      <slot></slot>
    </div>
	</div>
</template>

<script type="text/ecmascript-6">
  export default {
  	name: 'AnneGoodsBlockList',
  	data () {
  		return {
  		}
  	}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
// 商品列表-块状
.anne-goods-block-list{
  width:100%; padding:12px 0; background:#FFFFFF; overflow:hidden;
  .anne-goods-block-box{width:100%;height: auto; overflow:hidden;}
}
</style>