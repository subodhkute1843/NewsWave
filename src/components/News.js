import React, { Component } from "react";
import { NewsItem } from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "CBS Sports",
      },
      author: "",
      title:
        "College Football Playoff Rankings: Ohio State, Georgia, Michigan, Florida State open 1-4 in top 25 poll - CBS Sports",
      description:
        "The first top 25 rankings of the 2023 season have arrived from the CFP Selection Committee",
      url: "https://www.cbssports.com/college-football/news/college-football-playoff-rankings-ohio-state-georgia-michigan-florida-state-open-1-4-in-top-25-poll/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2023/10/31/2a0541df-0d1e-4743-b44f-35e82766235e/thumbnail/1200x675/c61b6621c3a93a1e6f77063f6b78ded3/graphic-cfpr1.png",
      publishedAt: "2023-11-01T02:04:00Z",
      content:
        "The first edition of the College Football Playoff Rankings was released Tuesday night with undefeated Ohio State slotted at No. 1 in the four-team field. Off to a dominant start to the 2023 season wi… [+4566 chars]",
    },
    {
      source: {
        id: null,
        name: "Arizona Sports",
      },
      author: ", Arizona Sports",
      title:
        "Diamondbacks' Torey Lovullo frustrated after Game 3 calls - Arizona Sports",
      description:
        'Arizona Diamondbacks manager Torey Lovullo said he was "steaming" after multiple missed calls in Game 3 of the World Series.',
      url: "https://arizonasports.com/story/3537289/diamondbacks-manager-torey-lovullo-was-steaming-after-world-series-game-3-calls/",
      urlToImage:
        "http://arizonasports.com/wp-content/uploads/2023/10/08d7508e-a0d3-406a-9f7a-d4825ae4d4dd-e1697148877663.jpg",
      publishedAt: "2023-10-31T20:25:00Z",
      content:
        "On a 3-1 count in the bottom of the ninth inning, Arizona Diamondbacks catcher Gabriel Moreno took an outside pitch and began trotting to first base for his walk.\r\nAfter two steps down the baseline h… [+1929 chars]",
    },
    {
      source: { id: "politico", name: "Politico" },
      author: null,
      title:
        "Offshore wind company pulls out of New Jersey projects, a setback to Biden's green agenda - POLITICO",
      description:
        "“We are extremely disappointed,” head of energy company Orsted said.",
      url: "https://www.politico.com/news/2023/10/31/offshore-wind-new-jersey-orsted-00124661",
      urlToImage:
        "https://static.politico.com/39/c6/9267afd3475fa2056f706c0ed465/offshore-wind-new-jersey-49146.jpg",
      publishedAt: "2023-11-01T02:01:56Z",
      content:
        "For months, Orsted has been teasing financial problems for its two New Jersey projects, Ocean Wind 1 and Ocean Wind 2. Now both are being scrapped. David Hardy, the head of the companys American oper… [+6348 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: "Leika Kihara",
      title:
        "Asia's factories squeezed as China's nascent recovery teeters - Reuters.com",
      description:
        "Asia's manufacturers faced worsening pressure in October with factory activity in China slipping back into decline, clouding recovery prospects for the region's major exporters already squeezed by weaker global demand and higher prices.",
      url: "https://www.reuters.com/markets/global-economy-asias-factories-squeezed-chinas-nascent-recovery-teeters-2023-11-01/",
      urlToImage:
        "https://www.reuters.com/resizer/ApK2C-heb9jjNcEPvUPI01eIGEE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/CV6RF2AJ6ZLVPB74G6T4BRKHOM.jpg",
      publishedAt: "2023-11-01T06:15:35Z",
      content:
        "TOKYO, Nov 1 (Reuters) - Asia's manufacturers faced worsening pressure in October with factory activity in China slipping back into decline, clouding recovery prospects for the region's major exporte… [+2746 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsWave - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title.slice(0, 45)}
                  description={element.description.slice(0, 88)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
