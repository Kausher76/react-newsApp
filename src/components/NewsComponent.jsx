import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import PropTypes from 'prop-types';

export default class NewsComponent extends Component {
  static defaultProptypes = {
    country:'in',
    pageSize:8,
    category: "general"
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
      page: 1,
      pageSize: this.props.pageSize,
    };
  }
  async componentDidMount() {
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=34c8e72e7f474a16976452e45cb09a83&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      article: parseData.articles,
      totalResults: parseData.totalResults,
      loading:false
    });
  }
  prevClickHandler = async () => {
    console.log("prev");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=34c8e72e7f474a16976452e45cb09a83&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ page: this.state.page - 1, article: parseData.articles, loading:false });
  };

  nextClickHandler = async () => {
   
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=34c8e72e7f474a16976452e45cb09a83&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({ page: this.state.page + 1, article: parseData.articles, loading:false });
    
  };

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
            className={`text-center my-1.5 text-${
              mode === "dark" ? "light" : "dark"
            }`}
          >
            News Top Headlines
          </h2>
          {this.state.loading && <Loader/>}
          <div className="row">
            { (!this.state.loading) && this.state.article.map((element) => (
              <div
                className="col-md-3 my-2 d-flex justify-content-center"
                key={element.url}
              >
                <NewsItem
                  title={element.title ? element.title.slice(0, 75) : ""}
                  description={
                    element.description ? element.description.slice(0, 100) : ""
                  }
                  author ={element.author} publishedAt = {element.publishedAt} 
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  mode={mode}
                />
              </div>
            ))}
          </div>
          <div className="container">
            <div className="d-flex justify-content-between">
              <button
                disabled={this.state.page <= 1}
                type="button"
                className="btn btn-primary"
                onClick={this.prevClickHandler}
              >
                &larr; Previous
              </button>
              <button
              disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
                type="button"
                className="btn btn-primary"
                onClick={this.nextClickHandler}
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
