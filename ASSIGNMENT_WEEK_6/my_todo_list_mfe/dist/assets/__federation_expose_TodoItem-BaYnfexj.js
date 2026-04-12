import { importShared } from './__federation_fn_import-Dh9Z48dT.js';
import { u as useTodoStore } from './TodoStore-DeANomu7.js';

const {toDisplayString:_toDisplayString,normalizeStyle:_normalizeStyle,createElementVNode:_createElementVNode,resolveComponent:_resolveComponent,withCtx:_withCtx,createVNode:_createVNode,openBlock:_openBlock,createElementBlock:_createElementBlock,createCommentVNode:_createCommentVNode,withKeys:_withKeys,createTextVNode:_createTextVNode,createBlock:_createBlock} = await importShared('vue');


const _hoisted_1 = { style: {"display":"flex","justify-content":"space-between","align-items":"center"} };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 1 };

const {ref} = await importShared('vue');


const _sfc_main = {
  __name: 'TodoItem',
  props: ['todo_work'],
  setup(__props) {

const props= __props;
const s = useTodoStore();


const editing=ref(false);
const ed = ref(props.todo_work.text);

const toggletask =()=> s.toggle_task(props.todo_work.id);
const removetask =()=> s.remove_task(props.todo_work.id);

function edit() 
{
  ed.value =props.todo_work.text;
  editing.value = true;
}

function cancel() 
{
  ed.value = props.todo_work.text;
  editing.value  =  false;
}

function save() 
{
  const v=ed.value?.trim() ?? '';
  if (v && v!==props.todo_work.text) 
  {
    s.update_task(props.todo_work.id, v);
  }
  editing.value=false;
}

return (_ctx, _cache) => {
  const _component_el_checkbox = _resolveComponent("el-checkbox");
  const _component_el_input = _resolveComponent("el-input");
  const _component_el_button = _resolveComponent("el-button");
  const _component_el_card = _resolveComponent("el-card");

  return (_openBlock(), _createBlock(_component_el_card, { style: {"margin-bottom":"10px"} }, {
    default: _withCtx(() => [
      _createElementVNode("div", _hoisted_1, [
        (!editing.value)
          ? (_openBlock(), _createElementBlock("div", _hoisted_2, [
              _createVNode(_component_el_checkbox, {
                "model-value": __props.todo_work.done,
                onChange: toggletask
              }, {
                default: _withCtx(() => [
                  _createElementVNode("span", {
                    style: _normalizeStyle({ textDecoration: __props.todo_work.done?'line-through':'none' })
                  }, _toDisplayString(__props.todo_work.text), 5)
                ]),
                _: 1
              }, 8, ["model-value"])
            ]))
          : (_openBlock(), _createElementBlock("div", _hoisted_3, [
              _createVNode(_component_el_input, {
                modelValue: ed.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((ed).value = $event)),
                placeholder: "Edit task text",
                onKeyup: _withKeys(save, ["enter"]),
                clearable: ""
              }, null, 8, ["modelValue"])
            ])),
        _createElementVNode("div", null, [
          (!editing.value)
            ? (_openBlock(), _createBlock(_component_el_button, {
                key: 0,
                size: "small",
                onClick: edit
              }, {
                default: _withCtx(() => [...(_cache[1] || (_cache[1] = [
                  _createTextVNode("Edit", -1)
                ]))]),
                _: 1
              }))
            : _createCommentVNode("", true),
          (editing.value)
            ? (_openBlock(), _createBlock(_component_el_button, {
                key: 1,
                size: "small",
                type: "success",
                onClick: save
              }, {
                default: _withCtx(() => [...(_cache[2] || (_cache[2] = [
                  _createTextVNode("Save", -1)
                ]))]),
                _: 1
              }))
            : _createCommentVNode("", true),
          (editing.value)
            ? (_openBlock(), _createBlock(_component_el_button, {
                key: 2,
                size: "small",
                onClick: cancel
              }, {
                default: _withCtx(() => [...(_cache[3] || (_cache[3] = [
                  _createTextVNode("Cancel", -1)
                ]))]),
                _: 1
              }))
            : _createCommentVNode("", true),
          _createVNode(_component_el_button, {
            size: "small",
            type: "danger",
            onClick: removetask
          }, {
            default: _withCtx(() => [...(_cache[4] || (_cache[4] = [
              _createTextVNode("Delete", -1)
            ]))]),
            _: 1
          })
        ])
      ])
    ]),
    _: 1
  }))
}
}

};

export { _sfc_main as default };
