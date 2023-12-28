<template>
  <div class="todo">
    <h2>{{ todo.title }}</h2>
    <p>État: {{ todo.state }}</p>
    <p v-if="todo.dueDate">Date d'échéance: {{ todo.dueDate }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-facing-decorator'
import Todo from '@/todo'

@Component
export default class TodoComponent extends Vue {
  @Prop({ required: true }) todo!: Todo
}
</script>

<style scoped>
div.todo{
  border: 1cm;
  background-color: rgba(92, 90, 90, 0.3);
  
}
h2{
  color: ghostwhite;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
