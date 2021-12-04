<template>
  <div class="container">
    <h2 class="text-center mt-5">My Vue Todo App</h2>
    <!-- Input -->
    <div class="d-flex">
      <input
        v-model="task"
        type="text"
        placeholder="Enter Task"
        class="form-control"
      />
      <button @click="submitTask(index)" class="btn btn-warning rounded-0">
        SUBMIT
      </button>
    </div>

    <!-- Table -->
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">TASK</th>
          <th scope="col">STATUS</th>
          <th scope="col" class="text-center">EDIT</th>
          <th scope="col" class="text-center">DELETE</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <td>{{ task.name }}</td>
          <td>{{ task.status }}</td>
          <td>
            <div @click="editTask(index)" class="text-center">
              <span role="button" class="fa fa-pen"></span>
            </div>
          </td>
          <td>
            <div @click="deleteTask(index)" class="text-center">
              <span role="button" class="fa fa-trash"></span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TodoList",

  data() {
    return {
      task: "",
      tasks: [],
      currentlyEditing: null,
    };
  },

  methods: {
    submitTask() {
      if (this.task.length === 0) return;
      if (this.currentlyEditing === null) {
        this.tasks.push({ name: this.task, status: "to-do" });
        this.task = "";
      } else {
        this.tasks[this.currentlyEditing].name = this.task;
        this.currentlyEditing = null;
        this.task = "";
      }
    },

    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    editTask(index) {
      this.task = this.tasks[index].name;
      this.currentlyEditing = index;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
