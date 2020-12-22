// import React, { useState, useEffect } from 'react';
// import './Testing.scss';
// import logo from '../../assets/logo_main.png';
// import mobilelogo from '../../assets/sinewave-content.png';
// import { NavLink } from 'react-router-dom';
// import { SidebarData } from './SidebarData';
// import { IconContext } from 'react-icons'
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import { Link } from 'react-router-dom';


// export default function Testing() {
//     const [sidebar, setSidebar] = useState(false);

//     const showSidebar = (e) => {
//         e.preventDefault();
//         setSidebar(!sidebar);

//     };
//     return (
//         <>
//         <IconContext.Provider value={{ color: '#fff' }}>
//           <div className='navbar_header'>
//             <Link to='#' className='menu-bars-header'>
//               <FaIcons.FaBars onClick={showSidebar} />
//             </Link>
//           </div>
//           <nav className={sidebar ? 'nav-menu-header active' : 'nav-menu-header'}>
//             <ul className='nav-menu-items-header' onClick={showSidebar}>
//               <li className='navbar-toggle-header'>
//                 <Link to='#' className='menu-bars-header'>
//                   <AiIcons.AiOutlineClose />
//                 </Link>
//               </li>
//               {SidebarData.map((item, index) => {
//                 return (
//                   <li key={index} className={item.cName}>
//                     <Link to={item.path}>
//                       {item.icon}
//                       <span>{item.title}</span>
//                     </Link>
//                   </li>
//                 );
//               })}
            
//             </ul>
//           </nav>
//         </IconContext.Provider>
//       </>
//     )
// }
