import React, { Component } from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import { updateProduct } from '../Redux/Actions'

class EditForm extends Component {

    constructor(props) {
        super(props)
        const product = this.props.product[0]
        this.state = {
             id: product.id,
             name: product.name,
             weight: product.weight ,
             availability: product.availability ,
             priceRange: product.priceRange,
             pricingTier: product.pricingTier,
             productUrl: product.productUrl,
             isEditable: product.isEditable
        }
    }    
    
    onSubmitEdit=(e)=>{
        e.preventDefault()
            const {name,id,weight,availability,priceRange,pricingTier,productUrl,isEditable} = this.state
            const updateObj = {name,weight,availability,priceRange,pricingTier,productUrl,isEditable}
        
        this.props.updateProduct(updateObj, id, this.props.index)
        this.props.history.push('/')
    }   

    render() {
        const {range} =this.props
        const item = this.props.product[0]
        if(!item) return <p>loading...</p>
        return (
            <div  className="container ">                
                <form  className="form-horizontal " onSubmit ={e => {this.onSubmitEdit(this.state,e)}}>
                    <fieldset>
                        <div className="row">
                            <div className ="col-lg-12 text-center">
                                <h2>Edit Product</h2>
                            </div> 
                        </div>                  
                        <br/>
                        <br/>
                        <div  className="form-group row justify-content-center">               
                            <label  className="col-md-4 control-label text-dark">Product_Name</label>  
                            <div  className="col-md-4">
                                <input 
                                    className="form-control input-md"
                                    id="Product_Name" 
                                    name="Product_Name"
                                    onChange={(e)=>{this.setState({name: e.target.value})}}
                                    value={this.state.name} 
                                    placeholder="Product name"                       
                                    type="text" 
                                    required="required" data-validation-required-message="Please enter your name."
                                />                           
                            </div>
                        </div> 
                        <div  className="form-group row justify-content-center">               
                            <label  className="col-md-4 control-label text-dark">Weight</label>  
                            <div  className="col-md-4">
                                <input 
                                    className="form-control input-md"
                                    id="Weight" 
                                    name="Weight"
                                    onChange={(e)=>{this.setState({weight: e.target.value})}}
                                    value={this.state.weight}
                                    placeholder="Weight"                      
                                    required="required" data-validation-required-message="Please enter your name."                                        type="text" 
                                />                         
                            </div>
                        </div> 
                        <div  className="form-group row justify-content-center">
                            <label  className="col-md-4 control-label text-dark">Availability</label>  
                            <div  className="col-md-4">
                                <input 
                                    className="form-control input-md"
                                    id="Availability" 
                                    name="Availability" 
                                    onChange={(e)=>{this.setState({availability: e.target.value})}}
                                    value={this.state.availability}                                        placeholder="Number of Available products"                     
                                    required="required" 
                                    data-validation-required-message="Please enter your name."
                                    type="number"
                                />                        
                            </div>
                        </div> 
                        <div  className="form-group row justify-content-center">                            
                            <label  className="col-md-4 control-label text-dark">Product_URL</label>  
                            <div  className="col-md-4">                                        
                                <input 
                                    className="form-control input-md"
                                    id="Product_URL" 
                                    name="Product_URL" 
                                    onChange={(e)=>{this.setState({productUrl: e.target.value})}}
                                    value={this.state.productUrl}
                                    placeholder="Product Link"                      
                                    required="required" 
                                    data-validation-required-message="Please enter your name."                                        type="text" 
                                />                         
                            </div>
                        </div>                     
                        <div  className="form-group flo row justify-content-center">               
                            <label  className="col-md-4 control-label text-dark">Price_Tier</label>  
                            <div  className="col-md-4">
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" required="required" data-validation-required-message="Please enter your name." checked={item.pricingTier==='budget'} 
                                       onChange={(e)=>{this.setState({pricingTier: e.target.value})}}
                                       value={this.state.pricingTier}
                                       id="customRadioInline1" name="Price_tier" className="custom-control-input" />
                                <label className="custom-control-label" >Budget</label>
                                
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio"
                                onChange={(e)=>{this.setState({pricingTier: e.target.value})}}
                                value={this.state.pricingTier}
                                 checked={item.pricingTier==='premier'} id="customRadioInline2" name="Price_tier" className="custom-control-input" />
                                <label className="custom-control-label">Premier</label>
                            </div>                                                                
                            </div>
                        </div> 
                        <div  className="form-group row justify-content-center">
                            <label  className="col-md-4 control-label text-dark">Price_Range</label>  
                            <div  className="col-md-4">
                                <select className="custom-select" onChange={(e)=>{this.setState({priceRange: e.target.value})}}
                                        value={this.state.priceRange}>
                                    <option>{item.priceRange}</option>
                                    {item.pricingTier==='premier' && range.premier.map((item, i) => <option key={i} item={item}>{item}</option>)}
                                    {item.pricingTier==='budget' && range.budget.map((item,i) => <option key={i} item={item}>{item}</option>)}                            
                                </select>                        
                            </div>
                        </div>                        
                        <br/>
                        <div  className="col-lg-12 text-center">
                            <button id="singlebutton" type="submit"  name="singlebutton" className="btn btn-primary">Submit</button>
                        </div>
                   </fieldset>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    product : state.item,
    range : state.pricingInfo,
    index : state.index
})

const mapDispatchToProps = (dispatch) => ({
    updateProduct :(item, id, index)=>dispatch(updateProduct(item, id, index))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditForm))