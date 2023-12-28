<template>
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