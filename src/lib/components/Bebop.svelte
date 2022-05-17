<script>
  let audio;
  function playVideo(){
    audio.volume = 0.2;
    audio.paused ? audio.play() : audio.pause();
  }
</script>

<section class="l-hero animation">
  <!-- https://www.youtube.com/watch?v=0hfOyOBHIq4 -->
    <div class="texts">
      <h2><span>W</span><span>E</span><span>B</span><span>D</span><span>E</span><span>V</span><span>E</span><span>L</span><span>O</span><span>P</span><span>E</span><span>R</span></h2>
  
        <!-- add a lot of web develpment keywords -->
  
      <p class="history">
        <span>Once upon a time, </span>
        <span>In Geneva in 1991... </span>
        <span>I an institute open to all physicists from all over the world, </span>
        <span>day after day, </span>
        <span>a contractor at CERN named "Tim Berners-Lee", </span>
        <span>was thinking of a way for researchers to use and share documents. </span>
        <span>He created the "Hypertext Markup Language (HTML)", </span>
        <span>it was the birth of the World Wide Web. </span>
      </p>
      <p class="today">
        <span>in 2022 in the world wide web... </span>
        <span>The web developers, </span>
        <span>who where fighting with the evil browser "IE11", </span>
        <span>will now code freely without fear of compatibility issues. </span>
        <span>They can create sites and APIs by using the latest specifications. </span>
        <span>But the WORK, which becomes a new genre itself, is now called... </span>
        <span>FULL-STACK DEVELOPER</span>
      </p>
      <p class="specs">
        <span>Languages : HTML / CSS / JAVASCRIPT</span>
        <span>Browsers : CHROME / FIREFOX / SAFARI</span>
        <span>Operating systems : WINDOWS / LINUX / MAC OS / ANDROID / IOS</span>
        <span>Rendering : BLINK / WEBKIT / GECKO / V8 / JAVASCRIPTCORE / SPIDERMONKEY</span>
      </p>
    </div>
  
  
    <audio src="/assets/sounds/tank.mp3" bind:this={audio}></audio>
    <button on:click={playVideo} class="audio-btn">⏯</button>
    <!-- <button on:click={playVideo()} onclick="playVideo()" class="audio-btn">⏯</button> -->
    <!-- <button onclick="document.getElementById('player').volume += 0.1">Vol +</button>  -->
    <!-- <button onclick="document.getElementById('player').volume -= 0.1">Vol -</button>  -->

    <iframe style="width:100vw; height:500px" src="https://www.youtube.com/embed/0hfOyOBHIq4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  </section>
  
  
  <!-- <section class="l-hero">

  </section> -->


<style>
@import url('https://fonts.googleapis.com/css2?family=Zilla+Slab+Highlight:wght@400;700');
@import url('https://fonts.googleapis.com/css2?family=Rubik+Glitch');
@import url('https://fonts.googleapis.com/css2?family=Frijole');

.l-hero.animation{
  background:#333;
  font-size:20px;
  position:relative;
  overflow:hidden;
}
.l-hero.animation::before{
  content: 'WEB \A DEVELOPER';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-32%) translateY(-50%) rotate(45deg);
  font-size: 372px;
  color: #666;
  filter: blur(31px);
  white-space: pre-wrap;
  text-align:center;
  z-index:0;
}
.l-hero.animation::after{
  content: 'WEB \A DEVELOPER';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-66%) translateY(-50%) rotate(-45deg);
  font-size: 372px;
  color: #666;
  filter: blur(31px);
  white-space: pre-wrap;
  text-align:center;
  z-index:0;
}

@font-face {
  font-family: 'Special Elite';
  src: url('/assets/fonts/Special_Elite/specialElite-regular.woff2') format('woff2');
}

.l-hero.animation iframe,
.l-hero.animation .audio-btn {
  position:relative;
  z-index:1;
}
.l-hero.animation .texts h2 {
  font-size:50px;
  text-align:center;
}
.l-hero.animation .texts p {
  font-family: 'Special Elite', cursive;
  /* font-family: 'Zilla Slab Highlight', cursive; */
  /* font-family: 'Rubik Glitch', cursive; */
  /* font-family: 'Frijole', cursive; */
  font-weight:700;
  line-height:1.8;
  filter: blur(0.7px);
  text-shadow: 0px 0px 2px #fff;
  display:block;
  margin:15px 0;
}
.audio-btn{
  color:white;
  font-size:50px;
}
.specs span{
  display:block;
}
.l-hero.animation .texts h2 span{
  color: black;
  background: white;
  filter: blur(0.8px);
  display: inline-flex;
  line-height: 0.8;
  padding: 1px 5px 7px 5px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  margin: 1px;
  text-shadow: 0px 0px 3px #000;
  /* box-shadow: inset 0px 0px 8px -3px black; */
  font-weight: 700;
}
</style>
