import './sidebar.css';
import {  SiHomeassistantcommunitystore} from "react-icons/si";
import { CgHome} from "react-icons/cg";
import { CgCircleci} from "react-icons/cg";
import {TbDiscount2 } from "react-icons/tb";
import {BiMessageCheck } from "react-icons/bi";
import {IoIosNotificationsOutline } from "react-icons/io";
import {IoSettingsOutline } from "react-icons/io5";
import {HiOutlineLogout} from "react-icons/hi";

const data=[
  {
    id:1,
    mui:<TbDiscount2/>
  },
  {
    id:2,
    mui:<CgCircleci/>
  },
  {
    id:3,
    mui:<BiMessageCheck/>
  },
  {
    id:4,
    mui:<IoIosNotificationsOutline/>
  },
  {
    id:5,
    mui:<IoSettingsOutline/>
  },
  {
    id:6,
    mui:<HiOutlineLogout/>
  },
]

const Sidebar = () => {
  return (
    <div className='side'>
      <div className='a'><a className='i'>< SiHomeassistantcommunitystore/></a></div>
      <div className='b'><a className='j'>< CgHome /></a></div>
    {data && data.map((d)=>{
        return(
          <div key={d.id} className='c'><a className='k'>{d.mui}</a></div>

        )
      })

      }
    
    </div>
  )
}

export default Sidebar