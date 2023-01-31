import { Publish } from "@mui/icons-material"
import { useState } from "react";
import "./productForm.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

export default function ProductForm(params) {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL };
          addProduct(product, dispatch);
        });
      }
    );
  };
  return (
    <div className='productForm'>
      <form className="product">
        <div className="productItem">
          <label>Product Name</label>
          <input name="title" type="text" placeholder="Mendittorosa Le Mat" onChange={handleChange} />
        </div>
        <div className="productItem">
          <label>Brand</label>
          <input type="text" placeholder="Mendittorosa" /> 
        </div>
        <div className="productItem">
          <label>Price</label>
          <input  name="price" type="number" placeholder="$ 100" onChange={handleChange}/> 
        </div>
        <div className="productItem">
          <label>Fragrance Strength</label>
          <input name="strength" type="text" placeholder="Extrait De Parfum" onChange={handleChange}/> 
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
              onChange={handleChange}
            />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="male" value="Men"  onChange={handleChange}/>
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="unisex" value="Unisex" onChange={handleChange}/>
            <label htmlFor="other">Unisex</label>
          </div>
        </div>
        <div className="productItem">
          <label>Size</label>
          <select name="size" id="size" onChange={handleChange}>
            <option value="30 ml">30 ml</option>
            <option value="35 ml">35 ml</option>
            <option value="50 ml">50 ml</option>
            <option value="75 ml">75 ml</option>
            <option value="100 ml">100 ml</option>
            <option value="125 ml">125 ml</option>
          </select>
        </div>
        <div className="productItem">
          <label >Status</label>
          <select name="inStock" id="status" onChange={handleChange}>
          <option value="true">In stock</option>
          <option value="false">Out of stock</option>
          </select>
        </div>
        <div className="productItem">
          <label>Product Image</label>  
          <label htmlFor="file">
            <div className="productImage">
            <img src="https://uz.thehouseoffragrance.com/wp-content/uploads/sites/2/2022/10/Le-Mat-Mendittorosa-1.webp" alt="" />
            <span>Choose an image</span>
            <Publish/>
            </div>
          </label>
          <input name="img" type="file" id="file"
          style={{display:"none"}} onChange={(e) => setFile(e.target.files[0])}/>
        </div>
        <div className="productItem">
          <label >Product Description</label>
          <textarea name="desc" id="" cols="30" rows="10" onChange={handleChange}></textarea>
        </div>
        <button onClick={handleClick}>{params.title}</button>
      </form>
    </div>
  )
}
