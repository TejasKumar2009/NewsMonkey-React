import React, { Component } from "react";
import PropTypes from "prop-types";

import imageNotFound from "../image_not_found.png";
import Spinner from "./Spinner";
import NewsItem from "./NewsItem";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  updateNews = async () => {
    this.props.setProgress(0)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=YOUR_API_KEY&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    this.props.setProgress(20)
    let data = await fetch(url);
    this.props.setProgress(40)
    let parsedData = await data.json();
    this.props.setProgress(80)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100)
  };

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    this.updateNews();
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h1 style={{margin: "35px 0px"}} className="text-center text-capitalize">
            NewsMonkey - {this.props.category}
          </h1>
          {this.state.loading && <Spinner />}

          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
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
          <hr />
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              onClick={this.handlePrevClick}
              className="btn btn-dark"
            >
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              onClick={this.handleNextClick}
              className="btn btn-dark"
            >
              Next &rarr;
            </button>
          </div>
        </div>
        <footer
          className="container-fluid bg-dark py-3 text-light mt-5"
        >
          <p className="mb-0 text-center">Copyright © 2021-2022 NewsMonkey Made By Tejas</p>
        </footer>
      </>
    );
  }
}

export default News;
