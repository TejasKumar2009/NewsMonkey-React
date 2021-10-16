import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useLocation, useHistory } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import imageNotFound from "../images/image_not_found.png";
import Spinner from "./Spinner";
import NewsItem from "./NewsItem";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const location = useLocation();
  const history = useHistory();

  const updateNews = async () => {
    props.setProgress(0);
    let url;
    if (!props.searchNews.searchNews) {
      url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    } else {
      // setTotalResults(100)
      url = `https://newsapi.org/v2/everything?q=${props.searchNews.searchNews}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    }
    setLoading(true);
    props.setProgress(20);
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
    props.setProgress(80);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    if (
      (location.pathname === "/top-headlines/general") |
      (location.pathname === "/top-headlines/business") |
      (location.pathname === "/top-headlines/entertainment") |
      (location.pathname === "/top-headlines/health") |
      (location.pathname === "/top-headlines/science") |
      (location.pathname === "/top-headlines/sports") |
      (location.pathname === "/top-headlines/technology")
    ) {
      props.searchNews.setSearchNews(null);
    }
    // eslint-disable-next-line
    updateNews();
  }, [props.searchNews.searchNews]);

  const fetchMoreData = async () => {
    let url;
    if (!props.searchNews.searchNews) {
      url = `https://newsapi.org/v2/top-headlines?country=${
        props.country
      }&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${
        props.pageSize
      }`;
      setPage(page + 1);
    } else {
      // setTotalResults(100)
      url = `https://newsapi.org/v2/everything?q=${
        props.searchNews.searchNews
      }&apiKey=${props.apiKey}&page=${
        page + 1 > Math.ceil(totalResults / props.pageSize) ? null : page + 1
      }&pageSize=${props.pageSize}`;
      if (page + 1 > Math.ceil(totalResults / props.pageSize)) {
      } else {
        setPage(page + 1);
      }
    }
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    {
      props.searchNews.searchNews
        ? setTotalResults(100)
        : setTotalResults(parsedData.totalResults);
    }
    setLoading(false);
    // if (articles.length+props.pageSize === totalResults) {
    //   console.log("khatam");
    //   props.searchNews.setSearchNews(null)
    // }
  };

  return (
    <>
      <h1
        style={{ marginBottom: "35", marginTop: "80px" }}
        className="text-center text-capitalize"
      >
        {props.searchNews.searchNews
          ? `NewsMonkey - Search Results for ${props.searchNews.searchNews}`
          : `NewsMonkey - Top ${props.category} Headlines`}
      </h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        // hasMore={articles.length !== totalResults}
        loader={loading && <Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4 my-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : "Title Not Found!"}
                    description={
                      element.description
                        ? element.description
                        : "Description Not Found!"
                    }
                    imageUrl={
                      element.urlToImage ? element.urlToImage : imageNotFound
                    }
                    newsUrl={element.url}
                    date={element.publishedAt}
                    author={element.author}
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
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
