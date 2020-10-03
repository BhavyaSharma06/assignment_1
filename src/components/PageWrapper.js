import React, { Component } from 'react'

export class PageWrapper extends Component {
    render() {
        return (
            <div>  
                <nav className="navbar navbar-expand-lg navbar-dark justify-content-end">
                <ul  className="nav ">
                    <li  className="nav-item">
                        <a  className="nav-link active" href="/">Home</a>
                    </li>                                       
                </ul>
                </nav>                                  
                {this.props.children}       
            </div>
            
        )
    }
}

export default PageWrapper
