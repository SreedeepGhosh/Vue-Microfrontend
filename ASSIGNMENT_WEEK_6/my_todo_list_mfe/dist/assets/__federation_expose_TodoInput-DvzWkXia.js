import { importShared } from './__federation_fn_import-Dh9Z48dT.js';
import { u as useTodoStore } from './TodoStore-DeANomu7.js';

const {resolveComponent:_resolveComponent,withKeys:_withKeys,createVNode:_createVNode,createTextVNode:_createTextVNode,withCtx:_withCtx,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');


const {ref} = await importShared('vue');


const _sfc_main = {
  __name: 'TodoInput',
  setup(__props) {

const s=useTodoStore();

const inp=ref('');

function addit() 
{
  const trimmed=inp.value?.trim();
  if (trimmed===false) return
  s.add_task(trimmed);
  inp.value='';
}

return (_ctx, _cache) => {
  const _component_el_input = _resolveComponent("el-input");
  const _component_el_button = _resolveComponent("el-button");

  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _createVNode(_component_el_input, {
      modelValue: inp.value,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((inp).value = $event)),
      placeholder: "Enter a task",
      onKeyup: _withKeys(addit, ["enter"])
    }, null, 8, ["modelValue"]),
    _createVNode(_component_el_button, {
      type: "primary",
      onClick: addit,
      style: {"margin-top":"10px"}
    }, {
      default: _withCtx(() => [...(_cache[1] || (_cache[1] = [
        _createTextVNode("Add Task", -1)
      ]))]),
      _: 1
    })
  ], 64))
}
}

};

export { _sfc_main as default };
