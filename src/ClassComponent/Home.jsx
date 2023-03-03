import React, { Component } from 'react'
import NewsItem from './NewsItem';
import InfiniteScroll from "react-infinite-scroll-component";


export default class Home extends Component {
  constructor() {
    super()
    this.state = {     //initialization of state or variable
      articles: [],
      totalResults: 0,
      page:1
      }
  }
  async getAPIData() {     // function for call Api
    var response = ''
    if (this.props.search)                                                                                                                       //apiKey                                                
      response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&page=1&pageSize=18&language=${this.props.language}&apiKey=20e92710aa15493fbd04d92a58505b84`)
    else
      response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&page=1&pageSize=18&language=${this.props.language}&apiKey=20e92710aa15493fbd04d92a58505b84`)
     
      var data = await response.json() //convert into plane java script
    
      this.setState({   // udtate/store the state or data
      articles: data.articles,
      totalResults: data.totalResults,
      
    })
  }
  fetchMoreData= async () =>{   //infinite scroll
    this.setState({ page: this.state.page + 1 })
    var response = ""
    if (this.props.search)
      response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&page=${this.state.page}&pageSize=20&language=${this.props.language}&apiKey=20e92710aa15493fbd04d92a58505b84`)
    else
      response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&page=${this.state.page}&pageSize=20&language=${this.props.language}&apiKey=20e92710aa15493fbd04d92a58505b84`)
    var result = await response.json()
    this.setState({ articles: this.state.articles.concat(result.articles) })
  }
  componentDidMount() {  
    this.getAPIData()
    // console.log(this.state.page)
  }

  componentDidUpdate(oldprops) {
    if (this.props !== oldprops) {
      this.getAPIData()
      // console.log(this.state.page)
    }
  }
 

  render() {
    return (
      <>
        <div className="container-fluid">

        <InfiniteScroll    //infinite scroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length < this.state.totalResults}
            loader={
              <div className='my-5 text-center'>
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            }
          >
            <div className="row">


              {<h1 className='heading text-light text-center mt-3 py-1 background '> {(this.props.search) ? this.props.search : this.props.q} News Section </h1>}
              {
                this.state.articles.map((item, index) => {

                  return <NewsItem   //sending props to newsItem
                    key={index}
                    pic={item.urlToImage}
                    title={item.title}
                    description={item.description}
                    url={item.url}
                    date={item.publishedAt}
                    source={item.source.name}

                  />
                })
              }

            </div>
          </InfiniteScroll>
        </div>
      </>
    )
  }
}

