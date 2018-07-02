import Vue from "vue";
import * as THREE from "three";

Vue.use({
  install(Vue) {
    Vue.prototype.$THREE = THREE;
  }
});
