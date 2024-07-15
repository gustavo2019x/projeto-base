import { defineComponent as n, ref as l, openBlock as s, createElementBlock as d, createElementVNode as e, toDisplayString as o, renderSlot as c } from "vue";
import { cnpj as i } from "cpf-cnpj-validator";
const p = { class: "bg-green-700 h-10 w-full text-lg flex items-center justify-between" }, u = { class: "bg-green-700 h-10 w-full" }, h = /* @__PURE__ */ n({
  __name: "HeaderPadrao",
  props: {
    textoHeader: { default: "Cabeçalho Padrão" },
    textoFooter: { default: "Rodapé Padrão" }
  },
  setup(f) {
    const r = l("Gerar CNPJ");
    function a() {
      r.value = i.generate();
    }
    return (t, g) => (s(), d("div", null, [
      e("header", p, [
        e("div", null, o(t.textoHeader), 1),
        e("button", {
          class: "text-white h-8 bg-green-900 p-1 w-40",
          onClick: a
        }, o(r.value), 1)
      ]),
      c(t.$slots, "default"),
      e("footer", u, o(t.textoFooter), 1)
    ]));
  }
});
export {
  h as HeaderPadrao
};
