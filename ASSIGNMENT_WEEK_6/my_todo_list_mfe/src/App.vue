<template>

  <div id="todolist">
    <h2>Week 6 Assignment - Vue 3 To-Do Micro Frontend</h2>
    <TodoInput />
    <TodoList />
  </div>

</template>


<script>
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

export default 
{
  components: 
  {
    TodoInput,
    TodoList
  }
}
</script>

<style>
#todolist 
{
  max-width:600px;
  margin:auto;
  padding:20px;
}
</style>
