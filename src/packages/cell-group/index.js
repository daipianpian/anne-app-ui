// AnneCell 是对应组件的名字，要记得在 index.vue 文件中还是 name 属性哦
import AnneCell from './index.vue';
AnneCell.install = Vue => Vue.component(AnneCell.name, AnneCell);
export default AnneCell;