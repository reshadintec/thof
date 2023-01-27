import { Publish } from "@mui/icons-material"
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import "./productForm.css"

export default function ProductForm() {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );
  return (
    <div className='productForm'>
      <form className="product">
        <div className="productItem">
          <label>Product Name</label>
          <input type="text" placeholder={product.title} />
        </div>
        <div className="productItem">
          <label>Brand</label>
          <input type="text" placeholder={product.title} /> 
        </div>
        <div className="productItem">
          <label>Price</label>
          <input type="number" placeholder={product.price} /> 
        </div>
        <div className="productItem">
          <label>Fragrance Strength</label>
          <input type="text" placeholder={product.strength} /> 
        </div>
        <div className="productItem">
          <label>Gender</label>
          <div className="productGender">
            <input
             type="radio"
              name="gender"
              id="female"
              value="Women"
              checked="checked"
            />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="male" value="Men" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="unisex" value="Unisex" />
            <label for="other">Unisex</label>
          </div>
        </div>
        <div className="productItem">
          <label>Size</label>
          <select name="size" id="size">
            <option value="50 ml">50 ml</option>
            <option value="75 ml">75 ml</option>
            <option value="100 ml">100 ml</option>
            <option value="125 ml">125 ml</option>
            <option value="200 ml">200 ml</option>
          </select>
        </div>
        <div className="productItem">
          <label >Status</label>
          <select name="status" id="status">
          <option value="true">In stock</option>
          <option value="false">Out of stock</option>
          </select>
        </div>
        <div className="productItem">
          <label>Product Image</label>  
          <label for="file">
            <div className="productImage">
            <img src={product.img} alt="" />
            <span>Choose an image</span>
            <Publish/>
            </div>
          </label>
          <input type="file" id="file"
          style={{display:"none"}} />
        </div>
        <div className="productItem">
          <label >Product Description</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <button>Update Product</button>
      </form>
    </div>
  )
}
