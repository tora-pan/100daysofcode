<template>
  <div class="container">
    <h1>{{ theProps }}</h1>
    <input
      ref="inputRef"
      type="text"
      placeholder="what do you need todo?"
      v-model="task"
      @keyup.enter="addItem"
    />
    <button class="addTodoBtn" @click="addItem">Add To List</button>
    <div class="todo-container">
      <table class="table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tasks" :key="item">
            <td>{{ item.name }}</td>
            <td>{{ item.status }}</td>
            <td><div @click="editTask(index)">E</div></td>
            <td><div @click="deleteTask(index)">D</div></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList3",

  data() {
    return {
      task: "",
      tasks: [],
      status: "to-do",
      currentlyEditing: null,
    };
  },

  props: {
    theProps: String,
  },

  methods: {
    addItem() {
      if (this.task.length === 0) return;
      if (this.currentlyEditing === null) {
        this.tasks.push({ name: this.task, status: "to-do" });
      } else {
        this.tasks[this.currentlyEditing].name = this.task;
      }
      this.task = "";
      this.currentlyEditing = null;
    },

    editTask(taskIndex) {
      console.log("editing");
      this.currentlyEditing = taskIndex;
      this.task = this.tasks[taskIndex].name;
    },

    deleteTask(taskIndex) {
      this.tasks.splice(taskIndex, 1);
    },
    setFocus() {
      this.$refs.inputRef.focus();
    },
  },
  watch: {
    task: function () {
      this.$refs.inputRef.focus();
    },
  },
};
</script>

<style scoped>
.table {
  border: 1px solid black;
}
</style>
