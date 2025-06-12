// import React, { useState } from "react";
// import {
//     Layout,
//     Menu,
//     Avatar,
//     Button,
//     Card,
//     Empty,
//     Tooltip,
//     Form,
//     Input,
//     Select,
// } from "antd";
// import {
//     SettingOutlined,
//     LinkOutlined,
//     LineChartOutlined,
//     TeamOutlined,
//     PlusOutlined,
//     GithubOutlined,
//     TwitterOutlined,
//     LinkedinOutlined,
//     YoutubeOutlined,
//     MobileOutlined,
//     DesktopOutlined,
//     DatabaseOutlined,
//     EditOutlined,
//     ProfileOutlined,
//     MoreOutlined,
// } from "@ant-design/icons";
// import "antd/dist/reset.css";

// const { Sider, Header, Content } = Layout;
// const { Option } = Select;

// const UserPage = () => {
//     const [showForm, setShowForm] = useState(false);
//     const [form] = Form.useForm();
//     const [links, setLinks] = useState([]);

//     const handleAddLink = (values) => {
//         setLinks((prevLinks) => [...prevLinks, values]);
//         form.resetFields();
//         setShowForm(false);
//     };

//     return (
//         <Layout style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
//             {/* Sidebar */}
//             <Sider width={200} style={{ background: "#fff" }}>
//                 <div style={{ padding: "16px 24px", fontSize: 20, fontWeight: 700 }}>
//                     🔗 LinksMe
//                 </div>
//                 <Menu
//                     mode="inline"
//                     defaultSelectedKeys={["1"]}
//                     style={{ height: "100%", borderRight: 0, fontWeight: "500" }}
//                 >
//                     <Menu.SubMenu key="1" icon={<EditOutlined />} title="Business">
//                         <Menu.Item key="1-1" icon={<DatabaseOutlined />}>Business Profile</Menu.Item>
//                         <Menu.Item key="1-2" icon={<DatabaseOutlined />}>Social Links</Menu.Item>
//                         <Menu.Item key="1-3" icon={<DatabaseOutlined />}>Affiliate Links</Menu.Item>
//                         <Menu.Item key="1-4" icon={<DatabaseOutlined />}>Products</Menu.Item>
//                         <Menu.Item key="1-5" icon={<DatabaseOutlined />}>Service</Menu.Item>
//                         <Menu.Item key="1-6" icon={<DatabaseOutlined />}>Course</Menu.Item>
//                         <Menu.Item key="1-7" icon={<DatabaseOutlined />}>Influencer</Menu.Item>
//                     </Menu.SubMenu>
//                     <Menu.Item key="2" icon={<LinkOutlined />}>
//                         Landing Page
//                     </Menu.Item>
//                     <Menu.Item key="3" icon={<TeamOutlined />}>
//                         Community
//                     </Menu.Item>
//                     <Menu.Item key="4" icon={<LineChartOutlined />}>
//                         Analytics
//                     </Menu.Item>
//                     <Menu.Item key="5" icon={<ProfileOutlined />}>
//                         Profile
//                     </Menu.Item>
//                     <Menu.Item key="6" icon={<SettingOutlined />}>
//                         Setting
//                     </Menu.Item>
//                 </Menu>
//             </Sider>

//             {/* Main Layout */}
//             <Layout>
//                 <Header
//                     style={{
//                         background: "#fff",
//                         padding: "0 24px",
//                         display: "flex",
//                         justifyContent: "flex-end",
//                         alignItems: "center",
//                         height: 64,
//                     }}
//                 >
//                     <Tooltip title="Mobile View">
//                         <Button icon={<MobileOutlined />} style={{ marginRight: 8 }} />
//                     </Tooltip>
//                     <Tooltip title="Desktop View">
//                         <Button icon={<DesktopOutlined />} style={{ marginRight: 16 }} />
//                     </Tooltip>
//                     <Avatar
//                         size={40}
//                         src="https://randomuser.me/api/portraits/men/86.jpg"
//                     />
//                 </Header>

//                 <Content
//                     style={{
//                         margin: 0,
//                         padding: 24,
//                         background: "#f5f5f5",
//                         display: "flex",
//                         gap: 24,
//                         height: "calc(100vh - 64px)",
//                     }}
//                 >
//                     {/* Left Side - Link List */}
//                     <Card style={{ flex: 1 }}>
//                         <Button
//                             type="primary"
//                             icon={<PlusOutlined />}
//                             style={{ background: "black", color: "white" }}
//                             onClick={() => setShowForm(!showForm)}
//                         >
//                             Add Link
//                         </Button>

//                         <Input.Search style={{ marginTop: '12px', borderRadius: '12px' }} placeholder="Search..." />


//                         {showForm && (
//                             <div style={{ marginTop: 24 }}>

