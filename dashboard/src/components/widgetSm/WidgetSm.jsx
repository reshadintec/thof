import "./widgetSm.css"
import { VisibilityOutlined } from '@mui/icons-material';
export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Customers</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/14109176/pexels-photo-14109176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">
              John Doe
            </span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityOutlined/>
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/14109176/pexels-photo-14109176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">
              John Doe
            </span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityOutlined/>
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/14109176/pexels-photo-14109176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">
              John Doe
            </span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityOutlined/>
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/14109176/pexels-photo-14109176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">
              John Doe
            </span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityOutlined/>
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/14109176/pexels-photo-14109176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">
              John Doe
            </span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityOutlined/>
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}
