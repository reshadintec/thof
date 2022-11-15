import './userList.css'
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutlineOutlined} from '@mui/icons-material';
import { border } from '@mui/system';
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
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
  { field: 'transaction', headerName: 'Transaction Volume', width: 160},
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

const rows = [
  { id: 1, username: 'Jon Snow', 
    avatar: 'https://images.pexels.com/photos/8964547/pexels-photo-8964547.jpeg?auto=compress&cs=tinysrgb&w=1600',
    email: "jon@snow.com",
    status: "active",
    transaction: "$140" },

  {
    id: 2, username: 'Jon Snow',
    avatar: 'https://images.pexels.com/photos/8964547/pexels-photo-8964547.jpeg?auto=compress&cs=tinysrgb&w=1600',
    email: "jon@snow.com",
    status: "active",
    transaction: "$140"
  },
  {
    id: 3, username: 'Jon Snow',
    avatar: 'https://images.pexels.com/photos/8964547/pexels-photo-8964547.jpeg?auto=compress&cs=tinysrgb&w=1600',
    email: "jon@snow.com",
    status: "active",
    transaction: "$140"
  },
  {
    id: 4, username: 'Jon Snow',
    avatar: 'https://images.pexels.com/photos/8964547/pexels-photo-8964547.jpeg?auto=compress&cs=tinysrgb&w=1600',
    email: "jon@snow.com",
    status: "active",
    transaction: "$140"
  },
  {
    id: 5, username: 'Jon Snow',
    avatar: 'https://images.pexels.com/photos/8964547/pexels-photo-8964547.jpeg?auto=compress&cs=tinysrgb&w=1600',
    email: "jon@snow.com",
    status: "active",
    transaction: "$140"
  },
  {
    id: 6, username: 'Jon Snow',
    avatar: 'https://images.pexels.com/photos/8964547/pexels-photo-8964547.jpeg?auto=compress&cs=tinysrgb&w=1600',
    email: "jon@snow.com",
    status: "active",
    transaction: "$140"
  },
  {
    id: 7, username: 'Jon Snow',
    avatar: 'https://images.pexels.com/photos/8964547/pexels-photo-8964547.jpeg?auto=compress&cs=tinysrgb&w=1600',
    email: "jon@snow.com",
    status: "active",
    transaction: "$140"
  },
  {
    id: 8, username: 'Jon Snow',
    avatar: 'https://images.pexels.com/photos/8964547/pexels-photo-8964547.jpeg?auto=compress&cs=tinysrgb&w=1600',
    email: "jon@snow.com",
    status: "active",
    transaction: "$140"
  },
  {
    id: 9, username: 'Jon Snow',
    avatar: 'https://images.pexels.com/photos/8964547/pexels-photo-8964547.jpeg?auto=compress&cs=tinysrgb&w=1600',
    email: "jon@snow.com",
    status: "active",
    transaction: "$140"
  },
  {
    id: 10, username: 'Jon Snow',
    avatar: 'https://images.pexels.com/photos/8964547/pexels-photo-8964547.jpeg?auto=compress&cs=tinysrgb&w=1600',
    email: "jon@snow.com",
    status: "active",
    transaction: "$140"
  },
];
export default function UserList() {
  return (
    <div className="userList">
      <div style={{ height: 700, width: '100%' }}>
        <DataGrid sx={{ color: '#fff', border:'solid 1px #e3cb99 '}}
          rows={rows} disableSelectionOnClick
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          checkboxSelection
        />
      </div>
    </div>
  )
}
