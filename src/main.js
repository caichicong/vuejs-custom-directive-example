import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

const customDirectives = [
  {
    directiveName: "fontSize",
    directiveBind: {
      bind(el, binding, vnode) {
        el.style.fontSize = `${binding.value}px`;
      }
    }
  },
  {
    directiveName: "fontStyle",
    directiveBind: {
      bind(el, binding, vnode) {
        const validFontStyles = [
          "normal",
          "italic",
          "oblique",
          "initial",
          "inherit"
        ];
        if (validFontStyles.includes(binding.arg)) {
          el.style.fontStyle = `${binding.arg}`;
        }
      }
    }
  }
];

customDirectives.forEach((d) => {
  Vue.directive(d.directiveName, d.directiveBind);
});

new Vue({
  render: (h) => h(App)
}).$mount("#app");
