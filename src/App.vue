<template>
  <div id="app">
    <h1>Hello</h1>
    <router-link to="/home">Home</router-link>
    <router-link to="/nav">Nav</router-link>
    
    <router-view></router-view>
  </div>
</template>

<script>
import TodoList from './components/TodoList';
import CreateTodo from './components/CreateTodo';
import Home from './components/Home';
import NavBar from './components/Nav';

export default {
  name: 'app',
  components: {
    TodoList,
    CreateTodo,
    Home,
    NavBar,
  },
};
</script>
