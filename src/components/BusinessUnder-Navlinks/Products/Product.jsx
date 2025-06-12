
// import React, { useState } from "react";
// import { Layout, Button, Card, Empty, Input, Row, Col, Modal, Form, Select, Upload, message, DatePicker, } from "antd";
// import { PlusOutlined, EyeOutlined, HeartFilled, UserOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";
// import SidebarMenu from "../../SidebarMenus/Sidebar";
// import './Product.css'
// const { Header, Content } = Layout;
// const { Option } = Select;
// import uploadicon from '../../../Assets/Upload-icon.png'
// import { Link } from "react-router-dom";
// const homeInteriorImages = [
//     "https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?cs=srgb&dl=pexels-houzlook-3797991.jpg&fm=jpg1",
//     "https://plus.unsplash.com/premium_photo-1661778773089-8718bcedb39e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMGludGVyaW9yfGVufDB8fDB8fHww",
//     "https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg",
// ];

// const dummyProducts = Array.from({ length: 40 }, (_, index) => ({
//     id: index, title: "Home Interior ", type: index % 2 === 0 ? "Furniture" : "Decor",
//     image: homeInteriorImages[index % homeInteriorImages.length] + "?auto=format&fit=crop&w=400&q=80",
// }));

// const ProdcuctPage = () => {
//     const [products, setProducts] = useState(dummyProducts);
//     const [isModalVisible, setIsModalVisible] = useState(false);
//     const [form] = Form.useForm();
//     const [categories, setCategories] = useState([
//         'skincare',
//         'cosmetics',
//         'fashion',
//         'haircare',
//         'healthcare',
//     ]);

//     const [addingCategory, setAddingCategory] = useState(false);
//     const [newCategoryName, setNewCategoryName] = useState('');
//     //Add new category pop part
//     const [modal1Open, setModal1Open] = useState(false);
//     //Add new category pop part

//     const handleAddCategory = () => {
//         if (newCategoryName && !categories.includes(newCategoryName.toLowerCase())) {
//             setCategories([...categories, newCategoryName.toLowerCase()]);
//             setNewCategoryName('');
//             setAddingCategory(false);
//         }
//     };


//     const showModal = () => {
//         setIsModalVisible(true);
//     };

//     const handleCancel = () => {
//         setIsModalVisible(false);
//         form.resetFields();
//     };

//     const handleAddProduct = (values) => {
//         const newProduct = {
//             id: products.length,
//             title: values.productName,
//             type: values.Category,
//             image: values.productImage?.[0]?.thumbUrl || "",
//         };

//         setProducts([newProduct, ...products]);
//         setIsModalVisible(false);
//         form.resetFields();
//     };

//     return (
//         <Layout style={{ height: "100vh", width: "100vw", overflow: "hidden", padding: '25px' }}>
//             <SidebarMenu />
//             <Layout style={{ padding: '15px', background: 'rgb(244 238 238)' }}>
//                 <Header
//                     style={{
//                         background: "#fff",
//                         padding: "0 24px",
//                         display: "flex",
//                         alignItems: "center",
//                         height: 64,
//                         justifyContent: "space-between", borderBottom: "1px solid #f0f0f0",
//                     }}
//                 >
//                     <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
//                         <Button
//                             type="primary"
//                             icon={<PlusOutlined />}
//                             onClick={showModal} style={{ background: 'black', color: 'white' }}
//                         >
//                             Add New
//                         </Button>

//                     </div>
//                     <Input.Search placeholder="Search..." className="custom-search-input" style={{ width: 600, height: '3rem' }} />

//                     <Button
//                         type="primary"
//                         icon={<EyeOutlined />}
//                         style={{ background: 'black', color: 'white' }}
//                     >
//                             <Link to="/User-product" >Preview</Link>
//                     </Button>
//                 </Header>

