<script>
  export let debug;
  export let articleHeight;
  export let indexInView;
  export let d;
  export let i;
</script>

<style>
  article.debug {
    border: none;
    border-top: solid;
    border-bottom: solid;
  }

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
  }

  h2 {
    margin: 0;
    font-size: 50px;
    font-family: var(--lg-fnt);
    margin: 0;
    transition: transform 0.3s ease-in 0.3s;
  }
</style>

<article
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

</article>
