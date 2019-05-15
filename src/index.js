import './assets/styles/reset.css'
import './assets/styles/global.scss'
import AnneLoading from './packages/loading/index'
import AnneGoodsBlock from './packages/goods-block/index'
import AnneGoodsBlockList from './packages/goods-block-list/index'
import AnneCell from './packages/cell/index'
import AnneScroll from './packages/scroll/index'
// ...如果还有的更多的话继续添加

const components = [
  AnneLoading,
  AnneGoodsBlock,
  AnneGoodsBlockList,
  AnneCell,
  AnneScroll
  // ...如果还有的更多的话继续添加
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const componentsList = Object.assign(install, components)

export default componentsList