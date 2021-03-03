<template>
<div class="slide-profile">
  <ol class="slide-indicators">
    <li data-slide="0" class="active"></li>
    <li data-slide="1"></li>
  </ol>

  <div class="slide-items">
    <div class="slide-item active">
        <div class="slide-title">
            <h5>JSmart</h5>
        </div>
        <img class="d-block w-100" src="@/assets/slide/jsmart.png">
        <div class="slide-desc">
            <p>Aplicación de Google Chrome para convertir el navegador en un SmartTV</p>
        </div>
    </div>
    <div class="slide-item">
        <div class="slide-title">
            <h5>JSmart</h5>
        </div>
        <img class="d-block w-100" src="@/assets/slide/jsmart.png">
        <div class="slide-desc">
            <p>Aplicación de Google Chrome para convertir el navegador en un SmartTV</p>
        </div>
    </div>
  </div>

</div>

</template>

<script>
export default {
  name: 'Porfolio'

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide-item {
    background: rgba(0, 0, 0, 0.5);
}
.slide-item img {
    filter: blur(3px);
    mix-blend-mode: darken;
    height: 100vh;
}
.slide-title h5 {
    font-size: 16vw;
    text-align: left;
    letter-spacing: -17px;
    font-weight: 900;
    margin-bottom: 6vh;
}
.slide-desc p {
    text-align: left;
    width: 30vw;
    font-size: 1.5vw;
    line-height: 1.7vw;
    font-weight: 200;
}
.slide-profile {position: relative;}

.slide-items {position: relative;width: 100%;overflow: hidden;}

.slide-indicators {position: absolute;right: 0;bottom: 0;left: 0;z-index: 2;display: flex;justify-content: center;padding: 0;margin-right: 15%;margin-bottom: 1rem;margin-left: 15%;list-style: none;}

.slide-title, .slide-desc {position: absolute;right: 15%;bottom: 1.25rem;left: 15%;padding-top: 1.25rem;padding-bottom: 1.25rem;color: #fff;text-align: center;}

.slide-item {
    position: relative;
    display: none;
    float: left;
    width: 100%;
    margin-right: -100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transition: transform 0.6s ease-in-out;
}

.slide-item.active {
    display: block;
}

</style>
