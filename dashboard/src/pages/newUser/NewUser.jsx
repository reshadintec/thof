import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h2>New User</h2>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="John"/>
        </div>

        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Doe "/>
        </div>

        <div className="newUserItem">
          <label>Emial</label>
          <input type="email" placeholder="johdoe@email.com"/>
        </div>

        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password"/>
        </div>

        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+32 492 11 22 33"/>
        </div>

        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Leopoldplein 1, Hasselt Belgium"/>
        </div>

        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male"/>
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female"/>
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other"/>
            <label for="other">Other</label>
          </div>
        </div>

        <div className="newUserItem">
          <label>Status</label>
          <select name="status" id="status">
            <option value="Active">Active</option>
            <option value="Away">Away</option>
          </select>
        </div>

      </form>
    </div>
  )
}
