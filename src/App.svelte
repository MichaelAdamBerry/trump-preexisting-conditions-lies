<script>
  import { onMount, onDestroy } from "svelte";
  import inVew from "in-view";
  import { activeItem } from "./store";

  let windowHeight;
  let h;
  let articleHeight = 500;
  let scrolling = false;
  let scrollTop;

  let sectionRef;
  let indexInView = 0;

  onMount(() => {
    console.log(h);

    // Define the ref
    // let listRef;

    if (sectionRef) {
      sectionRef.addEventListener("scroll", function(e) {
        const visibleItems = Array.from(
          document.getElementsByClassName("item")
        ).map(inVew.is);

        console.log(visibleItems);
        // Array.indexOf() will give us the first one in list, so the current active item
        const topMostVisible = visibleItems.indexOf(true);
        console.log(`${topMostVisible} is section ref`);
        indexInView = topMostVisible;
        console.log(sectionRef);
      });
    }
  });

  const unsubscribeActiveItem = activeItem.subscribe(newActiveItem => {
    if (sectionRef) {
      itemRef.scrollTop = newActiveItem.offsetTop;
    }
  });

  onDestroy(unsubscribeActiveItem);

  let debug = true;

  let link =
    "https://www.cbpp.org/sabotage-watch-tracking-efforts-to-undermine-the-aca";

  const data = [
    {
      y: "2016",
      t: `On campaign trail, Trump routinely said his "first legislative priority after election was the "repeal and replace" the Affordable Care Act.", writes Margot Sanger-Katz in The New York Times.`,
      img:
        "https://res.cloudinary.com/dscjol9s7/image/upload/e_grayscale/v1579118100/trump-preexisting-conditions/trump-healthcare_wide-9aa47816aa065eeba83c4025f3242128e26703e8_b59vbn.jpg"
    },
    {
      y: "2017",
      t:
        "In May of 2017, The Republican controlled House of Representatives passed the American Health Care Act which would have repealed much of the ACA including provisions protecting for Americans with prior health conditions",
      img:
        "https://res.cloudinary.com/dscjol9s7/image/upload/e_grayscale/v1579118553/trump-preexisting-conditions/trump-ryan-mcconnell-sm-upiphotostwo533058_rbdjn0.jpg"
    },
    {
      y: "2017",
      t: `In July, The Senate introduced their version of "repeal and replace" , the Health Care Freedom Act. Trump urged the Senate to pass the bill. Ultimately as public outcry increased over potential lack of coverage,  the legislation was defeated with John McCain and Susan Collins to crossing party lines.`,
      img:
        "https://res.cloudinary.com/dscjol9s7/image/upload/e_grayscale/v1579128260/trump-preexisting-conditions/McCain-for-video-clip-superJumbo_ywd0gw.jpg"
    },
    {
      y: "2017",
      t: `In October, the president announced the first of several Executive Orders making regulatory changes intended to “sabotage” of Obamacare. `,
      img:
        "https://res.cloudinary.com/dscjol9s7/image/upload/e_grayscale/v1579136226/trump-preexisting-conditions/2019_0930-trump-white-house-1200x800_qwpote.jpg"
    },
    {
      y: "2017",
      t: `President Trump signs into law major tax legislation that repeals the ACA’s individual mandate beginning in 2019. (The individual mandate requires most people to either have coverage or pay a penalty.) Without the mandate, fewer healthy people will sign up for coverage, increasing average health care costs in the individual market and causing premiums to rise by 10 percent, according to Congressional Budget Office (CBO)`,
      img: `https://res.cloudinary.com/dscjol9s7/image/upload/e_grayscale/v1579134080/trump-preexisting-conditions/ap-17354756279099_vkgepa.jpg`
    },
    {
      y: "2018",
      t: `In March, President Trump's Justice Department, under leadship from Attorney General Bill Barr, argues that the entirety of the ACA, not only provisions for patients with preexisting conditions, should be repealed after Republicans eliminated individual mandate as a part of the Trump Tax Cuts`,
      img:
        "https://res.cloudinary.com/dscjol9s7/image/upload/e_grayscale/v1579132688/trump-preexisting-conditions/191001-Hauser-Moran-Bill-Barr-tease_fvlkvj_m5asml.jpg"
    },
    {
      y: "2019",
      t: `In December, a federal district court judge sided with a partisan group of state attorneys general and struck down the entire ACA in an opinion that even conservative legal experts called “embarrassingly bad.” The DOJ had already declined to defend the constitutionality of the law and urged the district court to end the ACA’s protections for people with pre-existing conditions but stopped short of seeking to nullify the entire law.`,
      img:
        "https://res.cloudinary.com/dscjol9s7/image/upload/e_grayscale/v1579136012/trump-preexisting-conditions/GettyImages_478453014.0_lokxm9.jpg"
    },
    {
      y: "2020",
      t: `In January, the Justice Department filed the latest brief in the lawsuit just last week. If the Trump administration wins the case, all of Obamacare would be declared unconstitutional and eliminated.`,
      img:
        "https://res.cloudinary.com/dscjol9s7/image/upload/e_grayscale/v1579135828/trump-preexisting-conditions/18-donald-trump-week.w710.h473.2x_ozed6k.jpg"
    }
  ];

  let coda = [
    {
      y: "",
      t: `The president has promised on numerous occasions to release a new health plan, which he presumably would champion should he win in court. But he has never released such a plan or even discussed its broad contours.`,
      img: ""
    },
    {
      y: "",
      t: `The Democratic party has been consistent and united in defense of Obamacare’s pre-existing conditions protections. Preserving them was a centerpiece of 2018 midterm campaigns.`,
      img: ""
    }
  ];

  let dataLength = data.length;

  $: bg = `background-image: url(${data[indexInView].img})`;
  let scrollHeight;

  function isInView(i) {
    let totalHeight = windowHeight;
    console.log(totalHeight);
  }

  function setCurrentIndex(scrollHt) {
    let cleanedHt = scrollHt - windowHeight * 1.5;

    let indx = Math.floor(cleanedHt / (dataLength + 1));

    console.log(indx);
  }
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

  .bg-img::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(20, 20, 20, 0.8);
  }

  .bg-img {
    position: fixed;
    width: 100vw;
    height: 100vh;
  }

  .ylw {
    color: var(--ylw);
  }

  h1 {
    margin: auto;
    text-align: center;
    max-width: 700px;
  }

  p {
    margin: 0;
  }

  h2 {
    margin: 0;
  }

  h2,
  h1 {
    font-size: 66px;

    font-family: var(--lg-fnt);
  }

  main {
    position: relative;
    top: 0;
    left: 0;
    max-height: 100vh;
    width: 100%;
    overflow: scroll;
    color: var(--wht);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }

  main::before {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(99, 99, 99, 0.8);
    content: "";
  }

  .main-heading {
    min-height: 100vh;
    display: flex;
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

  .item {
    width: calc(50% - 40px);
    display: flex;
    font-size: 15px;
    line-height: 27px;
    z-index: 10;
    opacity: 0.8;
  }

  .item:nth-child(even) {
    margin-left: calc(50% + 40px);
  }

  .content img {
    width: calc((700px / 2) - 40px);
    height: auto;
  }

  article.debug {
    border: none;
    border-top: solid;
    border-bottom: solid;
  }
  p {
    color: var(--gry-1);
  }
  article:last-of-type {
    margin-bottom: 50vh;
  }
</style>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css?family=Alegreya:500|B612:400,700&display=swap"
    rel="stylesheet" />
</svelte:head>
<div class="bg-container">

  <main bind:this={sectionRef} style={bg}>

    <div class="main-heading item" bind:clientHeight={windowHeight}>
      <h1>
        Correcting Trump's
        <span class="ylw">Lies</span>
        on Preexisting Conditions
      </h1>
    </div>
    <section class="content">
      <div class="article-container">
        {#each data as d, i}
          <article
            class={`item ${(debug = true ? 'debug' : '')}`}
            id={`item-${i}`}
            style={`min-height: ${articleHeight}px; max-height: ${articleHeight};`}>
            <div style={indexInView == i ? 'opacity: 1' : 'opacity: .4'}>
              <img src={d.img} alt="" />
              <h2
                style={`transform: translate(0, ${indexInView == i ? '-40' : '0'}px)`}
                class="ylw year">
                {d.y}
              </h2>
              <p>{d.t}</p>
            </div>

          </article>
        {/each}
      </div>
    </section>
  </main>
</div>
