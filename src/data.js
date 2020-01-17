const dataArray = [
  {
    y: "2016",
    date: "",
    t: `On campaign trail, Trump routinely said his "first legislative priority after election was the "repeal and replace" the Affordable Care Act.",`,
    img:
      "https://res.cloudinary.com/dscjol9s7/image/upload/e_grayscale/v1579118100/trump-preexisting-conditions/trump-healthcare_wide-9aa47816aa065eeba83c4025f3242128e26703e8_b59vbn.jpg",
    source: {
      a: "Henry C. Jackson",
      t: "6 promises Trump has made about health care",
      org: "Politico",
      url:
        "https://www.politico.com/story/2017/03/trump-obamacare-promises-236021"
    }
  },
  {
    y: "2017",
    date: "May 4th",

    t:
      "Republican controlled House of Representatives passes the American Health Care Act before the Office of Budget and Management (OMB) had time officially even scored the bill and it's likely impacts. The legislation is so unpopular with the public that the Republican leaders in the Senate decide to start from scratch instead of moving forward with the House bill",

    img:
      "https://res.cloudinary.com/dscjol9s7/image/upload/e_grayscale/v1579118553/trump-preexisting-conditions/trump-ryan-mcconnell-sm-upiphotostwo533058_rbdjn0.jpg",
    source: {
      a: "Vann R. Newkirk II",
      t: "What's in the Health-Care Bill the House Just Passed?",
      org: "The Atlantic",
      url:
        "https://www.theatlantic.com/politics/archive/2017/05/what-we-know-about-the-american-health-care-act/525426/"
    }
  },
  {
    y: "2017",
    date: "July 29th",
    t: `In July, The Senate introduces their version of "repeal and replace", the Health Care Freedom Act. Trump urges the Senate to pass the bill, which ultimately fails as public outcry increased over loss of benefits. John McCain and Susan Collins cross party lines to provide the deciding votes.`,
    img:
      "https://res.cloudinary.com/dscjol9s7/image/upload/e_grayscale/v1579128260/trump-preexisting-conditions/McCain-for-video-clip-superJumbo_ywd0gw.jpg",
    source: {
      a: " Dylan Scott and Sarah Kliff ",
      t: "Why Obamacare repeal failed",
      org: "Vox",
      url:
        "https://www.vox.com/policy-and-politics/2017/7/31/16055960/why-obamacare-repeal-failed"
    }
  },
  {
    y: "2017",
    date: "October, 12th",
    t: `Having been unsuccessful in repealing Obamacare in the Senate, Trump begins a series of Executive Orders making regulatory changes intended to “sabotage” of Obamacare.`,
    img:
      "https://res.cloudinary.com/dscjol9s7/image/upload/e_grayscale/v1579136226/trump-preexisting-conditions/2019_0930-trump-white-house-1200x800_qwpote.jpg",
    source: {
      a: null,
      t: "Sabotage Watch: Tracking Efforts to Undermine the ACA",
      org: "The Center on Budget and Policy Priorities",
      url:
        "https://www.cbpp.org/sabotage-watch-tracking-efforts-to-undermine-the-aca"
    }
  },
  {
    y: "2017",
    date: "December, 22nd",
    t: `President Trump signs into law major tax legislation that repeals the ACA’s individual mandate beginning in 2019. (The individual mandate requires most people to either have coverage or pay a penalty.) Without the mandate, fewer healthy people will sign up for coverage, increasing average health care costs in the individual market and causing premiums to rise by 10 percent, according to Congressional Budget Office (CBO)`,
    img: `https://res.cloudinary.com/dscjol9s7/image/upload/e_grayscale/v1579134080/trump-preexisting-conditions/ap-17354756279099_vkgepa.jpg`,
    source: {
      a: "Selena Simmons-Duffin",
      t: "Trump Is Trying Hard To Thwart Obamacare. How's That Going?",
      org: "NPR",
      url:
        "https://www.npr.org/sections/health-shots/2019/10/14/768731628/trump-is-trying-hard-to-thwart-obamacare-hows-that-going"
    }
  },
  {
    y: "2019",
    date: "March 25th",
    t: `In March, President Trump's Justice Department, under leadship from Attorney General Bill Barr, argues that the entirety of the ACA, not only provisions for patients with preexisting conditions, should be repealed after Republicans eliminated individual mandate as a part of the Trump Tax Cuts`,
    img:
      "https://res.cloudinary.com/dscjol9s7/image/upload/e_grayscale/v1579132688/trump-preexisting-conditions/191001-Hauser-Moran-Bill-Barr-tease_fvlkvj_m5asml.jpg",
    source: {
      a: "Steve Benen",
      t: "Trump’s war against the ACA reaches a new, striking level",
      org: "MSNBC",
      url:
        "http://www.msnbc.com/rachel-maddow-show/trumps-war-against-the-aca-reaches-new-striking-level"
    }
  },
  {
    y: "2019",
    date: "December 18th",
    t: `In December, a federal district court judge sided with a partisan group of state attorneys general and struck down the entire ACA in an opinion that even conservative legal experts called “embarrassingly bad.” The DOJ had already declined to defend the constitutionality of the law and urged the district court to end the ACA’s protections for people with pre-existing conditions but stopped short of seeking to nullify the entire law.`,
    img:
      "https://res.cloudinary.com/dscjol9s7/image/upload/e_grayscale/v1579136012/trump-preexisting-conditions/GettyImages_478453014.0_lokxm9.jpg",
    source: {
      a: "Nicholas Bagley",
      t: "A Case That Should Have Been Laughed Out of Court May Kill Obamacare",
      org: "The Atlantic",
      url:
        "https://www.theatlantic.com/ideas/archive/2019/12/affordable-care-acts-unconstitutional-flaw/603871/"
    }
  },
  {
    y: "2020",
    date: "",
    t: `In January, the Justice Department filed the latest brief in the lawsuit just last week. If the Trump administration wins the case, all of Obamacare would be declared unconstitutional and eliminated.`,
    img:
      "https://res.cloudinary.com/dscjol9s7/image/upload/e_grayscale/v1579135828/trump-preexisting-conditions/18-donald-trump-week.w710.h473.2x_ozed6k.jpg",
    source: {
      org: "The New York Times",
      t:
        "To the Contrary, Trump Has Tried to Weaken Protections for Pre-existing Conditions",
      url:
        "https://www.nytimes.com/2020/01/13/upshot/trump-tweets-health-care.html",
      a: "Margot Sanger-Katz"
    }
  }
];

const codaArray = [
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

export function timelineData() {
  return dataArray;
}

export function codaData() {
  return codaData;
}