//                 <Content
//                     style={{
//                         margin: 0,
//                         padding: 24,
//                         background: "#fff",
//                         height: "calc(100vh - 64px)",
//                         overflowY: "auto",
//                     }}  
//                 >
//                     <h2 className="allproduct" >All Products</h2>
//                     {products.length > 0 ? (
//                         <Row gutter={[16, 16]}>
//                             {products.map((product) => (
//                                 <Col xs={12} sm={8} md={6} lg={4} key={product.id}>
//                                     <Card
//                                         hoverable
//                                         cover={
//                                             <div style={{ position: 'relative' }}>
//                                                 {product.image ? (
//                                                     <img
//                                                         alt={product.title}
//                                                         src={product.image}
//                                                         style={{ objectFit: 'cover', height: 150, width: '100%', borderRadius: '12px' }}
//                                                     />
//                                                 ) : (
//                                                     <div
//                                                         style={{
//                                                             background: '#f5f5f5',
//                                                             height: 150,
//                                                             display: 'flex',
//                                                             alignItems: 'center',
//                                                             justifyContent: 'center',
//                                                             fontSize: 16,
//                                                             color: '#999',
//                                                         }}
//                                                     >
//                                                         No Image
//                                                     </div>
//                                                 )}
//                                                 <HeartFilled className="Heartbtn"

//                                                 />
//                                             </div>
//                                         }
//                                     >

//                                         <Card.Meta title={product.title} />
//                                         <p>
//                                             <UserOutlined style={{ marginRight: '5px', marginTop: '12px' }} className="type-badge1" />
//                                             {product.type}
//                                         </p>
//                                         <p>₹ 20,000</p>

//                                     </Card>
//                                 </Col>
//                             ))}
//                         </Row>
//                     ) : (
//                         <Empty description="No Products Found" />
//                     )}
//                 </Content>

//                 <Modal
//                     title="Add New Product"
//                     open={isModalVisible}
//                     onCancel={handleCancel}
//                     footer={null}
//                 >
//                     <h5>Fill Detail about the product</h5>

//                     <Form form={form} layout="vertical" onFinish={handleAddProduct}>
//                         <Row gutter={16}>
//                             <Col span={12}>
//                                 <Form.Item
//                                     name="brandName"
//                                     label="Brand Name"
//                                     rules={[{ required: true, message: "Please input the brand name!" }]}
//                                 >
//                                     <Input placeholder="Enter brand name" />
//                                 </Form.Item>
//                             </Col>

//                             <Col span={12}>
//                                 <Form.Item
//                                     name="productName"
//                                     label="Product Name"
//                                     rules={[{ required: true, message: "Please input the product name!" }]}
//                                 >
//                                     <Input placeholder="Enter product name" />
//                                 </Form.Item>
//                             </Col>
//                         </Row>

//                         <Row gutter={16}>
//                             <Col span={12}>
//                                 <Form.Item
//                                     name="shortDescription"
//                                     label="Short Description"
//                                     rules={[{ required: true, message: "Please input the short description!" }]}
//                                 >
//                                     <Input placeholder="Enter short description" />
//                                 </Form.Item>
//                             </Col>

//                             <Col span={12}>
//                                 <Form.Item
//                                     name="price"
//                                     label="Price"
//                                     rules={[{ required: true, message: "Please input the price!" }]}
//                                 >
//                                     <Input placeholder="Enter price" />
//                                 </Form.Item>
//                             </Col>
//                         </Row>

//                         <Row gutter={16}>
//                             <Col span={12}>
//                                 <Form.Item
//                                     name="Product URL"
//                                     label="Product URL"
//                                     rules={[{ required: true, message: "Please input the product url!" }]}
//                                 >
//                                     <Input placeholder="enter url" />
//                                 </Form.Item>
//                             </Col>

//                             <Col span={12}>
//                                 <Form.Item
//                                     name="Rating"
//                                     label="Rating"
//                                     rules={[{ required: true, message: "Please input the rating!" }]}
//                                 >
//                                     <Input placeholder="enter rating" />
//                                 </Form.Item>
//                             </Col>
//                         </Row>

//                         <Row gutter={16}>
//                             <Col span={12}>
//                                 <Form.Item
//                                     name="Product Description"
//                                     label="Product Description"
//                                     rules={[{ required: true, message: "Please input the product description!" }]}
//                                 >
//                                     <Input placeholder="enter description" />
//                                 </Form.Item>
//                             </Col>

