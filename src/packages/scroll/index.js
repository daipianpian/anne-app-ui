// AnneScroll 是对应组件的名字，要记得在 index.vue 文件中还是 name 属性哦
import AnneScroll from './index.vue';
AnneScroll.install = Vue => Vue.component(AnneScroll.name, AnneScroll);
export default AnneScroll;