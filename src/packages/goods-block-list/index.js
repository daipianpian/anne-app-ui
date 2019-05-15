// AnneGoodsBlockList 是对应组件的名字，要记得在 index.vue 文件中还是 name 属性哦
import AnneGoodsBlockList from './index.vue';
AnneGoodsBlockList.install = Vue => Vue.component(AnneGoodsBlockList.name, AnneGoodsBlockList);
export default AnneGoodsBlockList;