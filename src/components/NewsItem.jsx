import React, { Component } from "react";

export default  class NewsItem extends Component {
  render() {
    const { mode } = this.props;
    let myStyle = {};
    if (mode === "dark") {
      myStyle = {
        width: '18rem',
        backgroundColor: "#1f1f1f",
        color: "white",
      };
    } else {
      myStyle = {
        width: '18rem',
        backgroundColor: "white",
        color: "black",
      };
    }
    let {title, description, imageUrl, newsUrl, author, publishedAt, time} = this.props;
   
    return (
      <div >


        <div  className={` card p-2 `}  style={myStyle}>
          <img  src={imageUrl?imageUrl: "https://static.tnn.in/thumb/msid-110054950,thumbsize-96246,width-1280,height-720,resizemode-75/110054950.jpg"}  className="card-img-top p-2" alt=".." />
          <div  className="card-body">
            <h5  className={`card-title ${mode === 'dark' ? 'text-light' : 'text-dark'} `}>{title}</h5>
            <p  className={`card-text ${mode === 'dark' ? 'text-light' : 'text-dark'} `}>
              {description}
            </p>
            <p className="card-text"><small className="text-muted">Published By {author?author:"Unkwon"} on  {publishedAt ? publishedAt:"NA"} At {time?time:"NA"}</small></p>
            <a href={newsUrl} target="_blank"  className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
