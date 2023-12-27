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

<style scoped></style>
