import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, date, source} = this.props;
    return (
        <div className="my-3">
        <div className="card">
          <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}> {source}
                        </span>
            <img src={imageUrl? imageUrl : "https://static.toiimg.com/thumb/msid-47529300,width-1070,height-580,imgsize-110164,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"} className="card-img-top" alt="news"/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-body-secondary">{new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark">Read More</a>
            </div>
        </div>
        </div>
    )
  }
}

export default NewsItem