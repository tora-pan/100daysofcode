<template>
  <div class="container">
    <div class="text-center mt-5">
      <h2>My Todo TodoList</h2>
    </div>
    <div class="d-flex">
      <input
        type="text"
        class="form-control"
        v-model="task"
        placeholder="Enter a task or somehting you are working on."
      />
      <button @click="addTask" class="btn btn-rounded btn-success">
        Add Task
      </button>
    </div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>TASK</th>
          <th>STATUS</th>
          <th>EDIT</th>
          <th>DELETE</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="task">
          <td>{{ task.name }}</td>
          <td>{{ task.isCompleted }}</td>
          <td><div @click="editTask(index)">E</div></td>
          <td><div @click="deleteTask(index)">D</div></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TodoList5",
  data() {
    return {
      task: "",
      tasks: [],
      status: 0,
      isCompleted: false,
      currentlyEditing: null,
    };
  },
  methods: {
    addTask() {
      if (this.task.length === 0) return;
      if (this.currentlyEditing === null) {
        this.tasks.push({ name: this.task, currentStatus: "Pending" });
      } else {
        this.tasks[this.currentlyEditing].name = this.task;
        this.currentlyEditing = null;
      }
      this.task = '';
    },
    editTask(index) {
      this.task = this.tasks[index].name;
      this.currentlyEditing = index;
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>

<style></style>
