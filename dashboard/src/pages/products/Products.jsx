import "./products.css"
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutlineOutlined} from '@mui/icons-material';
import {Link} from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../redux/apiCalls";

export default function Products() {
  
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };
  const columns = [
  { field: '_id', headerName: 'ID', width: 100},
  { field: 'product', headerName: 'Product Name ', width: 220, renderCell:(params)=>{
    return (
      <div className='productList'>
        <img src={params.row.img} alt=''/>
        {params.row.title}
      </div>
    )
  }
  },
  { field: 'strength', headerName: 'Strength', width: 140 },
  { field: 'price', headerName: 'Price', width: 70 },
  { field: 'gender', headerName: 'Gender', width: 90 },
  { field: 'size', headerName: 'Size', width: 90 },
  { field: 'action', headerName: 'Action ', width: 150,
    renderCell:(params) =>{
      return(
        <>
        <Link to={"/product/"+params.row._id}>
          <button className='productListButton'>Edit</button>
          </Link>
          <DeleteOutlineOutlined className='productListDelete' onClick ={ ()=>handleDelete(params.row._id) }/>
        </>
      )
    } 
  },];

  return (
    <div className="products">
      <div style={{ height: 550, width: '100%' }}>
        <DataGrid  sx={{ color: '#fff', border:'solid 1px #e3cb99 '}} className="dataGridCustom"
          rows={products} disableSelectionOnClick 
          columns={columns}
          getRowId={(row) => row._id}
          pageSize={8}
          rowsPerPageOptions={[8]}
        />
      </div>
    </div>
  )
}
