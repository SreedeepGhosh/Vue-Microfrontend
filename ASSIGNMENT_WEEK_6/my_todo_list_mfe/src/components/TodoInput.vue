<template>
  <el-input v-model="inp" placeholder="Enter a task" @keyup.enter="addit"/>
  <el-button type="primary" @click="addit" style="margin-top:10px">Add Task</el-button>
</template>

<script>
import { useTodoStore } from '../store/TodoStore'

export default 
{
  data() 
  {
    return {
      s: useTodoStore(),
      inp: ''
    }
  },
  methods: {
    addit() {
      const trimmed = this.inp?.trim()
      if (!trimmed) return
      this.s.add_task(trimmed)
      this.inp = ''
    }
  }
}
</script>
