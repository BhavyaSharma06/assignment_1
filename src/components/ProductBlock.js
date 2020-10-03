import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { getEditProduct } from '../Redux/Actions'

class ProductBlock extends Component {

    clickHandler(index){
        console.log('index',index)
       this.props.getEditItem(index);
       this.props.history.push('/edit')
    }

    render() {        
        return (           
            <div className="col-md-4">
                <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                    <i className="fas fa-mobile fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">{this.props.name}</h4>
                <p className="text-muted">Items Available: {this.props.availability}</p>
                <p className="text-muted">Weight of the item: {this.props.weight}</p>
                {this.props.isEditable && <button onClick={() =>
                this.clickHandler(this.props.id)} className="btn btn-primary">Edit</button> }
            </div>
            
        )
    }
}

const mapDispatchToProps = dispatch => ({
getEditItem:(index)=>dispatch(getEditProduct(index))
})

export default connect(null,mapDispatchToProps)(withRouter(ProductBlock))