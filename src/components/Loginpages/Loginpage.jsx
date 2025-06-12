// import React, { useState } from 'react';
// import { Row, Col, Typography, Input, Button, Form } from 'antd';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
//  import './Loginpage.css';
// import Config from '../../Api-service/config';
// import '../Landingpage/Landingpage.css'
// const { Title, Text } = Typography;

// const EmailLoginForm = () => {
//     const [emailSubmitted, setEmailSubmitted] = useState(false);
//     const [email, setEmail] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [success, setSuccess] = useState(false);

//     const onEmailFinish = (values) => {
//         setEmail(values.email);
//         setEmailSubmitted(true);
//     };

//     const onPasswordFinish = async (values) => {
//         setLoading(true);
//         try {
//             const response = await fetch(`${Config.API_BASE_URL}/login`, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({
//                     email,
//                     password: values.password,
//                 }),
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 toast.success('Logged in successfully!');
//                 setSuccess(true);
//             } else {
//                 toast.error(data.message || 'Login failed');
//             }
//         } catch (error) {
//             toast.error('Network error');
//         }
//         setLoading(false);
//     };

//     return (
//         <Row className="signin-container">
//             <Col span={12} className="left-panel">
//                 <img
//                     src="https://www.shutterstock.com/shutterstock/videos/3722316333/thumb/1.jpg?ip=x480"
//                     alt="Background"
//                     className="background-image"
//                 />
//             </Col>

//             <Col span={12} className="right-panel">
//                 <div className="form-wrapper">
//                     <Title level={2} className="signintext">
//                         {success ? 'SUCCESS!' : !emailSubmitted ? 'ENTER YOUR EMAIL' : 'ENTER YOUR PASSWORD'}
//                     </Title>

//                     {!emailSubmitted && (
//                         <Form name="email-form" layout="vertical" onFinish={onEmailFinish} className="form">
//                             <Form.Item
//                                 label={<span>Email <span style={{ color: 'red' }}>*</span></span>}
//                                 name="email"
//                                 rules={[
//                                     { required: true, message: 'Please enter your email!' },
//                                     { type: 'email', message: 'Please enter a valid email!' },
//                                 ]}
//                             >
//                                 <Input placeholder="Enter your email" className="inputs" />
//                             </Form.Item>

//                             <Form.Item>
//                                 <Button
//                                     type="primary"
//                                     htmlType="submit"
//                                     block
//                                     className="verifybtn"
//                                     loading={loading}
//                                 >
//                                     Continue
//                                 </Button>
//                             </Form.Item>
//                         </Form>
//                     )}

//                     {emailSubmitted && !success && (
//                         <Form name="password-form" layout="vertical" onFinish={onPasswordFinish} className="form">
//                             <Form.Item
//                                 label={<span>Password <span style={{ color: 'red' }}>*</span></span>}
//                                 name="password"
//                                 rules={[{ required: true, message: 'Please enter your password!' }]}
//                             >
//                                 <Input.Password placeholder="Enter your password" className="inputs" />
//                             </Form.Item>
//                             <div className='container'>
//                                 <Button>
//                                     Resend OTP
//                                 </Button>
//                                 <div>
//                                     Forgot Password
//                                 </div>
//                             </div>

//                             <Form.Item>
//                                 <Button
//                                     type="primary"
//                                     htmlType="submit"
//                                     block
//                                     className="verifybtn"
//                                     loading={loading}
//                                 >
//                                     SignIn
//                                 </Button>
//                             </Form.Item>
//                         </Form>
//                     )}
//                 </div>
//             </Col>

//             <ToastContainer position="top-right" autoClose={3000} />
//         </Row>
//     );
// };

// export default EmailLoginForm;




// import React, { useState, useEffect, useRef } from 'react';
// import { Row, Col, Typography, Input, Button, Form } from 'antd';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './Loginpage.css';
// import Config from '../../Api-service/config';
// import '../Landingpage/Landingpage.css';
// import { FcGoogle } from 'react-icons/fc';
// import { useNavigate } from 'react-router-dom';

// const { Title } = Typography;

// const EmailLoginForm = () => {
//     const [emailSubmitted, setEmailSubmitted] = useState(false);
//     const [email, setEmail] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [success, setSuccess] = useState(false);
//     const [resendTimer, setResendTimer] = useState(0);

