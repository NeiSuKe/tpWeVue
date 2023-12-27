<template>
  <div class="Home">
    <p v-if="visible">Maintenant vous me voyez {{ message }}</p>
    <button v-on:click="foo()">ok</button>
    <div v-background>
      Ce texte a un fond jaune.
    </div>
    <div v-background:green>
      Ce texte a un fond vert.
    </div>
  </div>
  <TodoList />
</template>

<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator'
import TodoList from "./TodoList.vue"

@Component({
  components: {
    TodoList,
  },
})
class Home extends Vue {
  
  message = 'test'
  visible = true
  foo() {
    this.visible = !this.visible
  }
}
export default toNative(Home)
</script>