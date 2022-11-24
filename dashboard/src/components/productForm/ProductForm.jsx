import { Publish } from "@mui/icons-material"
import "./productForm.css"

export default function ProductForm() {
  return (
    <div className='productForm'>
      <form className="product">
        <div className="productItem">
          <label>Product Name</label>
          <input type="text" placeholder="No 1" />
        </div>
        <div className="productItem">
          <label>Brand</label>
          <input type="text" placeholder="Clive Christian" /> 
        </div>
        <div className="productItem">
          <label>Price</label>
          <input type="number" placeholder="$650" /> 
        </div>
        <div className="productItem">
          <label>Fragrance Strength</label>
          <input type="text" placeholder="Eau de Parfum" /> 
        </div>
        <div className="productItem">
          <label>Gender</label>
          <div className="productGender">
            <input
             type="radio"
              name="gender"
              id="female"
              value="female"
              checked="checked"
            />
            <label for="male">Female</label>
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
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
          <option value="instock">In stock</option>
          <option value="outofstock">Out of stock</option>
          </select>
        </div>
        <div className="productItem">
          <label>Product Image</label>  
          <label for="file">
            <div className="productImage">
            <img src="https://uz.thehouseoffragrance.com/wp-content/uploads/sites/2/2022/10/Clive-Christian-No.-1-1-600x600.webp" alt="" />
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
