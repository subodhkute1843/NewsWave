import React, { Component } from "react";
import { NewsItem } from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>NewsWave - Top Headlines</h2>
        <div className="row">
            <div className="col-md-4">
                <NewsItem title={"Title"} description={"Some quick example text to build on the card title and make up the bulk of the card's content."}/>
            </div>
            <div className="col-md-4">
                <NewsItem title={"Title"} description={"Some quick example text to build on the card title and make up the bulk of the card's content."}/>
            </div>
            <div className="col-md-4">
                <NewsItem title={"Title"} description={"Some quick example text to build on the card title and make up the bulk of the card's content."}/>
            </div>
        </div>
        <div className="row my-3">
            <div className="col-md-4">
                <NewsItem title={"Title"} description={"Some quick example text to build on the card title and make up the bulk of the card's content."}/>
            </div>
            <div className="col-md-4">
                <NewsItem title={"Title"} description={"Some quick example text to build on the card title and make up the bulk of the card's content."}/>
            </div>
            <div className="col-md-4">
                <NewsItem title={"Title"} description={"Some quick example text to build on the card title and make up the bulk of the card's content."}/>
            </div>
        </div>
      </div>
    );
  }
}

export default News
