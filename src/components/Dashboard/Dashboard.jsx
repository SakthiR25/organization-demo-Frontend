// import React, { useState } from 'react';
// import { Input, Button, Card, Row, Col, Pagination } from 'antd';
// import {
//     SearchOutlined,
//     HeartOutlined,
//     HeartFilled,
//     UserOutlined,
// } from '@ant-design/icons';
// import './Dashboard.css';
// import { useNavigate } from 'react-router-dom';
// const totalProducts = Array(200).fill({
//     name: 'Product name',
//     type: 'Websites',
//     price: '₹ Price 10,000',
// });

// const pageSize = 12;

// const DashboardPage = () => {
//     const [currentPage, setCurrentPage] = useState(1);
//     const [likedItems, setLikedItems] = useState({});
//     const navigate = useNavigate();
//     const handleCreateClick1 = () => {
//         navigate('/login');
//     };

//     const toggleLike = (index) => {
//         setLikedItems((prev) => ({
//             ...prev,
//             [index]: !prev[index],
//         }));
//     };

//     const paginatedProducts = totalProducts.slice(
//         (currentPage - 1) * pageSize,
//         currentPage * pageSize
//     );

//     return (
//         <div className="dashboard-container">
//             {/* Header */}
//             <div className="dashboard-header">
//                 <div className="dashboard-title">
//                     <span role="img" aria-label="link">🔗</span> LinksMe
//                 </div>
//                 <div className="dashboard-nav">
//                     <a href="#">Products</a>
//                     <a href="#">Contact</a>
//                     <a href="#">Integrations</a>
//                 </div>
//                 <Button type="primary" className="create-button" onClick={handleCreateClick1}>CREATE</Button>
//             </div>

//             <div className="search-intro-text">
//                 <p>
//                     Discover the most relevant products, top creators, and affiliate opportunities that match your search.<br />
//                     Boost your bio, expand your reach, and stay ahead with trending content tailored just for you.
//                 </p>
//             </div>

//             {/* Search section */}
//             <div className="search-section">
//                 <div className="search-boxs">
//                     <Input placeholder="Search..." className="search-input" />
//                     <Button icon={<SearchOutlined />} type="primary" className="search-bar3">Try a New Search</Button>
//                 </div>

//                 <div className="showresult-container">
//                     <Button type="primary" className="showbtn">Show all results ({totalProducts.length})</Button>
//                 </div>

//                 {/* Product cards */}
//                 <Row gutter={[20, 20]} justify="center">
//                     {paginatedProducts.map((item, index) => {
//                         const globalIndex = (currentPage - 1) * pageSize + index;
//                         const isLiked = likedItems[globalIndex];

//                         return (
//                             <Col xs={24} sm={12} md={8} lg={4} key={globalIndex}>
//                                 <Card
//                                     cover={
//                                         <div className="card-cover">
//                                             <img
//                                                 src="src/Assets/product.png"
//                                                 alt="image"
//                                                 style={{
//                                                     width: '100%',
//                                                     height: '117%',
//                                                     objectFit: 'cover',
//                                                     borderRadius: '8px',
//                                                 }}
//                                             />
//                                             {isLiked ? (
//                                                 <HeartFilled
//                                                     className="heart-icon liked"
//                                                     onClick={() => toggleLike(globalIndex)}
//                                                 />
//                                             ) : (
//                                                 <HeartOutlined
//                                                     className="heart-icon"
//                                                     onClick={() => toggleLike(globalIndex)}
//                                                 />
//                                             )}
//                                         </div>
//                                     }
//                                     hoverable
//                                 >
//                                     <h4><strong>{item.name}</strong></h4>
//                                     <p>
//                                         <UserOutlined style={{ marginRight: '5px' }} className="type-badge" />
//                                         {item.type}
//                                     </p>
//                                     <p>{item.price}</p>
//                                 </Card>
//                             </Col>
//                         );
//                     })}
//                 </Row>

