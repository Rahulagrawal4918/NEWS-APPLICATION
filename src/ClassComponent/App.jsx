import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      language: 'hi',
      search: ""
    }
  }

  changeLaguage = (data) => {  
    this.setState({ language: data })
    // console.log(this.state.language)
  }
 
  changeSearch = (data) => {          
    this.setState({ search: data })

  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar languagechng={this.changeLaguage} changeSearch={this.changeSearch} />
          <Routes>
            <Route path='/' element={<Home q='all' language={this.state.language} search={this.state.search} />} />
            <Route path='/all' element={<Home q='all' language={this.state.language} search={this.state.search} />} />
            <Route path='/politics' element={<Home q='politics' language={this.state.language} search={this.state.search} />} />
            <Route path='/cricket' element={<Home q='cricket' language={this.state.language} search={this.state.search} />} />
            <Route path='/sport' element={<Home q='sport' language={this.state.language} search={this.state.search} />} />
            <Route path='/education' element={<Home q='education' language={this.state.language} search={this.state.search} />} />
            <Route path='/jokes' element={<Home q='jokes' language={this.state.language} search={this.state.search} />} />
            <Route path='/world' element={<Home q='world' language={this.state.language} search={this.state.search} />} />
            <Route path='/india' element={<Home q='india' language={this.state.language} search={this.state.search} />} />
            <Route path='/science' element={<Home q='science' language={this.state.language} search={this.state.search} />} />
            <Route path='/covid' element={<Home q='covid' language={this.state.language} search={this.state.search} />} />
            <Route path='/weather' element={<Home q='weather' language={this.state.language} search={this.state.search} />} />
            <Route path='/business' element={<Home q='business' language={this.state.language} search={this.state.search} />} />
            <Route path='/stack market' element={<Home q='stack market' language={this.state.language} search={this.state.search} />} />
          </Routes>
        </BrowserRouter>


        <Footer />
      </>
    )
  }
}
