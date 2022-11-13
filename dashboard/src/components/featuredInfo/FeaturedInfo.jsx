import "./featuredInfo.css";
import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@mui/icons-material';
export default function FeaturedInfo() {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,150</span>
          <span className="featuredMoneyRate">-10.3 <ArrowDownwardOutlined className="negative"/></span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$3,620</span>
          <span className="featuredMoneyRate">-6.1 <ArrowDownwardOutlined className="negative"/></span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Expenses</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$1,120</span>
          <span className="featuredMoneyRate">+3.2 <ArrowUpwardOutlined/></span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  )
}