//                             <Col span={12}>
//                                 <Form.Item
//                                     name="Product Details"
//                                     label="Product Details"
//                                     rules={[{ required: true, message: "Please input the product details!" }]}
//                                 >
//                                     <Input placeholder="enter details" type="text" />
//                                 </Form.Item>
//                             </Col>
//                         </Row>

//                         <Row gutter={16}>
//                             <Col span={12}>
//                                 <Form.Item
//                                     name="Specification"
//                                     label="Specification"
//                                     rules={[{ required: true, message: "Please input the specification!" }]}
//                                 >
//                                     <Input placeholder="enter specification" />
//                                 </Form.Item>
//                             </Col>

//                             <Col span={12}>
//                                 <Form.Item
//                                     name="Category"
//                                     label="Category"
//                                     rules={[{ required: true, message: 'Please select a category!' }]}
//                                 >
//                                     <div style={{ display: 'flex', gap: '8px' }}>
//                                         <Select
//                                             showSearch
//                                             placeholder="Choose Category"
//                                             optionFilterProp="children"
//                                             filterOption={(input, option) =>
//                                                 (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
//                                             }
//                                             style={{ flex: 1 }}
//                                             allowClear
//                                         >
//                                             <Option value="skincare">Skincare</Option>
//                                             <Option value="cosmetics">Cosmetics</Option>
//                                             <Option value="fashion">Fashion</Option>
//                                             <Option value="haircare">Hair Care</Option>
//                                             <Option value="healthcare">Health Care</Option>
//                                         </Select>

//                                         <Button
//                                             type="default"
//                                             icon={<PlusOutlined />}
//                                             style={{ padding: '0 12px' }}
//                                             onClick={() => setModal1Open(true)}
//                                         />
//                                         <Modal
//                                             title="Add New Category"
//                                             style={{ top: 20 }}
//                                             open={modal1Open}
//                                             onOk={() => setModal1Open(false)}
//                                             onCancel={() => setModal1Open(false)}
//                                             okText="Save"
//                                             okButtonProps={{
//                                                 style: {
//                                                     background: 'black'
//                                                 }
//                                             }}
//                                         >
//                                             <Form form={form} layout="vertical" autoComplete="off">
//                                                 <Form.Item
//                                                     name="Category Name"
//                                                     label="Category Name"
//                                                     rules={[{ message: "Please input the category!" }]}
//                                                 >
//                                                     <Input placeholder="Enter the category name" />
//                                                 </Form.Item>
//                                             </Form>

//                                         </Modal>
//                                     </div>
//                                 </Form.Item>

//                             </Col>
//                         </Row>

//                         <Row gutter={16}>
//                             <Col span={12}>
//                                 <Form.Item
//                                     name="productImage"
//                                     label="Product Image"
//                                     valuePropName="fileList"
//                                     getValueFromEvent={e => {
//                                         if (Array.isArray(e)) {
//                                             return e;
//                                         }
//                                         return e && e.fileList;
//                                     }}
//                                     rules={[{ required: true, message: "Please upload the product image!" }]}
//                                 >
//                                     <Upload.Dragger
//                                         name="files"
//                                         multiple={false}
//                                         beforeUpload={file => {
//                                             const isImage = file.type.startsWith('image/');
//                                             if (!isImage) {
//                                                 message.error('You can only upload image files!');
//                                             }
//                                             return isImage || Upload.LIST_IGNORE;
//                                         }}
//                                         maxCount={1}
//                                     >
//                                         <p className="ant-upload-drag-icon">
//                                             <img
//                                                 src={uploadicon}
//                                                 alt="Upload"
//                                                 style={{ width: 50, height: 50 }}
//                                             />
//                                         </p>

//                                         <p style={{ fontSize: '9px' }}>
//                                             Click or drag image file to this area to upload
//                                         </p>
//                                     </Upload.Dragger>

//                                 </Form.Item>
//                             </Col>
//                         </Row>

