<template>
  <div class="todo">
    <h2>{{ todo.title }}</h2>
    <p v-if="todo.desc">Description : {{ todo.desc }}</p>
    <p>État: {{ todo.state }}</p>
    <p v-if="todo.dueDate">Date d'échéance: {{ todo.dueDate }}</p>
    <!-- Affichage des sous-tâches -->
    <div v-if="todo.sublist && todo.sublist.length > 0">
      <h3>Sous-tâches :</h3>
      <div v-for="(subtask, index) in todo.sublist" :key="index">
          <input type="checkbox" id ="todo" name="todo" />
            <label for="todo" >{{ subtask }}</label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-facing-decorator';
import Todo from '@/todo';

@Component
export default class TodoComponent extends Vue {
  @Prop({ required: true }) todo!: Todo;
}
</script>

<style scoped>
div.todo {
  border: 1cm;
  background-color: rgba(92, 90, 90, 0.3);
}

h2 {
  color: ghostwhite;
  font-family: Arial, Helvetica, sans-serif;
}

</style>