import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, date, author, source } = this.props;

    return (
      <>
        <div className="card" >
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "90%", zIndex: 1}}>{source}</span>
          <img
            src={imageUrl}
            className="card-img-top"
            alt="NewsImage not Found!"
          />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0, 54)}...</h5>
            <p className="card-text">{description.slice(0, 126)}...</p>
            <p className="card-text"><small className="text-muted">By <i>{author ? author : "Unknown"} at </i><b>{new Date(date).toGMTString()}</b></small></p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-dark btn-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
