<template>
  <nav class="navbar navbar-expand-lg fixed-top">
     <div class="container-fluid">
        <a class="navbar-brand" href="#">Juan Almada</a>
        <div class="d-none d-sm-block slash">/</div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto ml-2">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#porfolio">portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">sobre mi</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">contacto</a>
            </li>
          </ul>
          <div class="d-flex social-media">
              <font-awesome-icon :icon="['fab', 'github']" />
              <font-awesome-icon :icon="['fab', 'linkedin-in']" />
              <font-awesome-icon :icon="['fab', 'twitter']" />
          </div>
        </div>
      </div>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav a {
  color: var(--text-color);
}
nav a:hover, nav a.active {
  color: var(--primary-color);
}
nav {
  font-weight: 900;
  letter-spacing: -1px;
}
.navbar-brand {
  font-size: 22px;
}
.social-media svg {
  cursor: pointer;
  width: 30px;
  height: 30px;
  margin: 0 5px;
  transition: color 0.15s ease-in-out;
}
.social-media svg:hover {
  color: var(--primary-color);
}
.slash {
  color: var(--primary-color);
  font-size: 22px;
}

</style>