//                         <Form.Item>
//                             <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
//                                 <Button type="default" onClick={handleCancel}>Cancel</Button>
//                                 <Button type="primary" htmlType="submit" className="Addproduct">
//                                     Save
//                                 </Button>
//                             </div>
//                         </Form.Item>

//                     </Form>
//                 </Modal>
//             </Layout>
//         </Layout>
//     );
// };
// export default ProdcuctPage;
import React, { useState } from "react";
import {
  Layout, Button, Card, Empty, Input, Row, Col, Modal, Form, Select,
  Upload, message, DatePicker, Spin
} from "antd";
import {
  PlusOutlined, EyeOutlined, HeartFilled, UserOutlined
} from "@ant-design/icons";
import SidebarMenu from "../../SidebarMenus/Sidebar";
import './Product.css';
import uploadicon from '../../../Assets/Upload-icon.png';
import { useNavigate } from "react-router-dom";

const { Header, Content } = Layout;
const { Option } = Select;

const homeInteriorImages = [
  "https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?cs=srgb&dl=pexels-houzlook-3797991.jpg&fm=jpg1",
  "https://plus.unsplash.com/premium_photo-1661778773089-8718bcedb39e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMGludGVyaW9yfGVufDB8fDB8fHww",
  "https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg",
];

const dummyProducts = Array.from({ length: 40 }, (_, index) => ({
  id: index,
  title: "Home Interior",
  type: index % 2 === 0 ? "Furniture" : "Decor",
  image: homeInteriorImages[index % homeInteriorImages.length] + "?auto=format&fit=crop&w=400&q=80",
}));

