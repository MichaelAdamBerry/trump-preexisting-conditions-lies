<script>
  import { onMount } from "svelte";
  let replace = false;
  onMount(() => {
    let mislead = document.getElementById("initial");
    let lie = document.getElementById("replacemet");

    window.setTimeout(() => {
      mislead.style = "animation: flyout 0.3s ease-in-out 0s forwards;";
    }, 2000);
  });
</script>

<style>
  h1 {
    font-size: 50px;
    font-family: var(--lg-fnt);
    text-align: center;
    line-height: 60px;
  }

  p,
  h1 {
    max-width: 700px;
    color: var(--gry-1);
  }

  p {
    font-size: 2rem;
    font-family: var(--reg-fnt);
  }

  div.heading {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin: auto;
  }

  #replacement {
    display: none;
  }

  .sendOut {
    animation: flyout 0.3s ease-in-out 3s forwards;
  }

  @keyframes flyout {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(0, -1000px);
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 40px;
      line-height: 50px;
    }
  }
</style>

<div class="heading item">
  <h1>
    Correcting Trump's
    <span class="ylw ">Lies</span>
    on Protecting Pre-existing Conditions
  </h1>
  <div>
    <p>
      On January 13th, President Trump claimed in a tweet, “I was the person who
      saved Pre-Existing Conditions in your Healthcare, you have it now, while
      at the same time winning the fight to rid you of the expensive, unfair and
      very unpopular Individual Mandate.”. Here is a
      <span class="ylw">
        breif history highlighting the times he did the opposite.
      </span>
    </p>
  </div>
</div>
