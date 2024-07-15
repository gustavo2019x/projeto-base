import { defineComponent as a, openBlock as r, createElementBlock as l, createElementVNode as t, toDisplayString as o } from "vue";
const s = { class: "bg-green-700 h-10 w-full text-lg flex items-center justify-between" }, c = { class: "bg-green-700 h-10 w-full" }, i = /* @__PURE__ */ a({
  __name: "HeaderPadrao",
  props: {
    textoHeader: String,
    textoFooter: String
  },
  setup(e) {
    function n() {
    }
    return (d, g) => (r(), l("div", null, [
      t("header", s, [
        t("div", null, o(e.textoHeader), 1),
        t("button", {
          class: "text-white h-8 bg-green-900 p-1 w-40",
          onClick: n
        }, " aaa")
      ]),
      t("footer", c, o(e.textoFooter), 1)
    ]));
  }
}), f = {
  install: (e) => {
    e.component("HeaderPadrao", i);
  }
};
export {
  i as HeaderPadrao,
  f as default
};