//     const timerRef = useRef(null);
//     const navigate = useNavigate();

//     const onEmailFinish = (values) => {
//         setEmail(values.email);
//         setEmailSubmitted(true);
//         setResendTimer(0);
//     };

//     const onPasswordFinish = async (values) => {
//         setLoading(true);
//         try {
//             const response = await fetch(`${Config.API_BASE_URL}/login`, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({
//                     email,
//                     password: values.password,
//                 }),
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 toast.success('Logged in successfully!');
//                 setTimeout(() => {
//                     navigate('/dashboard');
//                 }, 3000);
//             } else {
//                 toast.error(data.message || 'Login failed');
//             }
//         } catch (error) {
//             toast.error('Network error');
//         }
//         setLoading(false);
//     };

//     const handleResendOTP = () => {
//         toast.info('OTP has been resent.');
//         setResendTimer(30);
//     };

//     useEffect(() => {
//         if (resendTimer === 0) {
//             if (timerRef.current) {
//                 clearInterval(timerRef.current);
//             }
//             return;
//         }

//         timerRef.current = setInterval(() => {
//             setResendTimer((prev) => {
//                 if (prev <= 1) {
//                     clearInterval(timerRef.current);
//                     return 0;
//                 }
//                 return prev - 1;
//             });
//         }, 1000);

//         return () => clearInterval(timerRef.current);
//     }, [resendTimer]);

//     return (
//         <Row className="signin-container">
//             <Col span={12} className="left-panel">
//                 <img
//                     src="https://www.shutterstock.com/shutterstock/videos/3722316333/thumb/1.jpg?ip=x480"
//                     alt="Background"
//                     className="background-image"
//                 />
//             </Col>

//             <Col span={12} className="right-panel">
//                 <div className="form-wrapper">
//                     <div style={{ textAlign: 'center' }}>
//                         {(!emailSubmitted && !success) && (
// <div style={{ textAlign: 'center' }}>
//     <Title level={2} className="signintext">SIGN IN / SIGN UP</Title>
//     <p>Welcome back! Please enter your details.</p>
// </div>
//                         )}

//                     </div>

//                     {!emailSubmitted && (
//                         <Form name="email-form" layout="vertical" onFinish={onEmailFinish} className="form">
//                             <Form.Item
//                                 label={<span>Email <span style={{ color: 'red' }}>*</span></span>}
//                                 name="email"
//                                 rules={[
//                                     { required: true, message: 'Please enter your email!' },
//                                     { type: 'email', message: 'Please enter a valid email!' },
//                                 ]}
//                             >
//                                 <Input placeholder="Enter your email" className="inputs" />
//                             </Form.Item>

//                             <Form.Item>
//                                 <Button
//                                     type="primary"
//                                     htmlType="submit"
//                                     block
//                                     className="verifybtn"
//                                     loading={loading}
//                                 >
//                                     Continue
//                                 </Button>
//                             </Form.Item>
//                             <Form.Item>
//                                 <Button icon={<FcGoogle size={24} />} block className="inputs">
//                                     Continue with Google
//                                 </Button>
//                             </Form.Item>
//                         </Form>
//                     )}

//                     {emailSubmitted && !success && (
//                         <Form name="password-form" layout="vertical" onFinish={onPasswordFinish} className="form">
//                             <Form.Item
//                                 label={<span>Password <span style={{ color: 'red' }}>*</span></span>}
//                                 name="password"
//                                 rules={[{ required: true, message: 'Please enter your password!' }]}
//                             >
//                                 <Input.Password placeholder="Enter your password" className="inputs" />
//                             </Form.Item>

//                             <div
//                                 className="container"
//                                 style={{
//                                     display: 'flex',
//                                     justifyContent: 'space-between',
//                                     alignItems: 'center',
//                                     marginBottom: '10px',
//                                 }}
//                             >
//                                 <Button
//                                     type="link"
//                                     disabled={resendTimer > 0}
//                                     onClick={handleResendOTP}
//                                     style={{ paddingLeft: 0, color: 'black' }}
//                                 >
//                                     {resendTimer > 0 ? `Resend OTP in ${resendTimer}s` : 'Resend OTP'}
//                                 </Button>

//                                 <div style={{ cursor: 'pointer', color: '#1890ff' }}>
//                                     Forgot Password
//                                 </div>
//                             </div>

