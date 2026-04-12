<script>
import { useTodoStore } from '../store/todoStore'
import TodoItem from './TodoItem.vue'

export default 
{
  components: 
  {
    TodoItem
  },
  data() 
  {
    return {
      s: useTodoStore()
    }
  }
}
</script>


<template>
  <div style="margin-top:20px">

    <div v-if="s.tasks.length === 0" class="list-view">no items yet</div>

    <TodoItem v-else v-for="x in s.tasks" :key="x.id" :todo_work="x"/>

  </div>
</template>

<style>
.list-view
{
  color: #999;
  font-size: 14px;
}
</style>
