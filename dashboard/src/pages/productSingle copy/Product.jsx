import "./product.css"
import {Link} from 'react-router-dom';
import Chart from "../../components/chart/Chart";
import { productData  } from "../../dummyData";

export default function Product() {
  return (
    <div className="product">
      <div className="titleContainer">
        <h2>Edit Product</h2>
        <Link to="/add-product">
          <button>Add New</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="topLeft">
          <Chart data={productData} datakey="Sales" title="Sales Performance" className="productChart"/>
        </div>
      </div>
      <div className="topRight">
        <h2>Product Info</h2>
           <div className="topProductTitle">
            <img src="https://uz.thehouseoffragrance.com/wp-content/uploads/sites/2/2022/10/Clive-Christian-No.-1-1-600x600.webp" alt=""/>
            <h4>Clive Christian No.1</h4>
           </div>
           <div className="productInfo">
            <div className="productInfoLeft">
              <h4>Brand:</h4>
              <span>Clive Christian</span>  
            </div>
            <div className="productInfoRight">
              <h4>Strength:</h4>
              <span>Eau De Parfum</span>   
            </div>       
           </div>
           <div className="productInfo">
            <div className="productInfoLeft">
              <h4>Gender:</h4>
              <span>Women</span>  
            </div>
            <div className="productInfoMiddle">
              <h4>Price:</h4>
              <span>$650</span>  
            </div>
            <div className="productInfoRight">
              <h4>Size:</h4>
              <span>50 ml</span>   
            </div>       
           </div>

           <div className="productInfo">
            <div className="productInfoLeft description">
              <h4>Description:</h4>
              <span>No. 1 by Clive Christian is a Amber Floral fragrance for women. No. 1 was launched in 2001. Top notes are Apricot, Peach, Cardamom, Plum, Pineapple, Bergamot, Paprika and Amalfi Lemon; middle notes are Ylang-Ylang, iris, Jasmine, Carnation, Orchid and Rose; base notes are Sandalwood, Vanilla, Benzoin, Tonka Bean, Amber, Musk and Virginia Cedar.</span>  
            </div>       
           </div>
      </div>
    </div>
  )
}
