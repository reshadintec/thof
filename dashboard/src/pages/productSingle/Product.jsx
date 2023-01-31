import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import ProductForm from "..//../components/productForm/ProductForm";
import "./product.css";

export default function Product() {

  const location = useLocation();
  const productId = location.pathname.split("/")[2];

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );
  return (
    <div className="product">
      <div className="titleContainer">
        <h2>Edit Product</h2>
        <Link to="/newproduct">
          <button>Add New</button>
        </Link>
      </div>

      <div className="bodyContainer">
        <div className="leftBody">
          <div className="productTitle">
            <img
              src={product.img}
              alt=""
            />
            <div className="productTitleText">
              <span>{product.title}</span>
            </div>
          </div>

          <div className="productAddInfo">
            <h4>Strength:</h4>
            <span>{product.strength}</span>
          </div>

          <div className="productAddInfo">
            <h4>Gender:</h4>
            <span>{product.gender}</span>
          </div>

          <div className="productAddInfo">
            <h4>Price:</h4>
            <span>{product.price}</span>
          </div>

          <div className="productAddInfo">
            <h4>Size:</h4>
            <span>{product.size}</span>
          </div>

           <div className="productAddInfo">
            <h4>Status:</h4>
            <span>{product.inStock?"In Stock":"Out of Stock"}</span>
          </div>

          <div className="productDesc">
            <h4>Description:</h4>
            <span>
              {product.desc}
            </span>
          </div>
        </div>
        {/* Right Section */}
        <div className="rightBody">
          <span className="editTitle">Edit</span>
          <ProductForm title="Update Product"/>
        </div>
      </div>
      <div className="formContainer">
      </div>
    </div>
  );
}
