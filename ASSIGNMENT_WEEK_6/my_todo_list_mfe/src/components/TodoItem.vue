<template>
  <el-card style="margin-bottom:10px">

    <div style="display:flex;justify-content:space-between;align-items:center">

      <div v-if="!editing">

        <el-checkbox :model-value="todo_work.done" @change="toggletask">
          <span :style="{ textDecoration: todo_work.done?'line-through':'none' }">{{ todo_work.text }}</span>
        </el-checkbox>
      </div>

      <div v-else>

        <el-input
          v-model="ed"
          placeholder="Edit task text"
          @keyup.enter="save"
          clearable
        />
      </div>

      <div>
        <el-button size="small" @click="edit" v-if="!editing">Edit</el-button>
        <el-button size="small" type="success" @click="save" v-if="editing">Save</el-button>
        <el-button size="small" @click="cancel" v-if="editing">Cancel</el-button>
        <el-button size="small" type="danger" @click="removetask">Delete</el-button>
      </div>

    </div>
  </el-card>
</template>

<script>

import { useTodoStore } from '../store/todoStore'

export default 
{
  props: 
  {
    todo_work: 
    {
      type: Object,
      required: true
    }
  },
  data() 
  {
    return {
      s: useTodoStore(),
      editing: false,
      ed: this.todo_work.text
    }
  },
  methods: 
  {
    toggletask() 
    {
      this.s.toggle_task(this.todo_work.id)
    },
    removetask() 
    {
      this.s.remove_task(this.todo_work.id)
    },
    edit() 
    {
      this.ed = this.todo_work.text
      this.editing = true
    },
    cancel() 
    {
      this.ed = this.todo_work.text
      this.editing = false
    },
    save() 
    {
      const v = this.ed?.trim() ?? ''
      if (v && v !== this.todo_work.text) {
        this.s.update_task(this.todo_work.id, v)
      }
      this.editing = false
    }
  }
}
</script>
