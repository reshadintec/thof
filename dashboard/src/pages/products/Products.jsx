import "./products.css"
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutlineOutlined} from '@mui/icons-material';
import { productRows } from '../../dummyData'; 
import {Link} from 'react-router-dom';
import { useState } from 'react';

export default function Products() {
  const [data, setData] = useState(productRows);
  const handleDelete = (id)=>{
    setData(data.filter((item)=> item.id !==id));
  };
  const columns = [
  { field: 'id', headerName: 'ID', width: 60},
  { field: 'product', headerName: 'Product Name ', width: 220, renderCell:(params)=>{
    return (
      <div className='productList'>
        <img src={params.row.image} alt=''/>
        {params.row.productname}
      </div>
    )
  }
  },
  { field: 'brand', headerName: 'Brand', width: 180 },
  { field: 'strength', headerName: 'Strength', width: 140 },
  { field: 'price', headerName: 'Price', width: 70 },
  { field: 'gender', headerName: 'Gender', width: 90 },
  { field: 'size', headerName: 'Size', width: 90 },
  { field: 'action', headerName: 'Action ', width: 150,
    renderCell:(params) =>{
      return(
        <>
        <Link to={"/product/"+params.row.id}>
          <button className='productListButton'>Edit</button>
          </Link>
          <DeleteOutlineOutlined className='productListDelete' onClick ={ ()=>handleDelete(params.row.id) }/>
        </>
      )
    } 
  },];

  return (
    <div className="products">
      <div style={{ height: 550, width: '100%' }}>
        <DataGrid  sx={{ color: '#fff', border:'solid 1px #e3cb99 '}} className="dataGridCustom"
          rows={data} disableSelectionOnClick
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
        />
      </div>
    </div>
  )
}