//                                 <Form
//                                     layout="vertical"
//                                     form={form}
//                                     onFinish={handleAddLink}
//                                     autoComplete="off"
//                                 >
//                                     <Form.Item
//                                         label="Title"
//                                         name="title"
//                                         rules={[{ required: true, message: "Please enter a title" }]}
//                                     >
//                                         <Input placeholder="What is your title?" />
//                                     </Form.Item>

//                                     <Form.Item label="Description" name="description">
//                                         <Input placeholder="e.g. Product | Service | Course| Affiliate" />
//                                     </Form.Item>

//                                     <Form.Item
//                                         label="URL"
//                                         name="url"
//                                         rules={[{ required: true, message: "Please enter a URL" }]}
//                                     >
//                                         <Input placeholder="Enter url" />
//                                     </Form.Item>

//                                     <Form.Item
//                                         label="Choose Category"
//                                         name="category"
//                                         rules={[{ required: true, message: "Please select a category" }]}
//                                     >
//                                         <Select placeholder="Select">
//                                             <Option value="product">Product</Option>
//                                             <Option value="service">Service</Option>
//                                             <Option value="course">Course</Option>
//                                             <Option value="affiliate">Affiliate</Option>
//                                         </Select>
//                                     </Form.Item>

//                                     <Form.Item>
//                                         <Button
//                                             type="primary"
//                                             htmlType="submit"
//                                             style={{ backgroundColor: "black", width: '50%' }}
//                                         >
//                                             Add
//                                         </Button>
//                                     </Form.Item>
//                                 </Form>
//                             </div>
//                         )}

//                         {!showForm && (
//                             links.length > 0 ? (
//                                 <div style={{ marginTop: 24 }}>
//                                     <p style={{ fontWeight: 500, marginBottom: 12 }}>Links</p>
//                                     {links.map((link, index) => (
//                                         <div
//                                             key={index}
//                                             style={{
//                                                 display: "flex",
//                                                 alignItems: "center",
//                                                 justifyContent: "space-between",
//                                                 marginBottom: 12,
//                                                 background: "#f0f0f0",
//                                                 padding: "10px 14px",
//                                                 borderRadius: 8,
//                                             }}
//                                         >
//                                             <div style={{ display: "flex", alignItems: "center" }}>
//                                                 <LinkOutlined style={{ fontSize: 18, marginRight: 10 }} />
//                                                 <a
//                                                     href={link.url}
//                                                     target="_blank"
//                                                     rel="noopener noreferrer"
//                                                     style={{ color: "black", fontWeight: 500 }}
//                                                 >
//                                                     {link.title}
//                                                 </a>
//                                             </div>
//                                             <Button type="text" icon={<MoreOutlined />} />
//                                         </div>
//                                     ))}
//                                 </div>
//                             ) : (
//                                 <div style={{ marginTop: 40 }}>
//                                     <Empty description="No Links Found" />
//                                 </div>
//                             )
//                         )}
//                     </Card>

//                     {/* Right Side - Profile Preview */}
//                     <Card style={{ flex: 1, textAlign: "center", paddingTop: "8rem" }}>
//                         <Avatar
//                             size={80}
//                             src="https://randomuser.me/api/portraits/men/86.jpg"
//                         />
//                         <h3 style={{ marginTop: 10 }}>Hurryep Technology</h3>
//                         <div style={{ fontSize: 18, marginBottom: 10 }}>
//                             <GithubOutlined style={{ margin: "0 8px" }} />
//                             <TwitterOutlined style={{ margin: "0 8px" }} />
//                             <LinkedinOutlined style={{ margin: "0 8px" }} />
//                             <YoutubeOutlined style={{ margin: "0 8px" }} />
//                         </div>
//                         <Button style={{ width: "35rem", borderRadius: "16rem", background: 'black', color: 'white' }}>
//                             🔗 Add Link
//                         </Button>
//                     </Card>
//                 </Content>
//             </Layout>
//         </Layout>
//     );
// };

// export default UserPage;

// Back up code 07-06-2025




import React, { useState } from "react";
import {
    Layout,
    Avatar,
    Button,
    Card,
    Empty,
    Tooltip,
    Form,
    Input,
    Select
} from "antd";
import {
    SettingOutlined,
    LinkOutlined,
    LineChartOutlined,
    TeamOutlined,
    PlusOutlined,
    GithubOutlined,
    TwitterOutlined,
    LinkedinOutlined,
    YoutubeOutlined,
    MobileOutlined,
    DesktopOutlined,
    MoreOutlined,
} from "@ant-design/icons";
import "antd/dist/reset.css";
import SidebarMenu from "../../components/SidebarMenus/Sidebar";

const { Sider, Header, Content } = Layout;
const { Option } = Select;

