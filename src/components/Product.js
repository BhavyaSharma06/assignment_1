import React, { Component } from 'react'
import ProductBlock from './ProductBlock'
import { connect } from 'react-redux'

class Product extends Component {
    render() {
        return (
            <section className="page-section" id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Our Products</h2><br/><br/>
                        </div>
                    </div>
                    <div className="row text-center">
                        {this.props.products.map((product, index) => {
                            return(
                                <ProductBlock {...product} key= {index} id={index} />
                            )
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        products: state.products
    }
}

export default connect(mapStateToProps)(Product)