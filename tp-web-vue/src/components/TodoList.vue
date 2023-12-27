<template>
  <div class="todolist">
    <h1>Todos</h1>

    <!-- Champ d'entrée et bouton pour ajouter une nouvelle tâche -->
    <div>
      <input v-model="newTaskTitle" placeholder="Nouvelle tâche" />
      <input type="date" v-model="newTaskDueDate" placeholder="Date" />
      <button @click="addTask">Ajouter</button>
    </div>

    <!-- Boutons de filtre -->
    <div>
      <button @click="setFilter('all')">Toutes</button>
      <button @click="setFilter('todo')">À faire</button>
      <button @click="setFilter('done')">Faites</button>
    </div>

    <!-- Liste des tâches en fonction du filtre actuel -->
    <div v-for="task in filteredTasks" :key="task.title">
      <div v-if="editingTask === task">
        <input v-model="editedTaskTitle" @blur="stopEditing" @keyup.enter="updateTaskTitle(task)" />
      </div>
      <div v-else @dblclick="startEditing(task)">
        <TodoComponent :todo="task" />
      </div>
      <!-- Liste déroulante pour choisir l'état de la tâche -->
      <select v-model="task.state" @change="updateTaskState(task)">
        <option value="À faire">À faire</option>
        <option value="En cours">En cours</option>
        <option value="Fait">Fait</option>
      </select>
      <!-- Bouton de suppression pour chaque tâche -->
      <button @click="removeTask(task)">Supprimer</button>
    </div>

    <!-- Footer uniquement s'il y a au moins une tâche -->
    <footer v-if="tasks.length > 0">
      <span>{{ remainingTasks }} tâches restantes</span>
      <!-- Bouton de suppression de toutes les tâches -->
      <button @click="clearTasks">Supprimer toutes les tâches</button>
      <!-- Bouton de suppression des tâches terminées -->
      <button @click="removeCompletedTasks">Supprimer les tâches terminées</button>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator';
import TodoComponent from '@/components/TodoComponent.vue';
import Todo from '@/todo';

@Component({
  components: {
    TodoComponent,
  },
})
export default class TodoList extends Vue {
  tasks: Todo[] = [];
  newTaskTitle: string = '';
  currentFilter: string = 'all';
  newTaskDueDate: string = '';
  editingTask: Todo | null = null;
  editedTaskTitle: string = '';

  // Méthode pour ajouter une nouvelle tâche
  addTask() {
    if (this.newTaskTitle.trim() !== '') {
      if (this.newTaskDueDate !== '') {
        const newTask = new Todo(this.newTaskTitle, 'À faire', new Date(this.newTaskDueDate));
        this.tasks.push(newTask);
      } else {
        const newTask = new Todo(this.newTaskTitle, 'À faire');
        this.tasks.push(newTask);
      }

      this.newTaskTitle = '';
      this.newTaskDueDate = '';
    }
  }

  // Méthode pour supprimer une tâche spécifique
  removeTask(taskToRemove: Todo) {
    this.tasks = this.tasks.filter(task => task !== taskToRemove);
  }

  // Méthode pour supprimer toutes les tâches
  clearTasks() {
    this.tasks = [];
  }

  // Méthode pour supprimer les tâches terminées
  removeCompletedTasks() {
    this.tasks = this.tasks.filter(task => task.state !== 'Fait');
  }

  // Méthode pour commencer l'édition d'une tâche
  startEditing(task: Todo) {
    this.editingTask = task;
    this.editedTaskTitle = task.title;
  }

  // Méthode pour arrêter l'édition d'une tâche
  stopEditing() {
    this.editingTask = null;
  }

  // Méthode pour mettre à jour le titre d'une tâche en cours d'édition
  updateTaskTitle(task: Todo) {
    task.title = this.editedTaskTitle;
  setTimeout(() => {
    this.editingTask = null;  // Réinitialiser l'édition après la mise à jour
  }, 0);
  }

  // Méthode pour mettre à jour l'état d'une tâche
  updateTaskState(task: Todo) {
    console.log(`La tâche "${task.title}" est maintenant à l'état "${task.state}"`);
  }

  // Propriété calculée pour obtenir le nombre de tâches restantes
  get remainingTasks(): number {
    return this.tasks.filter(task => task.state === 'À faire').length;
  }

  // Propriété calculée pour obtenir les tâches en fonction du filtre actuel
  get filteredTasks(): Todo[] {
    if (this.currentFilter === 'all') {
      return this.tasks;
    } else if (this.currentFilter === 'todo') {
      return this.tasks.filter(task => task.state === 'À faire');
    } else if (this.currentFilter === 'done') {
      return this.tasks.filter(task => task.state === 'Fait');
    } else {
      return [];
    }
  }

  // Méthode pour définir le filtre actuel
  setFilter(filter: string) {
    this.currentFilter = filter;
  }
}
</script>

<style scoped>
/* Styles spécifiques au composant TodoList vont ici */
</style>
