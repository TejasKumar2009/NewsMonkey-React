import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

import imageNotFound from "../images/image_not_found.png";
import Spinner from "./Spinner";
import NewsItem from "./NewsItem";

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [totalResults, setTotalResults] = useState()
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  const updateNews = async () => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    props.setProgress(20);
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
    props.setProgress(80);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  };

  useEffect( () => {
    updateNews();
    // eslint-disable-next-line
  }, [])

  const handlePrevClick = async () => {
    setPage(page - 1)
    updateNews();
  };

  const handleNextClick = async () => {
    setPage(page + 1)
    updateNews();
  };

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  };

    return (
      <>
        <h1
          style={{ marginBottom: "35", marginTop: "80px" }}
          className="text-center text-capitalize"
        >
          NewsMonkey - {props.category}
        </h1>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
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
        <footer className="container-fluid bg-dark py-3 text-light mt-5">
          <p className="mb-0 text-center">
            Copyright © 2021-2022 NewsMonkey Made By Tejas
          </p>
        </footer>
      </>
    );
  }

News.defaultProps = {
  country: "in",
  pageSize: 8,
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
