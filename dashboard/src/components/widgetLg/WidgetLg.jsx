import "./widgetLg.css"
export default function WidgetLg() {
  const Button = ({type}) =>{
    return <button className={"widgetLgButton " + type} >{type}</button>
  }
  return (
    <div className="widgetLg">
      <span className="widgetLgTitle">Latest Orders</span>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="profile-pic" className="widgetLgImg" />
            <span className="widgetLgName">John Fashion</span>
          </td>
          <td className="widgetLgDate"> 1 Nov 2022</td>
          <td className="widgetLgAmount">$150</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="profile-pic" className="widgetLgImg" />
            <span className="widgetLgName">John Fashion</span>
          </td>
          <td className="widgetLgDate"> 1 Nov 2022</td>
          <td className="widgetLgAmount">$150</td>
          <td className="widgetLgStatus"><Button type="Declined"/></td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="profile-pic" className="widgetLgImg" />
            <span className="widgetLgName">John Fashion</span>
          </td>
          <td className="widgetLgDate"> 1 Nov 2022</td>
          <td className="widgetLgAmount">$150</td>
          <td className="widgetLgStatus"><Button type="Pending"/></td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="profile-pic" className="widgetLgImg" />
            <span className="widgetLgName">John Fashion</span>
          </td>
          <td className="widgetLgDate"> 1 Nov 2022</td>
          <td className="widgetLgAmount">$150</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr>
      </table>
    </div>
  )
}