const UserPage = () => {
    const [showForm, setShowForm] = useState(false);
    const [form] = Form.useForm();
    const [links, setLinks] = useState([]);

    const handleAddLink = (values) => {
        setLinks((prevLinks) => [...prevLinks, values]);
        form.resetFields();
        setShowForm(false);
    };

    return (
        <Layout style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>

            <SidebarMenu />
            {/* Main Layout */}
            <Layout>
                <Header
                    style={{
                        background: "#fff",
                        padding: "0 24px",
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        height: 64,
                    }}
                >
                    <Tooltip title="Mobile View">
                        <Button icon={<MobileOutlined />} style={{ marginRight: 8 }} />
                    </Tooltip>
                    <Tooltip title="Desktop View">
                        <Button icon={<DesktopOutlined />} style={{ marginRight: 16 }} />
                    </Tooltip>
                    <Avatar
                        size={40}
                        src="https://randomuser.me/api/portraits/men/86.jpg"
                    />
                </Header>

                <Content
                    style={{
                        margin: 0,
                        padding: 24,
                        background: "#f5f5f5",
                        display: "flex",
                        gap: 24,
                        height: "calc(100vh - 64px)",
                    }}
                >
                    {/* Left Side - Link List */}
                    <Card style={{ flex: 1 }}>
                        <Button
                            type="primary"
                            icon={<PlusOutlined />}
                            style={{ background: "black", color: "white" }}
                            onClick={() => setShowForm(!showForm)}
                        >
                            Add Link
                        </Button>

                        <Input.Search   style={{ marginTop: '12px', borderRadius: '12px' }} placeholder="Search..." />


                        {showForm && (
                            <div style={{ marginTop: 24 }}>

                                <Form
                                    layout="vertical"
                                    form={form}
                                    onFinish={handleAddLink}
                                    autoComplete="off"
                                >
                                    <Form.Item
                                        label="Title"
                                        name="title"
                                        rules={[{ required: true, message: "Please enter a title" }]}
                                    >
                                        <Input placeholder="What is your title?" />
                                    </Form.Item>

                                    <Form.Item label="Description" name="description">
                                        <Input placeholder="e.g. Product | Service | Course| Affiliate" />
                                    </Form.Item>

                                    <Form.Item
                                        label="URL"
                                        name="url"
                                        rules={[{ required: true, message: "Please enter a URL" }]}
                                    >
                                        <Input placeholder="Enter url" />
                                    </Form.Item>

                                    <Form.Item
                                        label="Choose Category"
                                        name="category"
                                        rules={[{ required: true, message: "Please select a category" }]}
                                    >
                                        <Select placeholder="Select">
                                            <Option value="product">Products</Option>
                                            <Option value="service">Service</Option>
                                            <Option value="course">Course</Option>
                                            <Option value="affiliate">Affiliate</Option>
                                        </Select>
                                    </Form.Item>

                                    <Form.Item>
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            style={{ backgroundColor: "black", width: '50%' }}
                                        >
                                            Add
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        )}

                        {!showForm && (
                            links.length > 0 ? (
                                <div style={{ marginTop: 24 }}>
                                    <p style={{ fontWeight: 500, marginBottom: 12 }}>Links</p>
                                    {links.map((link, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                marginBottom: 12,
                                                background: "#f0f0f0",
                                                padding: "10px 14px",
                                                borderRadius: 8,
                                            }}
                                        >
                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                <LinkOutlined style={{ fontSize: 18, marginRight: 10 }} />
                                                <a
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{ color: "black", fontWeight: 500 }}
                                                >
                                                    {link.title}
                                                </a>
                                            </div>
                                            <Button type="text" icon={<MoreOutlined />} />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div style={{ marginTop: 40 }}>
                                    <Empty description="No Links Found" />
                                </div>
                            )
                        )}
                    </Card>

                    {/* Right Side - Profile Preview */}
                    <Card style={{ flex: 1, textAlign: "center", paddingTop: "8rem" }}>
                        <Avatar
                            size={80}
                            src="https://randomuser.me/api/portraits/men/86.jpg"
                        />
                        <h3 style={{ marginTop: 10 }}>Hurryep Technology</h3>
                        <div style={{ fontSize: 18, marginBottom: 10 }}>
                            <GithubOutlined style={{ margin: "0 8px" }} />
                            <TwitterOutlined style={{ margin: "0 8px" }} />
                            <LinkedinOutlined style={{ margin: "0 8px" }} />
                            <YoutubeOutlined style={{ margin: "0 8px" }} />
                        </div>
                        <Button style={{ width: "35rem", borderRadius: "16rem", background: 'black', color: 'white' }}>
                            🔗 My Link
                        </Button>
                    </Card>
                </Content>
            </Layout>
        </Layout>
    );
};

export default UserPage;


///07-06-2025

