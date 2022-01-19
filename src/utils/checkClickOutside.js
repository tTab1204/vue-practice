import Vue from 'vue';

export const checkClickOutside = Vue.directive('click-outside', {
  bind(el, binding, vnode) {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };

    document.body.addEventListener('mousedown', el.clickOutsideEvent);
  },
  unbind(el) {
    document.body.removeEventListener('mousedown', el.clickOutsideEvent);
  },
});
