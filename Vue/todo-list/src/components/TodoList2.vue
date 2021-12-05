<template>
  <div class="container">
    <h1>Task Manager 3000</h1>
    <input
      type="text"
      placeholder="Input your task"
      class="form-control"
      v-model="task"
    />
    <button class="btn btn-success m-2" @click="addTask">Add Task</button>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Task</th>
          <th scope="col">Status</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <td scope="row">{{ task.name }}</td>
          <td>{{ task.status }}</td>
          <td>
            <div @click="editTask(index)">
              <span class="fa fa-pen"></span>
            </div>
          </td>
          <td>
            <div @click="deleteTask(index)">
              <span class="fa fa-trash"></span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <input
      type="text"
      placeholder="input a github username"
      v-model="githubUsername"
      class="form-control"
    />
    <button @click="loadUser" class="btn btn-success mt-2">Load User</button>
    <div v-if="info">
      <img
        class="profile-picture"
        v-bind:src="info.data.avatar_url"
        alt="avatar picture"
      />
      <a v-bind:href="info.data.html_url">{{ info.data.name }}</a>
      <p>{{ info.data.bio }}</p>
      <p v-if="info.data.hireable">Open For Work</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TodoList2",
  data() {
    return {
      task: "",
      tasks: [],
      currentEditing: null,
      info: null,
      githubUsername: "",
    };
  },

  // life cycle method mounted.
  // mounted() {
  //   axios
  //     .get("https://api.github.com/users/tora-pan")
  //     .then((response) => (this.info = response));
  // },

  methods: {
    addTask() {
      console.log("add task", this.tasks.length);
      if (this.task.length === 0) return;

      if (this.currentEditing === null) {
        this.tasks.push({ name: this.task, status: "in-progress" });
        this.task = "";
      } else {
        this.tasks[this.currentEditing].name = this.task;
        this.task = "";
        this.currentEditing = null;
      }
    },
    editTask(index) {
      this.currentEditing = index;
      this.task = this.tasks[this.currentEditing].name;
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },

    loadUser() {
      axios
        .get(`https://api.github.com/users/${this.githubUsername}`)
        .then((response) => (this.info = response));
    },
  },
};
</script>

<style scoped>
.profile-picture {
  display: flex;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-top: 10px;
}
</style>
