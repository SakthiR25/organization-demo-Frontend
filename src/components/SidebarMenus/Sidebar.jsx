// import React from "react";
// import { Menu, Layout } from "antd";
// import {
//     EditOutlined,
//     LinkOutlined,
//     TeamOutlined,
//     LineChartOutlined,
//     ProfileOutlined,
//     SettingOutlined,
//     DatabaseOutlined,
// } from "@ant-design/icons";

// const { Sider } = Layout;
// import { Link } from "react-router-dom";
// import image from '../../Assets/linklogo.png'
// const SidebarMenu = () => {
//     return (
//         <Sider width={200} style={{ background: "#fff" }}>
//             <div style={{ padding: "16px 24px", fontSize: 20, fontWeight: 700 }}>
//                 <img src={image}></img> LinksMe
//             </div>
//             <Menu
//                 mode="inline"
//                 defaultSelectedKeys={["1"]}
//                 style={{ height: "100%", borderRight: 0, fontWeight: "500" }}
//             >
//                 <Menu.SubMenu key="1" icon={<EditOutlined />} title="Business" to='/Userpage'>
//                     <Menu.Item key="1-1" icon={<DatabaseOutlined />}>
//                         <Link to='/Userpage'>Business Profile</Link>
//                     </Menu.Item>
//                     <Menu.Item key="1-2" icon={<DatabaseOutlined />}>
//                         <Link to='/Userpage'>Social Links</Link>
//                     </Menu.Item>
//                     <Menu.SubMenu key="1-3" icon={<DatabaseOutlined />} title="Affiliate Links">
//                         <Menu.Item key="1-3-1" icon={<DatabaseOutlined />}>
//                             <Link to='/Userpage'>Leads</Link>
//                         </Menu.Item>
//                         <Menu.Item key="1-3-2" icon={<DatabaseOutlined />}>
//                             <Link to='/Userpage'>My Orders</Link>
//                         </Menu.Item>
//                         <Menu.Item key="1-3-3" icon={<DatabaseOutlined />}>
//                             <Link to='/Product'>My Products</Link>
//                         </Menu.Item>
//                     </Menu.SubMenu>
//                     <Menu.SubMenu key="1-4" icon={<DatabaseOutlined />} title="Product">
//                         <Menu.Item key="1-4-1" icon={<DatabaseOutlined />}>
//                             <Link to='/Product'>Leads</Link>
//                         </Menu.Item>
//                         <Menu.Item key="1-4-2" icon={<DatabaseOutlined />}>
//                             <Link to='/Product'>My Orders</Link>
//                         </Menu.Item>
//                         <Menu.Item key="1-4-3" icon={<DatabaseOutlined />}>
//                             <Link to='/Product'>My Products</Link>
//                         </Menu.Item>
//                     </Menu.SubMenu>
//                     <Menu.Item key="1-5" icon={<DatabaseOutlined />}>
//                         <Link to=''>Service</Link>
//                     </Menu.Item>
//                     <Menu.Item key="1-6" icon={<DatabaseOutlined />}>
//                         <Link to=''>Course</Link>
//                     </Menu.Item>
//                     <Menu.Item key="1-7" icon={<DatabaseOutlined />}>
//                         <Link to=''>Influencer</Link>
//                     </Menu.Item>
//                 </Menu.SubMenu>
//                 <Menu.Item key="2" icon={<LinkOutlined />}>
//                     <Link to=''>Landing Page</Link>
//                 </Menu.Item>
//                 <Menu.Item key="3" icon={<TeamOutlined />}>
//                     <Link to=''>Community</Link>
//                 </Menu.Item>
//                 <Menu.Item key="4" icon={<LineChartOutlined />}>
//                     <Link to=''>Analytics</Link>
//                 </Menu.Item>
//                 <Menu.Item key="5" icon={<ProfileOutlined />}>
//                     <Link to=''>Profile</Link>
//                 </Menu.Item>
//                 <Menu.Item key="6" icon={<SettingOutlined />}>
//                     <Link to=''>Setting</Link>
//                 </Menu.Item>
//             </Menu>
//         </Sider>

//     );
// };

// export default SidebarMenu;

//Backup code 12/06/2025 on Top

import React, { useState } from "react";
import { Menu, Layout, Spin } from "antd";
import './Sidebar.css'
import {
  EditOutlined,
  LinkOutlined,
  TeamOutlined,
  LineChartOutlined,
  ProfileOutlined,
  SettingOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import image from '../../Assets/linklogo.png';

const { Sider } = Layout;

const SidebarMenu = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    setLoading(true);
    setTimeout(() => {
      navigate(path);
    }, 1000); 
  };

  return (
    <>
      {loading && (
        <div className="loading">
          <Spin size="large" tip="Loading..." />
        </div>
      )}

      <Sider width={200} style={{ background: "#fff" }}>
        <div style={{ padding: "16px 24px", fontSize: 20, fontWeight: 700 }}>
          <img src={image} alt="logo" style={{ width: 30, marginRight: 8 }} />
          LinksMe
        </div>

        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ height: "100%", borderRight: 0, fontWeight: "500" }}
        >
          <Menu.SubMenu key="1" icon={<EditOutlined />} title="Business">
            <Menu.Item key="1-1" icon={<DatabaseOutlined />} onClick={() => handleNavigate('/Userpage')}>
              Business Profile
            </Menu.Item>
            <Menu.Item key="1-2" icon={<DatabaseOutlined />} onClick={() => handleNavigate('/Userpage')}>
              Social Links
            </Menu.Item>

            <Menu.SubMenu key="1-3" icon={<DatabaseOutlined />} title="Affiliate Links">
              <Menu.Item key="1-3-1" onClick={() => handleNavigate('/Userpage')}>Leads</Menu.Item>
              <Menu.Item key="1-3-2" onClick={() => handleNavigate('/Userpage')}>My Orders</Menu.Item>
              <Menu.Item key="1-3-3" onClick={() => handleNavigate('/Product')}>My Products</Menu.Item>
            </Menu.SubMenu>

            <Menu.SubMenu key="1-4" icon={<DatabaseOutlined />} title="Product">
              <Menu.Item key="1-4-1" onClick={() => handleNavigate('/Product')}>Leads</Menu.Item>
              <Menu.Item key="1-4-2" onClick={() => handleNavigate('/Product')}>My Orders</Menu.Item>
              <Menu.Item key="1-4-3" onClick={() => handleNavigate('/Product')}>My Products</Menu.Item>
            </Menu.SubMenu>

            <Menu.Item key="1-5" onClick={() => handleNavigate('/')}>Service</Menu.Item>
            <Menu.Item key="1-6" onClick={() => handleNavigate('/')}>Course</Menu.Item>
            <Menu.Item key="1-7" onClick={() => handleNavigate('/')}>Influencer</Menu.Item>
          </Menu.SubMenu>

          <Menu.Item key="2" icon={<LinkOutlined />} onClick={() => handleNavigate('/')}>
            Landing Page
          </Menu.Item>
          <Menu.Item key="3" icon={<TeamOutlined />} onClick={() => handleNavigate('/')}>
            Community
          </Menu.Item>
          <Menu.Item key="4" icon={<LineChartOutlined />} onClick={() => handleNavigate('/')}>
            Analytics
          </Menu.Item>
          <Menu.Item key="5" icon={<ProfileOutlined />} onClick={() => handleNavigate('/Userpage')}>
            Profile
          </Menu.Item>
          <Menu.Item key="6" icon={<SettingOutlined />} onClick={() => handleNavigate('/')}>
            Setting
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
};

export default SidebarMenu;
