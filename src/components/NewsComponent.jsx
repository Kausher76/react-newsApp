import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import PropTypes from 'prop-types';

export default class NewsComponent extends Component {
  static defaultProptypes = {
    country:'in',
    pageSize:8,
    category: "all"
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize:PropTypes.number,
    category: PropTypes.string
  };
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      loading: false,
      
    };
  }
  
  async componentDidMount() {
    let url =`https://inshortsapi.vercel.app/news?category=${this.props.category}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      article: parseData.data,
      loading:false
    });
    
  }

  render() {
    

    let { mode } = this.props;
    
    let myStyle = {};
    if (mode === "dark") {
      myStyle = {
        backgroundColor: "#292a2d",
        color: "white",
        with:"100vw",
       
      };
    } else {
      myStyle = {
        backgroundColor: "white",
        color: "black",
        with:"100vw",
     
      };
    }

    return (
      <>
        <div  style={myStyle} className="myContainer">
          <h2
            className={`text-center p-3 text-${
              mode === "dark" ? "light" : "dark"
            }`}
          >
            News Top Headlines
          </h2>
{/*           {this.state.loading && <Loader/> } */}
          {this.state.loading && <div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div> }
          <div className="row">
            { (!this.state.loading) && this.state.article.map((element) => (
              <div
                className="col-md-3 my-2 d-flex justify-content-center"
                key={element.url}
              >
                <NewsItem
                  title={element.title ? element.title.slice(0, 75) : ""}
                  description={
                    element.content ? element.content.slice(0, 100) : ""
                  }
                  author ={element.author} publishedAt = {element.date} time = {element.time}
                  imageUrl={element.imageUrl}
                  newsUrl={element.readMoreUrl}
                  mode={mode}
                />
              </div>
            ))}
          </div>
          
        </div>
      </>
    );
  }
}
