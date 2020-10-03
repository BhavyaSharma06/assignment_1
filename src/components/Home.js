import React, { Component } from 'react'
import Product from './Product'

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container ">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className=" typeWriterAnim">Welcome, This is Assignment-1...</h2><br/>
                    </div>                    
                </div> 
                </div>             
                <Product />                
            </React.Fragment>
            
        )
    }
}

export default Home
