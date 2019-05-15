<template>
  <div class="anne-cell flex">
    <div class="cell-title flex-item">
      <slot name="title">
        <span>{{title}}</span>
      </slot>
    </div>
    <div class="cell-value">
      <slot name="value">
        <span>{{value}}</span>
      </slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'AnneCell',
    data () {
      return {
      }
    },
    props: {
      title: {
        type: String,
        default: null
      },
      value: {
        type: [String, Number],
        default: null
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
.anne-cell{
  position:relative; padding: 13px 15px 14px; font-size:15px;
  &::after{content: '';position: absolute;pointer-events: none;width: 100%; height: 1px; left: 0; bottom: 0; background: $color-gray-white;z-index: 1;}
  &:last-child{
    &::after{display: none;}
  }
  .cell-title{color: $color-black;}
  .cell-value{color: $color-gray-medium;}
}
</style>