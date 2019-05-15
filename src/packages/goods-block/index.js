// AnneGoodsBlock 是对应组件的名字，要记得在 index.vue 文件中还是 name 属性哦
import AnneGoodsBlock from './index.vue';
AnneGoodsBlock.install = Vue => Vue.component(AnneGoodsBlock.name, AnneGoodsBlock);
export default AnneGoodsBlock;