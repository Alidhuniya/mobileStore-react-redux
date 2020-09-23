import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import { fetchProducts } from './../redux/actions/allProducts';


 class SingleProduct extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    
  }
    render() {
        // const {x, increment, decrement, reset} = this.props;
      

            const product = this.props.items ? (
                 <Fragment>
                 <h2>single Product List</h2>
    
    <p>{this.props.items && this.props.items.fields.offertitle}</p>
   
    <p>{this.props.items && this.props.items.fields.offerdec}</p>
    <p>{ this.props.items && this.props.items.fields.offerprice}</p>
                 </Fragment>
             ) : (
               <div >Loading singleProduct...</div>
             )
         
        
        return (
           

          <div>{product}</div>
              
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.product_id;
    
  return {
    items: state.productLists.products.find(items => items.sys.id === id)
    // items: state.productLists
   
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: (id) => dispatch(fetchProducts(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(SingleProduct);





