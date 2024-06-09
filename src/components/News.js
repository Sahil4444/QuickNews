import React, { Component } from "react";
import Newsitems from "./Newsitems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    category: "business",
    country: "in",
    pageSize: 13,
  };

  static propTypes = {
    category: PropTypes.string,
    country: PropTypes.string,
    pageSize: PropTypes.number,
  };
  articles = [
    // {
    //   source: { id: null, name: "CNBC" },
    //   author: "Brian Evans, Alex Harring",
    //   title:
    //     "Stock futures rise as Nvidia shares gain, investors look for rate cuts: Live updates - CNBC",
    //   description:
    //     "Wednesday's ADP report showed private hiring slowed in May, adding to investor hopes that a weakening labor market could spur rate cuts from the central bank.",
    //   url: "https://www.cnbc.com/2024/06/04/stock-market-today-live-updates.html",
    //   urlToImage:
    //     "https://image.cnbcfm.com/api/v1/image/107423570-1717447836443-gettyimages-2155930760-ms2_7068_1itnxlqc.jpeg?v=1717536356&w=1920&h=1080",
    //   publishedAt: "2024-06-05T12:42:00Z",
    //   content:
    //     "Stock futures gained as AI-darling Nvidia rose to a new record and weak private labor market data gave investors hope the Federal Reserve might move to lower interest rates later this year.\r\nDow Jone… [+2061 chars]",
    // },
    // {
    //   source: { id: "associated-press", name: "Associated Press" },
    //   author: "COLLEEN BARRY",
    //   title:
    //     "Amanda Knox reconvicted of slander in Italy for accusing innocent man in roommate's 2007 murder - The Associated Press",
    //   description:
    //     "An Italian court has reconvicted Amanda Knox of slander, quashing her hope of removing a legal stain against her that has persisted long after her exoneration in the brutal 2007 murder of her British roommate. The court found that Knox had wrongly accused an …",
    //   url: "https://apnews.com/article/italy-knox-slander-kercher-killing-bceb926ace28263036a10bf2dd77bc6e",
    //   urlToImage:
    //     "https://dims.apnews.com/dims4/default/cba857e/2147483647/strip/true/crop/8640x4860+0+450/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F9c%2F12%2Fcde1f4168c9eca5151094cb39a2a%2F92d0bb62095444339c841077ebbdc427",
    //   publishedAt: "2024-06-05T12:27:00Z",
    //   content:
    //     "FLORENCE, Italy (AP) An Italian court reconvicted Amanda Knox of slander Wednesday, quashing her hope of removing a legal stain against her that has persisted long after her exoneration in the brutal… [+5004 chars]",
    // },
    // {
    //   source: { id: "the-washington-post", name: "The Washington Post" },
    //   author: "Lauren Weber",
    //   title:
    //     "Conservative attacks on birth control could threaten access - The Washington Post",
    //   description:
    //     "Far-right conservatives are sowing misinformation that inaccurately characterizes IUDs, emergency contraception, even birth control pills as causing abortions.",
    //   url: "https://www.washingtonpost.com/health/2024/06/05/birth-control-access-abortion-ban/",
    //   urlToImage:
    //     "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/3N72DH2NUNFBJNXX6JV46BTPIM_size-normalized.jpg&w=1440",
    //   publishedAt: "2024-06-05T12:00:00Z",
    //   content:
    //     "Republican lawmakers in Missouri blocked a bill to widen access to birth-control pills by falsely claiming they induce abortions. An antiabortion group in Louisiana killed legislation to enshrine a r… [+12771 chars]",
    // },
    // {
    //   source: { id: "reuters", name: "Reuters" },
    //   author: "Reuters",
    //   title: "Gunman fires shots at US Embassy in Lebanon, army says - Reuters",
    //   description: null,
    //   url: "https://www.reuters.com/world/middle-east/gunman-fires-shots-us-embassy-beirut-lebanese-army-says-2024-06-05/",
    //   urlToImage: null,
    //   publishedAt: "2024-06-05T11:39:00Z",
    //   content: null,
    // },
    // {
    //   source: { id: "google-news", name: "Google News" },
    //   author: "CBS News",
    //   title:
    //     "Hubble Space Telescope faces setback, but should keep working for years, NASA says - CBS News",
    //   description: null,
    //   url: "https://news.google.com/rss/articles/CBMicWh0dHBzOi8vd3d3LmNic25ld3MuY29tL25ld3MvaHViYmxlLXNwYWNlLXRlbGVzY29wZS1zaG91bGQtd29yay1mb3IteWVhcnMtZGVzcGl0ZS1zZXRiYWNrLW5hc2EtZ3lyb3Njb3BlLWZhaWx1cmUv0gF1aHR0cHM6Ly93d3cuY2JzbmV3cy5jb20vYW1wL25ld3MvaHViYmxlLXNwYWNlLXRlbGVzY29wZS1zaG91bGQtd29yay1mb3IteWVhcnMtZGVzcGl0ZS1zZXRiYWNrLW5hc2EtZ3lyb3Njb3BlLWZhaWx1cmUv?oc=5",
    //   urlToImage: null,
    //   publishedAt: "2024-06-05T11:32:53Z",
    //   content: null,
    // },
    // {
    //   source: { id: "associated-press", name: "Associated Press" },
    //   author: "CLAUDIA LAUER, RANDALL CHASE, COLLEEN LONG, MICHAEL KUNZELMAN",
    //   title:
    //     "Hunter Biden trial: Ex-wife is expected to testify - The Associated Press",
    //   description:
    //     "First lady Jill Biden is attending Hunter Biden’s federal gun trial in Delaware for the third day, ahead of a trip to France. Hunter Biden’s ex-wife is expected to be among the witnesses Wednesday. Kathleen Buhle was married to President Joe Biden’s son for r…",
    //   url: "https://apnews.com/article/hunter-biden-trial-family-testimony-gun-charges-17e671d16f7b06b04b4e3b538f911d07",
    //   urlToImage:
    //     "https://dims.apnews.com/dims4/default/be1c03f/2147483647/strip/true/crop/3642x2049+0+190/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F99%2F1d%2F06bd11cd0e2c9e2f6f6197abf812%2F48b3a09819514a768e2cf78afd476ae1",
    //   publishedAt: "2024-06-05T10:59:00Z",
    //   content:
    //     "WILMINGTON, Del. (AP) Federal prosecutors in Hunter Bidens gun trial have spent hours showing jurors evidence of his drug problem, seeking to reveal through his own words and writing the depth of his… [+6176 chars]",
    // },
    // {
    //   source: { id: "reuters", name: "Reuters" },
    //   author: "Foo Yun Chee",
    //   title:
    //     "No more chicken Big Macs - EU court rules against McDonald's in trademark case - Reuters",
    //   description:
    //     "U.S. fast-food chain McDonald's does not have the right to use the term \"Big Mac\" for poultry products after it had not used it for them for five consecutive years, Europe's second top court said on Wednesday, in a partial win for Irish rival Supermac's in a …",
    //   url: "https://www.reuters.com/business/retail-consumer/no-more-chicken-big-macs-eu-court-rules-against-mcdonalds-trademark-case-2024-06-05/",
    //   urlToImage:
    //     "https://www.reuters.com/resizer/v2/GNBP4FLQWRKU7P66FK25TOWTRU.jpg?auth=b81bce3e16c59f8de52858374d8573f09dff53b28a0480bb618d0c1b5c5cfaeb&height=1005&width=1920&quality=80&smart=true",
    //   publishedAt: "2024-06-05T10:46:00Z",
    //   content: null,
    // },
    // {
    //   source: { id: null, name: "[Removed]" },
    //   author: null,
    //   title: "[Removed]",
    //   description: "[Removed]",
    //   url: "https://removed.com",
    //   urlToImage: null,
    //   publishedAt: "1970-01-01T00:00:00Z",
    //   content: "[Removed]",
    // },
    // {
    //   source: { id: null, name: "Yahoo Entertainment" },
    //   author: null,
    //   title:
    //     "Angel Reese ejected during Chicago Sky's loss to New York Liberty - Yahoo Sports",
    //   description: null,
    //   url: "https://sports.yahoo.com/angel-reese-ejected-during-chicago-091054941.html",
    //   urlToImage: null,
    //   publishedAt: "2024-06-05T09:10:54Z",
    //   content:
    //     "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]",
    // },
    // {
    //   source: { id: "ign", name: "IGN" },
    //   author: "Wesley Yin-Poole",
    //   title:
    //     "Destiny 2 Developer Bungie ‘Truly Sorry’ for The Final Shape Launch Issues - IGN",
    //   description:
    //     "Destiny 2 developer Bungie has issued an apology to disgruntled fans who struggled to play The Final Shape expansion at launch.",
    //   url: "https://www.ign.com/articles/destiny-2-developer-bungie-truly-sorry-for-the-final-shape-launch-issues",
    //   urlToImage:
    //     "https://assets-prd.ignimgs.com/2024/06/05/d2-1717576140873.jpg?width=1280",
    //   publishedAt: "2024-06-05T08:30:50Z",
    //   content:
    //     "Destiny 2 developer Bungie has issued an apology to disgruntled fans who struggled to play The Final Shape expansion at launch.\r\nThe Final Shape launched on June 4 and Destiny 2 soon ran into signifi… [+2968 chars]",
    // },
    // {
    //   source: { id: null, name: "BBC News" },
    //   author: null,
    //   title:
    //     "General election 2024: Sunak and Starmer clash over tax in first debate - BBC.com",
    //   description:
    //     'The Conservative and Labour leaders got scrappy at times, forcing the host of the ITV event to intervene and urge the pair to "lower your voices".',
    //   url: "https://www.bbc.com/news/articles/c800xw8zy9po",
    //   urlToImage:
    //     "https://ichef.bbci.co.uk/news/1024/branded_news/548b/live/724c0dd0-22fa-11ef-a13a-0b8c563da930.jpg",
    //   publishedAt: "2024-06-05T08:22:44Z",
    //   content:
    //     "Jennifer McKiernan,Michael Sheils McNamee\r\nWatch: Sunak and Starmer go head to head in TV debate\r\nRishi Sunak and Sir Keir Starmer have faced off in the first TV debate of the general election, with … [+5400 chars]",
    // },
    // {
    //   source: { id: null, name: "CNBC" },
    //   author: "Sheila Chiang",
    //   title:
    //     "Intel wants to build 'everybody's AI chips,' CEO says, as company plays catch-up with rivals - CNBC",
    //   description:
    //     "Intel wants to regain leadership in the chip industry after losing market share opportunities to rivals, its CEO said.",
    //   url: "https://www.cnbc.com/2024/06/05/we-want-to-build-everybodys-ai-chips-intel-ceo-talks-of-regaining-market-share.html",
    //   urlToImage:
    //     "https://image.cnbcfm.com/api/v1/image/107424239-1717553354354-gettyimages-2155358471-TAIWAN_COMPUTEX.jpeg?v=1717553382&w=1920&h=1080",
    //   publishedAt: "2024-06-05T07:14:36Z",
    //   content:
    //     "Intel wants to regain its position as the world's leading chipmaker, CEO Pat Gelsinger said, after being overtaken by rivals TSMC and Samsung in recent years.\r\n\"We want to build everybody's chips, ev… [+2782 chars]",
    // },
    // {
    //   source: { id: "cnn", name: "CNN" },
    //   author: "Ashley Strickland",
    //   title:
    //     "Watch the historic launch of Boeing’s first crewed Starliner mission - CNN",
    //   description:
    //     "Boeing’s Starliner mission will make its next attempt at launching two astronauts on a maiden voyage to the International Space Station at 10:52 a.m. ET Wednesday.",
    //   url: "https://www.cnn.com/2024/06/05/science/nasa-boeing-starliner-launch-scn/index.html",
    //   urlToImage:
    //     "https://media.cnn.com/api/v1/images/stellar/prod/240531224252-boeing-starliner-053124.jpg?c=16x9&q=w_800,c_fill",
    //   publishedAt: "2024-06-05T06:00:00Z",
    //   content:
    //     "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nBoeings Starliner mission will make a third attempt at… [+6370 chars]",
    // },
    // {
    //   source: { id: "axios", name: "Axios" },
    //   author: "Axios",
    //   title:
    //     "Scorching heat wave across U.S. Southwest set to smash records - Axios",
    //   description: null,
    //   url: "https://www.axios.com/2024/06/05/southwest-us-heatwave-california-vegas-arizona",
    //   urlToImage: null,
    //   publishedAt: "2024-06-05T05:30:45Z",
    //   content: null,
    // },
    // {
    //   source: { id: null, name: "Heat.com" },
    //   author: "Steve Aschburner",
    //   title:
    //     "Celtics-Mavericks: 10 biggest questions surrounding 2024 NBA Finals - NBA.com",
    //   description:
    //     "Breaking down the biggest factors in the upcoming clash between Dallas and Boston for the 2023-24 NBA championship.",
    //   url: "https://www.nba.com/news/celtics-mavericks-biggest-questions-nba-finals",
    //   urlToImage: null,
    //   publishedAt: "2024-06-05T04:18:45Z",
    //   content:
    //     "The performances of superstars Luka Doncic and Jayson Tatum will go a long way toward deciding the 2024 NBA Finals.\r\n Download the NBA App \r\nBOSTON Questions about the 2024 NBA Finals have been comin… [+8706 chars]",
    // },
    // {
    //   source: { id: "espn", name: "ESPN" },
    //   author: "Jeff Kassouf",
    //   title:
    //     "Lily Yohannes, 16, nets first goal in USWNT win over South Korea - ESPN",
    //   description:
    //     "Lily Yohannes, 16, becomes the third-youngest goal scorer for the United States women's national team after netting the third goal in the 3-0 win over South Korea on Tuesday.",
    //   url: "https://www.espn.com/soccer/story/_/id/40281398/lily-yohannes-16-nets-first-goal-uswnt-win-south-korea",
    //   urlToImage:
    //     "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0605%2Fr1341876_1296x729_16%2D9.jpg",
    //   publishedAt: "2024-06-05T04:16:00Z",
    //   content:
    //     "ST. PAUL, Minn. -- Sixteen-year-old Lily Yohannes scored 10 minutes into her international debut on Tuesday at Allianz Field in the United States women's national team's 3-0 victory over South Korea … [+3437 chars]",
    // },
    // {
    //   source: { id: null, name: "WBAL TV Baltimore" },
    //   author: null,
    //   title:
    //     "How internet addiction may affect your teen's brain, according to a new study - WBAL TV Baltimore",
    //   description:
    //     "A new study found that for teens diagnosed with internet addiction, signaling between brain regions important for controlling attention, working memory, and more was disrupted.",
    //   url: "https://www.wbaltv.com/article/study-how-internet-addiction-may-affect-teen-brain/60994689",
    //   urlToImage:
    //     "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/cnn-l19jb21wb25lbnrzl2ltywdll2luc3rhbmnlcy9jbhgwbxdmzxewmdawm2i2amxscdn5nnzy-l19jb21wb25lbnrzl2fydgljbguvaw5zdgfuy2vzl2nsedbtctr3nzawmwpiana2mmhkmwixbwk-jpg-665fe481a5bb0.jpg?crop=1.00xw:0.846xh;0,0&resize=1200:*",
    //   publishedAt: "2024-06-05T04:09:00Z",
    //   content:
    //     "Teens who spend lots of time on social media have complained of feeling like they can't pay attention to more important things like homework or time with loved ones.\r\nA new study has possibly capture… [+7373 chars]",
    // },
    // {
    //   source: { id: "the-globe-and-mail", name: "The Globe And Mail" },
    //   author: "Sally Brompton",
    //   title: "Your daily horoscope: June 5, 2024 - The Globe and Mail",
    //   description: "Your daily horoscope for today, Wednesday, June 5 , 2024",
    //   url: "https://www.theglobeandmail.com/life/horoscopes/article-your-daily-horoscope-june-5-2024/",
    //   urlToImage:
    //     "https://www.theglobeandmail.com/resizer/v2/HYXNE4AKHBH5HGRO2WCH3NJJWE.png?auth=620541d38f3add780c25368763db536817a53535fd6c576c0541c08ce55c8b7d&width=1200&height=801&quality=80",
    //   publishedAt: "2024-06-05T04:00:00Z",
    //   content:
    //     "Open this photo in gallery:Gemini.iStockPhoto / Getty Images\r\nHOROSCOPES IF TODAY IS YOUR BIRTHDAY\r\nThe message of your birthday chart is that you must follow your heart wherever it leads you. Ignore… [+3524 chars]",
    // },
    // {
    //   source: { id: "ars-technica", name: "Ars Technica" },
    //   author: "Stephen Clark",
    //   title:
    //     "We know Starship can fly—now it's time to see if it can come back to Earth - Ars Technica",
    //   description:
    //     "The FAA has approved a license for SpaceX's fourth Starship launch, set for Thursday.",
    //   url: "https://arstechnica.com/space/2024/06/we-know-starship-can-fly-now-its-time-to-see-if-it-can-come-back-to-earth/",
    //   urlToImage:
    //     "https://cdn.arstechnica.net/wp-content/uploads/2024/06/starship1-760x380.jpeg",
    //   publishedAt: "2024-06-05T03:56:59Z",
    //   content:
    //     "Enlarge/ The rocket for SpaceX's fourth full-scale Starship test flight awaits liftoff from Starbase, the company's private launch base in South Texas.\r\n32\r\nThe Federal Aviation Administration approv… [+12240 chars]",
    // },
    // {
    //   source: { id: "abc-news", name: "ABC News" },
    //   author: "Will McDuffie, Gabriella Abdul-Hakim, Fritz Farrow",
    //   title:
    //     "Praise, but some trepidation, among Democrats after Biden's border actions - ABC News",
    //   description: "Biden is facing opposition from within his own party.",
    //   url: "https://abcnews.go.com/Politics/praise-trepidation-democrats-after-bidens-border-actions/story?id=110824065",
    //   urlToImage:
    //     "https://i.abcnewsfe.com/a/46df264a-2720-4877-816a-3e35f04b099d/biden-ap-jt-240604_1717533616395_hpMain_16x9.jpg?w=1600",
    //   publishedAt: "2024-06-05T03:56:50Z",
    //   content:
    //     "President Joe Biden's executive action restricting asylum claims at the southern border -- a dramatic move to address one of voters' top concerns five months before the election -- drew a range of re… [+3871 chars]",
    // },
  ];
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async updateNews() {
    window.scrollTo(0, 0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8009310299714a119963af98ebb423e5&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  goUp = () => {
    window.scrollTo(0, 0);
  };

  fetchMoreData = async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    this.setState({
      page: this.state.page + 1,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8009310299714a119963af98ebb423e5&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <div className="container my-4 d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center">Top Headlines</h1>
        {/* {this.state.loading && <Spinner />} */}
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults+this.props.pageSize }
          loader={<Spinner />}
        >
          {console.log(this.state.articles.length)}
          {console.log(this.state.totalResults)}
          <div className="container">
            <div className="row my-3">
              {this.state.articles.map((element) => {
                return (
                  <div
                    className="col-md-3 my-2"
                    key={element.url}
                    style={{
                      display: element.title === "[Removed]" ? "none" : "",
                    }}
                  >
                    <Newsitems
                      title={
                        element.title
                          ? element.title.slice(0, 20)
                          : "Title not provided here!"
                      }
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : "No description provided here! You can click on Read more to read the news"
                      }
                      urlImage={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://cdn.pixabay.com/photo/2022/11/04/09/27/breaking-news-7569433_640.jpg"
                      }
                      newsUrl={element.url}
                      author={element.author ? element.author : "Unknown"}
                      date={element.publishedAt ? element.publishedAt : "-"}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        <button
          type="button"
          className="btn btn-dark rounded-circle align-self-end"
          onClick={this.goUp}
        >
          &#11105;
        </button>
      </div>
    );
  }
}

export default News;
