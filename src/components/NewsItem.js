import React from 'react'

// export class NewsItem extends Component {
    const NewsItem = (props) => {
    let {title, description, imageUrl, newsUrl, date, source} = props;  //this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          right: '0'}}>
            <span className="badge rounded-pill bg-danger"> {source} </span>
          </div>
          <img
            src={ imageUrl? imageUrl: "https://static.toiimg.com/thumb/msid-47529300,width-1070, height-580,imgsize-110164,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
            }
            className="card-img-top"
            alt="news"
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem