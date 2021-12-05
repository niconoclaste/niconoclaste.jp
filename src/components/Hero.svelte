<section class="hero">
  <h1><span>NicoNoClaste</span><span>ウェブデベロッパー<br>WEB DEVELOPER</span></h1>
</section>

<style>
.hero{
  width:100%;
  height:100vh;
  background-image:url(/img/hero.webp);
  /* background-image:url(/img/hero.jpg); */
  background-image:url(/img/fullwidth.webp);
  background-position:center center;
  background-repeat:no-repeat;
  background-size:cover;
  background-attachment: fixed;
  position:relative;
}
.hero h1{
  font-weight: 900;
  color: #0875cd;
  font-size: 10.2vw;
  line-height: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding:2vw;
  text-shadow: 0 0 3px;
}
.hero h1 span{
  mix-blend-mode: color-burn;
  color:#009688;
  opacity:0;
  -webkit-animation: fadeIn 1.2s ease-out 0.4s 1 normal forwards running;
  animation: fadeIn 1.2s ease-out 0.4s 1 normal forwards running;
}
.hero h1 span:first-of-type{
  color: #2196f3;
  mix-blend-mode: multiply;
  font-size: 5vw;
}
@-webkit-keyframes fadeIn {
    from { opacity: 0; }
      to { opacity: 1; }
}
@keyframes fadeIn {
    from { opacity: 0; }
      to { opacity: 1; }
}
</style>