const ProdcuctPage = () => {
  const [products, setProducts] = useState(dummyProducts);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modal1Open, setModal1Open] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const showModal = () => setIsModalVisible(true);
  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

    const handlePreview = () => {
        setLoading(true);
        setTimeout(() => {
        navigate("/User-product");
        }, 500);
    };

  const handleAddProduct = (values) => {
    const newProduct = {
      id: products.length,
      title: values.productName,
      type: values.Category,
      image: values.productImage?.[0]?.thumbUrl || "",
    };
    setProducts([newProduct, ...products]);
    setIsModalVisible(false);
    form.resetFields();
  };

  return (
    <>
      {loading && (
        <div className="loading" >
          <Spin size="large" tip="Loading preview..." />
        </div>
      )}

      <Layout style={{ height: "100vh", width: "100vw", overflow: "hidden", padding: '25px' }}>
        <SidebarMenu />
        <Layout style={{ padding: '15px', background: 'rgb(244 238 238)' }}>
          <Header
            style={{
              background: "#fff",
              padding: "0 24px",
              display: "flex",
              alignItems: "center",
              height: 64,
              justifyContent: "space-between",
              borderBottom: "1px solid #f0f0f0",
            }}
          >
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={showModal}
              style={{ background: 'black', color: 'white' }}
            >
              Add New
            </Button>

            <Input.Search
              placeholder="Search..."
              className="custom-search-input"
              style={{ width: 600, height: '3rem' }}
            />

            <Button
              type="primary"
              icon={<EyeOutlined />}
              style={{ background: 'black', color: 'white' }}
              onClick={handlePreview}
            >
              Preview
            </Button>
          </Header>

          <Content
            style={{
              margin: 0,
              padding: 24,
              background: "#fff",
              height: "calc(100vh - 64px)",
              overflowY: "auto",
            }}
          >
            <h2 className="allproduct">All Products</h2>
            {products.length > 0 ? (
              <Row gutter={[16, 16]}>
                {products.map((product) => (
                  <Col xs={12} sm={8} md={6} lg={4} key={product.id}>
                    <Card
                      hoverable
                      cover={
                        <div style={{ position: 'relative' }}>
                          {product.image ? (
                            <img
                              alt={product.title}
                              src={product.image}
                              style={{ objectFit: 'cover', height: 150, width: '100%', borderRadius: '12px' }}
                            />
                          ) : (
                            <div
                              style={{
                                background: '#f5f5f5',
                                height: 150,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: 16,
                                color: '#999',
                              }}
                            >
                              No Image
                            </div>
                          )}
                          <HeartFilled className="Heartbtn" />
                        </div>
                      }
                    >
                      <Card.Meta title={product.title} />
                      <p>
                        <UserOutlined style={{ marginRight: '5px', marginTop: '12px' }} className="type-badge1" />
                        {product.type}
                      </p>
                      <p>₹ 20,000</p>
                    </Card>
                  </Col>
                ))}
              </Row>
            ) : (
              <Empty description="No Products Found" />
            )}
          </Content>

          {/* Add Product Modal */}
          <Modal title="Add New Product" open={isModalVisible} onCancel={handleCancel} footer={null}>
            <h5>Fill Detail about the product</h5>
            <Form form={form} layout="vertical" onFinish={handleAddProduct}>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="brandName" label="Brand Name" rules={[{ required: true }]}>
                    <Input placeholder="Enter brand name" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="productName" label="Product Name" rules={[{ required: true }]}>
                    <Input placeholder="Enter product name" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="shortDescription" label="Short Description" rules={[{ required: true }]}>
                    <Input placeholder="Enter short description" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="price" label="Price" rules={[{ required: true }]}>
                    <Input placeholder="Enter price" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="Product URL" label="Product URL" rules={[{ required: true }]}>
                    <Input placeholder="Enter URL" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="Rating" label="Rating" rules={[{ required: true }]}>
                    <Input placeholder="Enter rating" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="Product Description" label="Product Description" rules={[{ required: true }]}>
                    <Input placeholder="Enter description" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="Product Details" label="Product Details" rules={[{ required: true }]}>
                    <Input placeholder="Enter details" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="Specification" label="Specification" rules={[{ required: true }]}>
                    <Input placeholder="Enter specification" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="Category"
                    label="Category"
                    rules={[{ required: true, message: 'Please select a category!' }]}
                  >
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <Select
                        showSearch
                        placeholder="Choose Category"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        style={{ flex: 1 }}
                        allowClear
                      >
                        <Option value="skincare">Skincare</Option>
                        <Option value="cosmetics">Cosmetics</Option>
                        <Option value="fashion">Fashion</Option>
                        <Option value="haircare">Hair Care</Option>
                        <Option value="healthcare">Health Care</Option>
                      </Select>
                      <Button
                        type="default"
                        icon={<PlusOutlined />}
                        onClick={() => setModal1Open(true)}
                      />
                      <Modal
                        title="Add New Category"
                        open={modal1Open}
                        onOk={() => setModal1Open(false)}
                        onCancel={() => setModal1Open(false)}
                        okText="Save"
                        okButtonProps={{ style: { background: 'black' } }}
                      >
                        <Form layout="vertical">
                          <Form.Item
                            name="Category Name"
                            label="Category Name"
                            rules={[{ message: "Please input the category!" }]}
                          >
                            <Input placeholder="Enter the category name" />
                          </Form.Item>
                        </Form>
                      </Modal>
                    </div>
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="productImage"
                    label="Product Image"
                    valuePropName="fileList"
                    getValueFromEvent={e => Array.isArray(e) ? e : e?.fileList}
                    rules={[{ required: true }]}
                  >
                    <Upload.Dragger
                      name="files"
                      multiple={false}
                      beforeUpload={file => {
                        const isImage = file.type.startsWith('image/');
                        if (!isImage) {
                          message.error('You can only upload image files!');
                        }
                        return isImage || Upload.LIST_IGNORE;
                      }}
                      maxCount={1}
                    >
                      <p className="ant-upload-drag-icon">
                        <img
                          src={uploadicon}
                          alt="Upload"
                          style={{ width: 50, height: 50 }}
                        />
                      </p>
                      <p style={{ fontSize: '9px' }}>
                        Click or drag image file to this area to upload
                      </p>
                    </Upload.Dragger>
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item>
                <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
                  <Button onClick={handleCancel}>Cancel</Button>
                  <Button type="primary" htmlType="submit" className="Addproduct">
                    Save
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </Modal>
        </Layout>
      </Layout>
    </>
  );
};

export default ProdcuctPage;
