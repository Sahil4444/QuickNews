import React, { Component } from "react";

export class Newsitems extends Component {
  render() {
    let{title, description, newsUrl, urlImage, author, date} = this.props;
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div className="card" style={{width: '18rem'}}>
          <img src={urlImage} className="card-img-top" alt="..." style={{height: '12rem'}} />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text mb-2">{description}...</p>
            <p className="card-text mb-1"><small className="text-muted">By {author}</small></p>
            <p className="card-text mb-3"><small className="text-muted"> On {new Date(date).toUTCString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitems;
