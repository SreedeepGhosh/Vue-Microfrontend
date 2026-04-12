import { importShared } from './__federation_fn_import-Dh9Z48dT.js';
import { u as useTodoStore } from './TodoStore-DeANomu7.js';
import _sfc_main$1 from './__federation_expose_TodoItem-BaYnfexj.js';

const {unref:_unref,openBlock:_openBlock,createElementBlock:_createElementBlock,createCommentVNode:_createCommentVNode,renderList:_renderList,Fragment:_Fragment,createBlock:_createBlock} = await importShared('vue');


const _hoisted_1 = { style: {"margin-top":"20px"} };
const _hoisted_2 = {
  key: 0,
  class: "list-view"
};



const _sfc_main = {
  __name: 'TodoList',
  setup(__props) {

const s=useTodoStore();

return (_ctx, _cache) => {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    (_unref(s).tasks.length === 0)
      ? (_openBlock(), _createElementBlock("div", _hoisted_2, "no items yet"))
      : (_openBlock(true), _createElementBlock(_Fragment, { key: 1 }, _renderList(_unref(s).tasks, (x) => {
          return (_openBlock(), _createBlock(_sfc_main$1, {
            key: x.id,
            todo_work: x
          }, null, 8, ["todo_work"]))
        }), 128))
  ]))
}
}

};

export { _sfc_main as default };
