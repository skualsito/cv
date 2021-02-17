<template>
<div>
  <Menu />
  <Porfolio />
</div>
  
</template>

<script>
import Menu from './components/Menu';
import Porfolio from './views/Porfolio';

export default {
  name: 'App',
  components: {
    Menu,
    Porfolio
  }
}
</script>

<style>

@import'~bootstrap/dist/css/bootstrap.css';
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
:root {
  --main-bg-color: #000;
  --second-bg-color: #fff;
  --primary-color: #8265de;
  --text-color: #fff;
  --second-text-color: #000;
}
body {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color);
  background: var(--main-bg-color);
}
</style>
