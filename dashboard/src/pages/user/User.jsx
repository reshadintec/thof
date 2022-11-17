import "./user.css";
import { CalendarTodayOutlined, LocationSearchingOutlined, MailOutlineOutlined, PermIdentityOutlined, PhoneAndroidOutlined, Publish} from '@mui/icons-material';
import {Link} from 'react-router-dom';

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h2 className="userTitle">Edit User</h2>
        <Link to="/newUser">
          <button>Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src="https://images.pexels.com/photos/8964547/pexels-photo-8964547.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="profile-pic" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUserName">Anna Becker</span>
              <span className="userShowUserTitle">Software Engineer</span>

            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentityOutlined/>
              <span className="showUserInfoTitle">annabeck99</span>
            </div>

            <div className="userShowInfo">
              <CalendarTodayOutlined/>
              <span className="showUserInfoTitle">16.07.1992</span>
            </div>
            <div className="contactDetails">
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroidOutlined/>
              <span className="showUserInfoTitle">+32 0492 87 22 09</span>
            </div>

            <div className="userShowInfo">
              <MailOutlineOutlined/>
              <span className="showUserInfoTitle">annabeck@gmail.com</span>
            </div>

            <div className="userShowInfo">
              <LocationSearchingOutlined/>
              <span className="showUserInfoTitle">Leopoldplein 40 , Hasselt Belgium</span>
            </div>
          </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label >Username</label>
                  <input  className="userUpdateInput" type="text" placeholder="annabeck" />
                </div>

                <div className="userUpdateItem">
                  <label >Full Name</label>
                  <input type="text" placeholder="annabecker@gmail.com" className="userUpdateInput"/>
                </div>

                <div className="userUpdateItem">
                  <label >Email</label>
                  <input type="text" placeholder="annabeck" className="userUpdateInput"/>
                </div>

                <div className="userUpdateItem">
                  <label >Phone</label>
                  <input type="text" placeholder="+32 0492 87 22 09" className="userUpdateInput"/>
                </div>

                <div className="userUpdateItem">
                  <label >Address</label>
                  <input type="text" placeholder="Leopoldplein 50 3500, Hasselt Belgium" className="userUpdateInput"/>
                </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img className="userUpdateImg" src="https://images.pexels.com/photos/8964547/pexels-photo-8964547.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="img-proflie"  />
                <label htmlFor="file"><Publish/></label>
                <input type="file"  id="file" style={{display:"none"}} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