//                             <Form.Item>
//                                 <Button
//                                     type="primary"
//                                     htmlType="submit"
//                                     block
//                                     className="verifybtn"
//                                     loading={loading}
//                                 >
//                                     SignIn
//                                 </Button>
//                             </Form.Item>
//                         </Form>
//                     )}
//                 </div>
//             </Col>

//             <ToastContainer position="top-right" autoClose={3000} />
//         </Row>
//     );
// };

// export default EmailLoginForm;

/////Backup code 27/05/2025




import React, { useEffect, useRef } from 'react';
import { Row, Col, Typography, Input, Button, Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import mainimage from '../../Assets/mainimage.avif'
import './Loginpage.css';

import {
  setEmail,
  setEmailSubmitted,
  setResendTimer,
  loginUser,
} from '../Redux/Engines/Login-slice/Loginslice';

const { Title } = Typography;

const EmailLoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const timerRef = useRef(null);

  const {
    email,
    emailSubmitted,
    loading,
    success,
    resendTimer,
    error,
  } = useSelector((state) => state.login);

  const onEmailFinish = (values) => {
    dispatch(setEmail(values.email));
    dispatch(setEmailSubmitted(true));
    dispatch(setResendTimer(0));
  };

  const onPasswordFinish = async (values) => {
    const result = await dispatch(loginUser({ email, password: values.password }));

    if (loginUser.fulfilled.match(result)) {

      toast.success('Logged in successfully!');
      setTimeout(() => {
        navigate('/Userpage');
      }, 3000);
    } else {
      toast.error(result.payload || 'Login failed');
    }
  };

  const handleResendOTP = () => {
    toast.info('OTP has been resent.');
    dispatch(setResendTimer(30));
  };

  useEffect(() => {
    if (resendTimer === 0) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      return;
    }

    timerRef.current = setInterval(() => {
      dispatch(setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      }));
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [resendTimer, dispatch]);

  return (
    <Row className="signin-container">
      <Col span={12} className="left-panel">
        <img
          src={mainimage}
          alt="Background"
          className="background-image"
        />
      </Col>

      <Col span={12} className="right-panel">
        <div className="form-wrapper">
          <div style={{ textAlign: 'center' }}>
            {(!emailSubmitted && !success) && (
              <>
                <Title level={2} className="signintext">SIGN IN / SIGN UP</Title>
                <p>Welcome back! Please enter your details.</p>
              </>
            )}
          </div>

          {!emailSubmitted && (
            <Form name="email-form" layout="vertical" onFinish={onEmailFinish} className="form">
              <Form.Item
                label={<span>Email <span style={{ color: 'red' }}>*</span></span>}
                name="email"
                rules={[
                  { required: true, message: 'Please enter your email!' },
                  { type: 'email', message: 'Please enter a valid email!' },
                ]}
              >
                <Input placeholder="Enter your email" className="inputs" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block className="verifybtn" loading={loading}>
                  Continue
                </Button>
              </Form.Item>
              <Form.Item>
                <Button icon={<FcGoogle size={24} />} block className="inputs">
                  Continue with Google
                </Button>
              </Form.Item>
            </Form>
          )}

          {emailSubmitted && !success && (
            <Form name="password-form" layout="vertical" onFinish={onPasswordFinish} className="form">
              <Form.Item
                label={<span>Password <span style={{ color: 'red' }}>*</span></span>}
                name="password"
                rules={[{ required: true, message: 'Please enter your password!' }]}
              >
                <Input.Password placeholder="Enter your password" className="inputs" />
              </Form.Item>

              <div className="container" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <Button
                  type="link"
                  disabled={resendTimer > 0}
                  onClick={handleResendOTP}
                  style={{ paddingLeft: 0, color: 'black' }}
                >
                  {resendTimer > 0 ? `Resend OTP in ${resendTimer}s` : 'Resend OTP'}
                </Button>

                <div style={{ cursor: 'pointer', color: '#1890ff' }}>
                  Forgot Password
                </div>
              </div>

              <Form.Item>
                <Button type="primary" htmlType="submit" block className="verifybtn" loading={loading}>
                  SignIn
                </Button>
              </Form.Item>
            </Form>
          )}
        </div>
      </Col>

      <ToastContainer position="top-right" autoClose={3000} />
    </Row>
  );
};

export default EmailLoginForm;