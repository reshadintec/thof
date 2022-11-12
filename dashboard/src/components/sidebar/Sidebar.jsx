import "./sidebar.css"
import {AssessmentOutlined, CasesOutlined, EmailOutlined, HomeOutlined, InsightsOutlined, LoyaltyOutlined, MessageOutlined, PaidOutlined, PeopleOutline, QuizOutlined, ReportOutlined, StorefrontOutlined} from '@mui/icons-material';
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle ">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <HomeOutlined/>
              Home
            </li>
          </ul>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <InsightsOutlined/>
              Insights
            </li>
          </ul>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LoyaltyOutlined/>
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Access</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <PeopleOutline/>
              Users
            </li>
          </ul>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <StorefrontOutlined/>
              Products
            </li>
          </ul>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <PaidOutlined/>
              Transactions
            </li>
          </ul>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <AssessmentOutlined/>
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <EmailOutlined/>
              Mail
            </li>
          </ul>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <QuizOutlined/>
              FAQ
            </li>
          </ul>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MessageOutlined/>
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <CasesOutlined/>
              Manage
            </li>
          </ul>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <InsightsOutlined/>
              Insights
            </li>
          </ul>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <ReportOutlined/>
              Report
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
