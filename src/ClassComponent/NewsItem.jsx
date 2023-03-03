import React, { Component } from 'react'

export default class
    extends Component {
    render() {
        return (
            <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mt-3' >
                <div className="card">
                    <img src={this.props.pic}  className="card-img-top" height= '200px' alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" >{this.props.title.slice(0,50)}... </h5>
                        <h6 className='card-source'>{this.props.source} - {`${new Date(this.props.date).getDate()}/${new Date(this.props.date).getMonth()}/${new Date(this.props.date).getFullYear()}`}</h6>
                        <hr />
                        <p className="card-text" >{ this.props.description && this.props.description.slice(0,120)}.....</p>
                        <a href={this.props.url} target='_blank' className="btn btn-sm bg-primary w-100 " >Read More </a>
                    </div>
                </div>
            </div>
        )
    }
}
