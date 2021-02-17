<template>
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
        <div class="carousel-caption d-none d-md-block">
            <h5>JSmart</h5>
        </div>
      <img class="d-block w-100" src="@/assets/slide/jsmart.png" alt="First slide">
        <div class="carousel-caption d-none d-md-block">
            <p>Aplicación de Google Chrome para convertir el navegador en un SmartTV</p>
        </div>
    </div>
    <div class="carousel-item">
        <div class="carousel-caption d-none d-md-block">
            <h5>JSmart</h5>
        </div>
      <img class="d-block w-100" src="@/assets/slide/jsmart.png" alt="First slide">
        <div class="carousel-caption d-none d-md-block">
            <p>Aplicación de Google Chrome para convertir el navegador en un SmartTV</p>
        </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</template>

<script>
export default {
  name: 'Porfolio'

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel-item {
    background: rgba(0, 0, 0, 0.5);
}
.carousel-item img {
    filter: blur(3px);
    mix-blend-mode: darken;
    height: 100vh;
}
.carousel-item h5 {
    font-size: 16vw;
    text-align: left;
    letter-spacing: -17px;
    font-weight: 900;
    margin-bottom: 6vh;
}
.carousel-caption p {
    text-align: left;
    width: 30vw;
    font-size: 1.5vw;
    line-height: 1.7vw;
    font-weight: 200;
}
.carousel-control-prev, .carousel-control-next {
  display: none;
}
</style>
