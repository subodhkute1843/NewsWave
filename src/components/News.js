import React, { useEffect, useState } from "react";
import axios from 'axios';
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


  const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pagesize}`;
    // this.setState({ loading: true });
    setLoading(true)
    // let data = await fetch(url);
    // props.setProgress(30);
    // let parsedData = await data.json();
    try{
      let res = await axios.get(url);
      props.setProgress(30);
      let parsedData = res.data;
      props.setProgress(70);
      setArticles(parsedData.articles);
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      props.setProgress(100);
    }catch (error) {
      // Handle errors here
      console.error("API request failed:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    updateNews();
  }, [])

  const fetchMoreData = async () => {
    // this.setState({page: this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pagesize}`;
    setPage(page + 1)
    // let data = await fetch(url);
    // let parsedData = await data.json();
  
    let res = await axios.get(url)
                         .catch((error) => {console.error("API request failed:", error);});
    let parsedData = res.data;
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  
  };

  document.title = `NewsWave - ${capitalizeFirstLetter(props.category)}`;
  
  return (
    <>
      <h2 className="text-center" style={{ margin: "35px 0px", marginTop: '90px' }}>
        NewsWave - Top {capitalizeFirstLetter(props.category)}{" "}
        Headlines
      </h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={
          page <=
          Math.ceil(totalResults / props.pagesize)
        }
        loader={<Spinner />}
      >
        <div className="container my-3">
          <div className="row">
            {articles.map((element) => {
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
    </>
  );

}

News.defaultProps = {
  country: "in",
  pagesize: 9,
  category: "science",
};

News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
