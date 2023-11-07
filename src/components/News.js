import React, { Component } from "react";
import { NewsItem } from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 9,
    category: "science",
  };

  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `NewsWave - ${this.capitalizeFirstLetter(
      this.props.category
    )}`;
  }

  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=421a7592708047a8864395d0877aef52&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    //we removed duplicate code
    this.updateNews();
  }

  //we will now remove Next and Prev button and will add infinite scroll
  // handlePrevClick = async () => {
  //   //removed duplicate code
  //   this.setState({page: this.state.page - 1})
  //   this.updateNews();
  // };

  // handleNextClick = async () => {
  //   // removed duplicate code
  // this.setState({page: this.state.page + 1})
  // this.updateNews();
  // };

  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=421a7592708047a8864395d0877aef52&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    });
  };

  render() {
    return (
      <>
        <h2 className="text-center" style={{ margin: "35px 0px" }}>
          NewsWave - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={
            this.state.page <=
            Math.ceil(this.state.totalResults / this.props.pagesize)
          }
          loader={<Spinner />}
        >
          <div className="container my-3">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-info"
            onClick={this.handlePrevClick}
          >
            &larr; Prev
          </button>
          <button
            disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)}
            type="button"
            className="btn btn-info"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }
}

export default News;