//                 {/* Pagination */}
//                 <div style={{ textAlign: 'center', marginTop: '30px', marginLeft: '68rem' }}>
//                     <Pagination
//                         current={currentPage}
//                         total={totalProducts.length}
//                         pageSize={pageSize}
//                         onChange={(page) => setCurrentPage(page)}
//                         showSizeChanger={false}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DashboardPage;

///Backup code 27/05/2025


import React, { useState } from 'react';
import { Input, Button, Card, Row, Col, Pagination } from 'antd';
import {
    SearchOutlined,
    HeartOutlined,
    HeartFilled,
    UserOutlined,
} from '@ant-design/icons';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
const totalProducts = Array(200).fill({
    name: 'Product name',
    type: 'Websites',
    price: '₹ Price 30,000',
});

const pageSize = 12;
import logo from '../../Assets/linklogo.png'
const DashboardPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [likedItems, setLikedItems] = useState({});
    const navigate = useNavigate();
    const handleCreateClick1 = () => {
        navigate('/login');
    };

    const toggleLike = (index) => {
        setLikedItems((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const paginatedProducts = totalProducts.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    return (
        <div className="dashboard-container">
            {/* Header */}
            <div className="dashboard-header">
                <div className="dashboard-title">
                    <span role="img" aria-label="link"><img src={logo} /></span> LinksMe
                </div>
                <div className="dashboard-nav">
                    <a href="#">Products</a>
                    <a href="#">Contact</a>
                    <a href="#">Integrations</a>
                </div>
                <Button type="primary" className="create-button" onClick={handleCreateClick1}>CREATE</Button>
            </div>

            <div className="search-intro-text">
                <p>
                    Discover the most relevant products, top creators, and affiliate opportunities that match your search.<br />
                    Boost your bio, expand your reach, and stay ahead with trending content tailored just for you.
                </p>
            </div>

            {/* Search section */}
            <div className="search-section">
                <div className="search-boxs">
                    <Input placeholder="Search..." className="search-input" />
                    <Button icon={<SearchOutlined />} type="primary" className="search-bar3">Try a New Search</Button>
                </div>

                <div className="showresult-container">
                    <Button type="primary" className="showbtn">Show all results ({totalProducts.length})</Button>
                </div>

                {/* Product cards */}
                <Row gutter={[20, 20]} justify="center">
                    {paginatedProducts.map((item, index) => {
                        const globalIndex = (currentPage - 1) * pageSize + index;
                        const isLiked = likedItems[globalIndex];

                        return (
                            <Col xs={24} sm={12} md={8} lg={4} key={globalIndex}>
                                <Card
                                    cover={
                                        <div className="card-cover">
                                            <img
                                                src="src/Assets/product.png"
                                                alt="image"
                                                style={{
                                                    width: '100%',
                                                    height: '117%',
                                                    objectFit: 'cover',
                                                    borderRadius: '8px',
                                                }}
                                            />
                                            {isLiked ? (
                                                <HeartFilled
                                                    className="heart-icon liked"
                                                    onClick={() => toggleLike(globalIndex)}
                                                />
                                            ) : (
                                                <HeartOutlined
                                                    className="heart-icon"
                                                    onClick={() => toggleLike(globalIndex)}
                                                />
                                            )}
                                        </div>
                                    }
                                    hoverable
                                >
                                    <h4><strong>{item.name}</strong></h4>
                                    <p>
                                        <UserOutlined style={{ marginRight: '5px' }} className="type-badge" />
                                        {item.type}
                                    </p>
                                    <p>{item.price}</p>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>

                {/* Pagination */}
                <div style={{ textAlign: 'center', marginTop: '30px', marginLeft: '68rem' }}>
                    <Pagination
                        current={currentPage}
                        total={totalProducts.length}
                        pageSize={pageSize}
                        onChange={(page) => setCurrentPage(page)}
                        showSizeChanger={false}
                    />
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
