<template>
  <div class="container">
    <h1>This is my list of things todo.</h1>
    <div class="todo-continer">
      <table class="todo-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(task, index) in tasks" :key="index">
            <th>{{ task.title }}</th>
            <th>
              <div @click="updateStatus(index)">
                {{ taskStatus[task.status] }}
              </div>
            </th>
            <th><div @click="editTask(index)">E</div></th>
            <th><div @click="deleteTask(index)">D</div></th>
          </tr>
        </tbody>
      </table>
    </div>
    <input
      type="text"
      placeholder="What do you need todo today?"
      v-model="task"
    />
    <button @click="addTask">Add Task</button>
  </div>
</template>

<script>
export default {
  name: "TodoList4",
  data() {
    return {
      task: null,
      tasks: [],
      taskStatus: ["pending", "in-progress", "completed"],
      currentStatus: 0,
      currentlyEditing: null,
    };
  },
  methods: {
    addTask() {
      if (this.task.length === 0) return;

      if (this.currentlyEditing === null) {
        this.tasks.push({
          title: this.task,
          status: 0,
        });
      } else {
        this.tasks[this.currentlyEditing].title = this.task;
        this.currentlyEditing = null;
      }
      this.task = "";
    },
    editTask(index) {
      this.task = this.tasks[index].title;
      this.currentlyEditing = index;
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    updateStatus(index) {
      if (this.tasks[index].status === 2) {
        this.tasks[index].status = 0;
      } else {
        this.tasks[index].status++;
      }
    },
  },
};
</script>

<style>
table {
  width: 500px;
}
input {
  width: 500px;
}
</style>
