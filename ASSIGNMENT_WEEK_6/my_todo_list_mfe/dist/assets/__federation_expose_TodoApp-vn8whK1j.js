import { importShared } from './__federation_fn_import-Dh9Z48dT.js';
import _sfc_main$1 from './__federation_expose_TodoInput-DvzWkXia.js';
import _sfc_main$2 from './__federation_expose_TodoList-CKvwgH6k.js';

const {createElementVNode:_createElementVNode,createVNode:_createVNode,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');


const _hoisted_1 = { id: "todolist" };


const _sfc_main = {
  __name: 'App',
  setup(__props) {



return (_ctx, _cache) => {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _cache[0] || (_cache[0] = _createElementVNode("h2", null, "Week 6 Assignment - Vue 3 To-Do Micro Frontend", -1)),
    _createVNode(_sfc_main$1),
    _createVNode(_sfc_main$2)
  ]))
}
}

};

export { _sfc_main as default };
