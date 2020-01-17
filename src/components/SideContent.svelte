<script>
  import { fly } from "svelte/transition";
  export let i;
  export let indexInView;
  export let source;
  export let date;
  export let y;

  let isEven = i % 2 == 0;
</script>

<style>
  .sideContent {
    position: relative;
  }

  .side {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  p,
  h3,
  h4,
  a {
    color: var(--gry-1);
    margin: 0.5rem 0;
  }

  a,
  h3 {
    font-size: 2.5rem;
  }

  a {
    font-style: italic;
    /* text-decoration: none; */
  }

  h3,
  h4,
  p {
    font-size: 2.2rem;
  }
  p {
    width: 90%;
    margin-left: margin-left;
    font-size: 2rem;
  }

  h2 {
    margin: 0;
    font-size: 6rem;
  }

  .isEven {
    transform: translate(0, 0);
  }

  .isOdd {
    transform: translate(130%, 0);
  }

  @media (max-width: 600px) {
    .source {
      display: none;
      opacity: 0;
    }

    h2 {
      transform: translate(2rem, 12rem);
    }
  }
</style>

{#if i == indexInView}
  <div
    class={`sideContent ${isEven ? 'isEven' : 'isOdd'}`}
    in:fly={{ y: 0, x: isEven ? 150 : -100 }}>
    <div class="side">
      <h2 class="ylw year">{y}</h2>
      {#if i == indexInView}
        <div style="display: block;" class="source">

          <p class="date ylw">{date}</p>

          <h3>
            <a href={source.url}>{source.t}</a>
          </h3>
          <h4>
            - {source.a} @
            <span>{source.org}</span>
          </h4>
        </div>
      {/if}
    </div>
  </div>
{/if}
