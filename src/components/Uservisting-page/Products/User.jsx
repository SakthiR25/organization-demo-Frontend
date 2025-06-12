import React from "react";
import {
    Layout,
    Avatar,
    Input,
    Button,
    Row,
    Col,
    Card,
    Typography,
    Space,
} from "antd";
import {
    GithubOutlined,
    TwitterOutlined,
    YoutubeOutlined,
    WhatsAppOutlined,
    SearchOutlined,
    HeartOutlined,
    LinkedinFilled,
    UserOutlined
} from "@ant-design/icons";
import logo from '../../../Assets/pins.png'
const { Header, Content } = Layout;
const { Title, Text } = Typography;
import './User.css'
const homeInteriorImages = [
    "https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?cs=srgb&dl=pexels-houzlook-3797991.jpg&fm=jpg1",
    "https://plus.unsplash.com/premium_photo-1661778773089-8718bcedb39e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMGludGVyaW9yfGVufDB8fDB8fHww",
    "https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg",
];

const tabItems = ["Products", "Services", "Course", "Influencer", "Affiliate"];

const ProfilePage = () => {
    const renderProductCard = (imageUrl) => (   
        <Card
            cover={
                <div style={{ position: "relative" }}>
                    <img
                        alt="Product"
                        src={imageUrl}
                        style={{ height: 180, width: "100%", objectFit: "cover" }}
                    />
                    <HeartOutlined className="Heart"
                    />
                </div>
            }
        >
            <Card.Meta
                title={<Text strong>Product name</Text>}
                style={{ textAlign: "left" }}
                description={
                    <div>
                       
                        <Text type="secondary">  <UserOutlined /> Website</Text>
                        <br />
                        <Text type="secondary">💲Price</Text>
                    </div>
                }
            />
        </Card>
    );

    return (
        <Layout style={{ minHeight: "100vh", background: "#fff" }}>
            <Header
                
                className="header"
            >
                <img src={logo} alt="Logo" style={{ height: 50, marginLeft: 20 }} />
                <Avatar size={48} src="https://i.pravatar.cc/150?img=56" style={{ marginRight: 20 }} />
            </Header>

            <Content
                style={{
                    marginTop: 80,
                    overflowY: "auto",
                    padding: "24px",
                    height: "calc(100vh - 80px)",
                }}
            >
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <Title level={4} style={{ textAlign: "center" }}>Sakthivel</Title>
                    <Text type="secondary" style={{ display: "block", textAlign: "center" }}>Full Stack Developer</Text>

                    <div style={{ fontSize: 18, textAlign: "center", marginBottom: 10, marginTop: 10 }}>
                        <GithubOutlined style={{ margin: "0 8px" }} />
                        <TwitterOutlined style={{ margin: "0 8px" }} />
                        <LinkedinFilled style={{ margin: "0 8px" }} />
                        <YoutubeOutlined style={{ margin: "0 8px" }} />
                        <WhatsAppOutlined style={{ margin: "0 8px" }} />
                    </div>

                    <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
                        <div className="search-bar">
                            <Input
                                placeholder="Search ..."
                                size="large"
                                className="search-input"
                            />
                            <Button
                                icon={<SearchOutlined />}
                                size="large"
                                type="primary"
                                className="search-button"
                            >
                                Search
                            </Button>
                        </div>
                    </div>

                    <div className="pill-nav">
                        {tabItems.map((item) => (
                            <div
                                key={item}
                                className={`pill ${item === "Products" ? "active" : ""}`}
                            >
                                {item}
                            </div>
                        ))}
                    </div>

                </div>

                <div style={{ paddingTop: 24 }}>
                    <Row gutter={[16, 16]} justify="center">
                        {Array.from({ length: 100 }).map((_, index) => (
                            <Col xs={24} sm={12} md={8} lg={6} xl={4} key={index}>
                                {renderProductCard(homeInteriorImages[index % homeInteriorImages.length])}
                            </Col>
                        ))}
                    </Row>
                </div>
            </Content>
        </Layout>

    );
};

export default ProfilePage;

