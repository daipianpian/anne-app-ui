// AnneLoading 是对应组件的名字，要记得在 index.vue 文件中还是 name 属性哦
import AnneLoading from './index.vue';
AnneLoading.install = Vue => Vue.component(AnneLoading.name, AnneLoading);
export default AnneLoading;