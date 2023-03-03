
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  constructor(){
    super()
    this.state ={
      search : ""
    }
  }
  getData(e){
    // console.log(e.target.value)
    this.setState({
      search : e.target.value
    })
  }
  postData(e){
    e.preventDefault()
    this.props.changeSearch(this.state.search)
    this.setState({
      search :''
    })
  }
 
  render() {
    return (
     <>
     <nav className="navbar navbar-expand-lg background ">
    <div className="container-fluid ">
    <Link className="navbar-brand text-light" to="all/" onClick={()=>this.props.changeSearch('')}>News App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="./all" onClick={()=>this.props.changeSearch('')}>All</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="./politics" onClick={()=>this.props.changeSearch('')}>Politics</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="./sport" onClick={()=>this.props.changeSearch('')}>Sport</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="./education" onClick={()=>this.props.changeSearch('')}>Education</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-light" to="./" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Other
          </Link>
          <ul className="dropdown-menu ">
            <li><Link className="dropdown-item " to="./science" onClick={()=>this.props.changeSearch('')}>Science</Link></li>
            <li><hr className="dropdown-divider "/></li>
            <li><Link className="dropdown-item " to="./cricket" onClick={()=>this.props.changeSearch('')}>Cricket</Link></li>
            <li><hr className="dropdown-divider "/></li>
            <li><Link className="dropdown-item " to="./world news" onClick={()=>this.props.changeSearch('')}>World News</Link></li>
            <li><hr className="dropdown-divider "/></li>
            <li><Link className="dropdown-item " to="./india" onClick={()=>this.props.changeSearch('')}>India</Link></li>
            <li><hr className="dropdown-divider "/></li>
            <li><Link className="dropdown-item " to="./covid" onClick={()=>this.props.changeSearch('')}>Covid</Link></li>
            <li><hr className="dropdown-divider "/></li>
            <li><Link className="dropdown-item " to="./jokes" onClick={()=>this.props.changeSearch('')}>Jokes</Link></li>
            <li><hr className="dropdown-divider "/></li>
           
            <li><Link className="dropdown-item " to="./weather" onClick={()=>this.props.changeSearch('')}>weather</Link></li>
            <li><hr className="dropdown-divider "/></li>
            <li><Link className="dropdown-item " to="./business" onClick={()=>this.props.changeSearch('')}>Business</Link></li>
            <li><hr className="dropdown-divider "/></li>
            <li><Link className="dropdown-item " to="./stock market" onClick={()=>this.props.changeSearch('')}>Stoke Merket</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-light" to="./" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Language
          </Link>
          <ul className="dropdown-menu ">
            <li><button className="dropdown-item" onClick={()=>{this.props.languagechng('hi')}}>Hindi</button></li>
            <li><hr className="dropdown-divider "/></li>
            <li><button className="dropdown-item" onClick={()=>{this.props.languagechng('en')}}>English</button></li>
          </ul>
        </li>
        
        
      </ul>
      <form className="d-flex w-100" role="search" onClick={(e)=>{this.postData(e)}} >
        <input onChange={(e)=>{this.getData(e)}}className="form-control me-2" type="search"  placeholder="Search" aria-label="Search" name='search' value={this.state.search}/>
        <button className="btn btn-outline-success text-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
     </>
    )
  }
}
