<script>
  import { fade } from "svelte/transition";
  import SideContent from "./SideContent.svelte";

  export let debug;
  export let articleHeight;
  export let indexInView;
  export let d;
  export let i;

  let even = i % 2 == 0;
</script>

<style>
  /* article.debug {
    border: none;
    border-top: solid;
    border-bottom: solid;
  } */

  article:last-of-type {
    margin-bottom: 50vh;
  }

  img {
    width: calc((700px / 2) - 40px);
    height: auto;
  }

  p {
    margin: 0;
    color: var(--gry-1);
    font-size: 2rem;
    line-height: 3rem;
    transition: all 0.3s ease-in 0.3s;
  }

  .date {
    padding: 1rem 0;
    color: var(--ylw);
  }

  .source-container {
    position: relative;
    padding: 1rem;
    background-color: var(--gry-4);
  }

  .source {
    position: relative;
    display: none;
  }

  .item-change {
    opacity: 0.2;
  }

  @media (max-width: 600px) {
    img {
      width: 100%;
    }

    .item-change {
      opacity: 0.1;
    }

    #item-0 h2,
    #item-2 h2,
    #item-4 h2,
    #item-6 h2 {
      margin-right: 150%;
    }

    #item-1 h2,
    #item-3 h2,
    #item-5 h2,
    #item-7 h2 {
      margin-left: 50%;
    }

    .source {
      display: none;
    }
  }
</style>

<SideContent {i} {indexInView} source={d.source} date={d.date} y={d.y} />
<article
  class={`item ${(debug = true ? 'debug' : '')}`}
  id={`item-${i}`}
  style={`min-height: ${articleHeight}px; max-height: ${articleHeight};`}>
  <div class="item-change" style={indexInView == i && 'opacity: 1'}>
    <img src={d.img} alt="" />
    <div
      style={`${indexInView != i ? 'color: var(--gry-1);' : ''} transform: translate(${indexInView == i && even ? '150%' : indexInView == i && !even ? '-150%' : '0'}, ${indexInView == i ? '-40' : '0'}px)`} />
    <p style={`transform: translate(0, ${indexInView == i ? '1' : '-1'}rem)`}>
      {d.t}
    </p>
  </div>

</article>
