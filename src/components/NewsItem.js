import React from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


// export class NewsItem extends Component {
    const NewsItem = (props) => {
    let {title, description, imageUrl, newsUrl, date, source} = props;  //this.props;
    return (
      <div style={{ position: "relative" }} className="my-3">
        <Card>
          {/* <Badge badgeContent={source} color="error" /> */}
          <CardMedia
            component="img"
            height="180"
            image={
              imageUrl
                ? imageUrl
                : "https://static.toiimg.com/thumb/msid-47529300,width-1070, height-580,imgsize-110164,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
            }
            alt="news"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {title}...
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {description}...
            </Typography>
            <Typography variant="body2" color="textSecondary" style={{ marginTop: '15px' }}>
              <small>{new Date(date).toGMTString()}</small>
            </Typography>
            <Button
              variant="contained"
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              style={{ marginTop: '12px' }}
            >
              Read More
            </Button>
          </CardContent>
        </Card>
      </div>
    );
}

export default NewsItem