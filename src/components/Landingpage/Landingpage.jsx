// import React from 'react';
// import { Layout, Menu, Button, Input } from 'antd';
// import { useNavigate } from 'react-router-dom';
// import './LandingPage.css';

// const { Header, Content } = Layout;

// const LandingPage = () => {
//     const navigate = useNavigate();

//     const handleCreateClick = () => {
//         navigate('/signin');
//     };
//     return (
//         <Layout className="full-layout">
//             <Header className="header">
//                 <img src="/src/Assets/pins.png" alt="Logo" />
//                 <Menu mode="horizontal" className="nav-menu" selectable={false}>
//                     <Menu.Item key="1" style={{ marginRight: '80px', fontSize: '17px' }}>Products</Menu.Item>
//                     <Menu.Item key="2" style={{ marginRight: '80px', fontSize: '17px' }}>Contact</Menu.Item>
//                     <Menu.Item key="3" style={{ marginRight: '80px', fontSize: '17px' }}>Integrations</Menu.Item>
//                 </Menu>
//                 <Button  className="create-btn" onClick={handleCreateClick}>CREATE</Button>

//             </Header>

//             <Content className="hero">
//                 <h1 className="hero-title">LINKSME – Simplify Your Bio, Amplify Your Reach.</h1>
//                 <p className="hero-desc">
//                     Search for trending products and top cross-port brand and boost your reach—all in one shelf, trusted platform.
//                 </p>
//                 <div className="search-bar">
//                     <Input
//                         placeholder="Looking for something? Start typing..."
//                         className="search-input" x
//                     />
//                     <Button type="primary" className="search-btn">Search Trending</Button>
//                 </div>
//             </Content>

//         </Layout>
//     );
// };

// export default LandingPage; 
///Backup code 27/05/2025




// import React from 'react';
// import { Layout, Menu, Button, Input } from 'antd';
// import { useNavigate } from 'react-router-dom';
// import './LandingPage.css';

// const { Header, Content } = Layout;

// const LandingPage = () => {
//     const navigate = useNavigate();

//     const handleCreateClick = () => {
//         navigate('/signin');
//     };
//     return (
//         <Layout className="full-layout">
//             <Header className="header">
//                 <img src="/src/Assets/pins.png" alt="Logo" />
//                 <Menu mode="horizontal" className="nav-menu" selectable={false}>
//                     <Menu.Item key="1" style={{ marginRight: '80px', fontSize: '17px' }}>Products</Menu.Item>
//                     <Menu.Item key="2" style={{ marginRight: '80px', fontSize: '17px' }}>Contact</Menu.Item>
//                     <Menu.Item key="3" style={{ marginRight: '80px', fontSize: '17px' }}>Integrations</Menu.Item>
//                 </Menu>
//                 <Button  className="create-btn" onClick={handleCreateClick}>CREATE</Button>

//             </Header>

//             <Content className="hero">
//                 <h1 className="hero-title">LINKSME – Simplify Your Bio, Amplify Your Reach.</h1>
//                 <p className="hero-desc">
//                     Search for trending products and top cross-port brand and boost your reach—all in one shelf, trusted platform.
//                 </p>
//                 <div className="search-bar">
//                     <Input
//                         placeholder="Looking for something? Start typing..."
//                         className="search-input" x
//                     />
//                     <Button type="primary" className="search-btn">Search Trending</Button>
//                 </div>
//             </Content>

//         </Layout>
//     );
// };

// export default LandingPage; 










///Redux

import React from 'react';
import { Layout, Menu, Button, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchText } from '../Redux/Engines/Landingpage.slice/Landingpageslice';
import './LandingPage.css';
const { Header, Content } = Layout;

const LandingPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const searchText = useSelector((state) => state.landing.searchText);

    const handleCreateClick = () => {
        navigate('/signin');
    };

    const handleSearchChange = (e) => {
        dispatch(setSearchText(e.target.value));
    };

    return (
        <Layout className="full-layout">
            <Header className="header">
                <img src="/src/Assets/pins.png" alt="Logo" />
                <Menu mode="horizontal" className="nav-menu" selectable={false}>
                    <Menu.Item key="1" style={{ marginRight: '80px', fontSize: '17px' }}>Products</Menu.Item>
                    <Menu.Item key="2" style={{ marginRight: '80px', fontSize: '17px' }}>Contact</Menu.Item>
                    <Menu.Item key="3" style={{ marginRight: '80px', fontSize: '17px' }}>Integrations</Menu.Item>
                </Menu>
                <Button className="create-btn" onClick={handleCreateClick}>CREATE</Button>
            </Header>

            <Content className="hero">
                <h1 className="hero-title">LINKSME – Simplify Your Bio, Amplify Your Reach.</h1>

                <p className="hero-desc">
                    Search for trending products and top cross-port brand and boost your reach—all in one shelf, trusted platform.
                </p>
                <div className="search-bar">
                    <Input
                        placeholder="Looking for something? Start typing..."
                        className="search-input"
                        value={searchText}
                        onChange={handleSearchChange}
                    />
                    <Button type="primary" className="search-btn">Search Trending</Button>
                </div>
            </Content>
        </Layout>
    );
};

export default LandingPage;
