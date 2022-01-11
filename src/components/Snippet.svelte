<script>
  export let snippet;
</script>

{#if snippet == 'slider'}
<div class="slider-container">
  <input type="radio" id="slide1" name="slider" checked>
  <input type="radio" id="slide2" name="slider">
  <input type="radio" id="slide3" name="slider">
  <input type="radio" id="slide4" name="slider">

  <div class="slider-parent">
    <div class="slider">
      <div class="slide" style="background:teal;">（１）</div>
      <div class="slide" style="background:tomato;">（２）</div>
      <div class="slide" style="background:darkslategray;">（３）</div>
      <div class="slide" style="background:brown;">（４）</div>
    </div>

    <div class="controls">
      <label for="slide2" class="next slide-btn slide1"></label>

      <label for="slide1" class="prev slide-btn slide2"></label>
      <label for="slide3" class="next slide-btn slide2"></label>

      <label for="slide2" class="prev slide-btn slide3"></label>
      <label for="slide4" class="next slide-btn slide3"></label>

      <label for="slide3" class="prev slide-btn slide4"></label>
    </div>
  </div>

  <nav class="navigation">
    <label for="slide1">1</label>
    <label for="slide2">2</label>
    <label for="slide3">3</label>
    <label for="slide4">4</label>
  </nav>

</div>

<p>
  <a href="https://codepen.io/niconoclaste/pen/NWgvaOa" target="_blank" rel="noopener">
    <svg viewBox="0 0 100 100" width="18"><path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3L88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8L19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2L34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z"></path></svg> 
   see the codePen</a>
</p>
{/if}




<style global>
  .slider-container{
    position:relative;
    width:80%;
    margin:0 auto;
    overflow:hidden;
  }
  .slider-container > input[type="radio"]{
    display:none;
  }
  .slider{
    width:100%;
    list-style:none;
    display:flex;
    flex-wrap:nowrap;
    margin:0 auto;
    padding:0;
    height: 160px;
    overflow-x: hidden;
    overflow-y:auto;
    scroll-behavior: smooth;
  }
  .slide{
    display:flex;
    align-items:center;
    justify-content:center;
    min-width: 100%;
    color:white;
    font-size:3rem;
  }
  .slide-btn{
    display:flex;
    height:100%;
    position:absolute;
    top:0;
    width:40px;
    color:#fff;
    text-decoration:none;
    align-items:center;
    justify-content:center;
    font-size:1.4rem;
    cursor:pointer;
    background-repeat:no-repeat;
    background-position:center center;
    background-size:25px auto;
  }
  .slide-btn:hover{
    background-color:rgba(0, 0, 0, 0.5);
  }
  .next{
    right:0;
  background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 55.752 55.752' style='enable-background:new 0 0 55.752 55.752;' xml:space='preserve' fill='%23fff'%3E%3Cg%3E%3Cpath d='M43.006,23.916c-0.28-0.282-0.59-0.52-0.912-0.727L20.485,1.581c-2.109-2.107-5.527-2.108-7.637,0.001 c-2.109,2.108-2.109,5.527,0,7.637l18.611,18.609L12.754,46.535c-2.11,2.107-2.11,5.527,0,7.637c1.055,1.053,2.436,1.58,3.817,1.58 s2.765-0.527,3.817-1.582l21.706-21.703c0.322-0.207,0.631-0.444,0.912-0.727c1.08-1.08,1.598-2.498,1.574-3.912 C44.605,26.413,44.086,24.993,43.006,23.916z'/%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A");
  }
  .prev{
    left:0;
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 55.753 55.753' style='enable-background:new 0 0 55.753 55.753;' xml:space='preserve' fill='%23fff'%3E%3Cg%3E%3Cpath d='M12.745,23.915c0.283-0.282,0.59-0.52,0.913-0.727L35.266,1.581c2.108-2.107,5.528-2.108,7.637,0.001 c2.109,2.108,2.109,5.527,0,7.637L24.294,27.828l18.705,18.706c2.109,2.108,2.109,5.526,0,7.637 c-1.055,1.056-2.438,1.582-3.818,1.582s-2.764-0.526-3.818-1.582L13.658,32.464c-0.323-0.207-0.632-0.445-0.913-0.727 c-1.078-1.078-1.598-2.498-1.572-3.911C11.147,26.413,11.667,24.994,12.745,23.915z'/%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A");
  }
  .navigation{
    width:100%;
    display:flex;
    gap:0 6px;
    align-items:center;
    justify-content:center;
    margin-top:10px;
  }
  .navigation label{
    text-decoration:none;
    display:flex;
    align-items:center;
    justify-content:center;
    width:25px;
    height:25px;
    border:solid 1px rgba(0, 0, 0, 0.3);
    border-radius:100vw;
    line-height:1;
    color:rgba(0, 0, 0, 0.3);
    background:white;
    font-size:1rem;
    cursor:pointer;
    /* default not current slide */
  }

  .slider-parent{
    position:relative;
  }
  .slide{
    transition:transform 0.6s;
  }
  #slide2:checked ~ .slider-parent .slide{
    transform:translateX(-100%);
  }
  #slide3:checked ~ .slider-parent .slide{
    transform:translateX(-200%);
  }
  #slide4:checked ~ .slider-parent .slide{
    transform:translateX(-300%);
  }
  #slide1:checked ~ .navigation [for="slide1"],
  #slide2:checked ~ .navigation [for="slide2"],
  #slide3:checked ~ .navigation [for="slide3"],
  #slide4:checked ~ .navigation [for="slide4"]{
    background:black;
    color:white;
  }
  #slide1:checked ~ .slider-parent .slide-btn:not(.slide1),
  #slide2:checked ~ .slider-parent .slide-btn:not(.slide2),
  #slide3:checked ~ .slider-parent .slide-btn:not(.slide3),
  #slide4:checked ~ .slider-parent .slide-btn:not(.slide4){
    display:none;
  }
  p{
    display:block;
    text-align:center;
    padding-top:30px;
  }
  p a{
    display:inline-flex;
    text-decoration:none;
    align-items:center;
    justify-content:center;
    line-height:22px;
    color:black;
  }
  p a svg{
    margin-right:10px;
    width:22px;
    height:22px;
    min-width:22px;
    transform: translateY(3px);
  }

</style>

