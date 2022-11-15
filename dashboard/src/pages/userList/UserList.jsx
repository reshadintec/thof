import './userList.css'
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutlineOutlined} from '@mui/icons-material';
import { userRows } from '../../dummyData'; 
const columns = [
  { field: 'id', headerName: 'ID', width: 60 },
  { field: 'user', headerName: 'User name ', width: 200, renderCell:(params)=>{
    return (
      <div className='userListUser'>
        <img src={params.row.avatar} alt=''/>
        {params.row.username}
      </div>
    )
  } },
  { field: 'email', headerName: 'Email', width: 150 },
  { field: 'status', headerName: 'Status', width: 150 },
  { field: 'transaction', headerName: 'Transaction Volume', width: 150},
  { field: 'action', headerName: 'Action ', width: 150,
    renderCell:(params) =>{
      return(
        <>
          <button className='userListEdit'>Edit</button>
          <DeleteOutlineOutlined className='userListDelete'/>
        </>
      )
    } 
  },
];


export default function UserList() {
  return (
    <div className="userList">
      <div style={{ height: 550, width: '100%' }}>
        <DataGrid sx={{ color: '#fff', border:'solid 1px #e3cb99 '}} className="dataGridCustom"
          rows={userRows} disableSelectionOnClick
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          checkboxSelection
        />
      </div>
    </div>
  )
}
