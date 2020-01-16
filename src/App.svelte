<script>
  import { onMount, onDestroy } from "svelte";
  import inVew from "in-view";
  import { activeItem } from "./store";
  import { timelineData } from "./data.js";
  import Title from "./components/Title.svelte";
  import TimelineItem from "./components/TimelineItem.svelte";

  const data = timelineData();

  //sets top and bottom borders on for scroll debugging
  let debug = true;

  // sets vertical height of each timeline item
  let articleHeight = 500;

  // height of timeline container
  let sectionRef;

  //set initial item
  let indexInView = 0;

  $: bg = `background-image: url(${data[indexInView].img})`;

  onMount(() => {
    if (sectionRef) {
      console.log(data.length);
      sectionRef.addEventListener("scroll", function(e) {
        const visibleItems = Array.from(
          document.getElementsByClassName("item")
        ).map(inVew.is);
        // Array.indexOf() will give us the first one in list, so the current active item
        const topMostVisible = visibleItems.indexOf(true);
        if (debug === true) {
          console.log(`${topMostVisible} is section ref`);
        }

        if (
          topMostVisible < data.length &&
          topMostVisible >= 0 &&
          topMostVisible
        ) {
          indexInView = topMostVisible;
        }
      });
    }
  });

  const unsubscribeActiveItem = activeItem.subscribe(newActiveItem => {
    if (sectionRef) {
      itemRef.scrollTop = newActiveItem.offsetTop;
    }
  });

  onDestroy(unsubscribeActiveItem);

  // sets background image of card in view
  let scrollHeight;
</script>

<style>
  :root {
    --ylw: #f29727;
    --gry-1: #c6d5d2;
    --gry-2: #454b49;
    --gry-3: #2b2b2b;
    --gry-4: #232323;
    --lg-fnt: "B612", sans-serif;
    --reg-fnt: "Alegreya", serif;
  }

  .bg-container {
    position: relative;
  }

  main {
    position: relative;
    top: 0;
    left: 0;
    max-height: 100vh;
    width: 100%;
    overflow: scroll;

    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    transition: 0.5s;
  }

  main::before {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(20, 20, 20, 0.8);
    content: "";
  }

  .content {
    margin: auto;
    top: 0;
    left: 0;
  }

  .article-container {
    max-width: 700px;
    margin: auto;
  }
</style>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css?family=Alegreya:500|B612:400,700&display=swap"
    rel="stylesheet" />
</svelte:head>
<div class="bg-container">

  <main bind:this={sectionRef} style={bg}>
    <Title />
    <section class="content">
      <div class="article-container">
        {#each data as d, i}
          <TimelineItem {debug} {d} {i} {articleHeight} {indexInView} />
          <!-- <article
            class={`item ${(debug = true ? 'debug' : '')}`}
            id={`item-${i}`}
            style={`min-height: ${articleHeight}px; max-height: ${articleHeight};`}>
            <div
              class="item-change"
              style={indexInView == i ? 'opacity: 1' : 'opacity: .4'}>
              <img src={d.img} alt="" />
              <h2
                style={`transform: translate(0, ${indexInView == i ? '-40' : '0'}px)`}
                class="ylw year">
                {d.y}
              </h2>
              <p>{d.t}</p>
            </div> 

          </article>-->
        {/each}
      </div>
    </section>
  </main>
</div>
