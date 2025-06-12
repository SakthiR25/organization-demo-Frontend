
// import React, { useState, useEffect } from 'react';
// import { Row, Col, Typography, Input, Button, Form } from 'antd';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './SignUpPage.css';
// import { FcGoogle } from 'react-icons/fc';
// const { Title, Text } = Typography;
// import Config from '../../Api-service/config';
// import { useNavigate } from 'react-router-dom';
// const SignInPage = () => {
//   const [emailSubmitted, setEmailSubmitted] = useState(false);
//   const [otpVerified, setOtpVerified] = useState(false);
//   const [email, setEmail] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [countdown, setCountdown] = useState(0);
//   const navigate = useNavigate(); // Make sure this line is present

//   useEffect(() => {
//     let timer;
//     if (countdown > 0) {
//       timer = setTimeout(() => setCountdown(countdown - 1), 1000);
//     }
//     return () => clearTimeout(timer);
//   }, [countdown]);

//   const onEmailFinish = async (values) => {
//     setLoading(true);
//     try {
//       const response = await fetch(`${Config.API_BASE_URL}/send-otp`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email: values.email }),
//       });
//       const data = await response.json();

//       if (response.ok) {
//         setEmail(values.email);
//         setEmailSubmitted(true);
//         toast.success('OTP sent to your email!');
//         setCountdown(30);
//       } else {
//         toast.error(data.message || 'Failed to send OTP');
//       }
//     } catch (error) {
//       toast.error('Network error');
//     }
//     setLoading(false);
//   };

//   const onOtpFinish = async (values) => {
//     setLoading(true);
//     try {
//       const response = await fetch(`${Config.API_BASE_URL}/verify-otp`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, otp: values.otp }),
//       });
//       const data = await response.json();

//       if (response.ok) {
//         setOtpVerified(true);
//         toast.success('OTP verified successfully!');
//       } else {
//         toast.error(data.message || 'OTP verification failed');
//       }
//     } catch (error) {
//       toast.error('Network error');
//     }
//     setLoading(false);
//   };

//   // const onFinalFormSubmit = async (values) => {
//   //   setLoading(true);
//   //   try {
//   //     const payload = {
//   //       email,
//   //       fullname: values.fullname,
//   //       password: values.password,
//   //       confirmPassword: values.confirmPassword,
//   //     };

//   //     const response = await fetch(`${Config.API_BASE_URL}/register`, {
//   //       method: 'POST',
//   //       headers: { 'Content-Type': 'application/json' },
//   //       body: JSON.stringify(payload),
//   //     });

//   //     const data = await response.json();

//   //     if (response.ok) {
//   //       toast.success('User registered successfully!');
//   //        setTimeout(() => {
//   //       navigate('/login');
//   //     }, 6000); 
//   //     } else {
//   //       toast.error(data.message || 'Registration failed');
//   //     }
//   //         navigate('/login');

//   //   } catch (error) {
//   //   }
//   //   setLoading(false);

//   // };


//   const onFinalFormSubmit = async (values) => {
//     setLoading(true);
//     try {
//       const payload = {
//         email,
//         fullname: values.fullname,
//         password: values.password,
//         confirmPassword: values.confirmPassword,
//       };

//       const response = await fetch(`${Config.API_BASE_URL}/register`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         toast.success('User registered successfully!');
//         setTimeout(() => {
//           navigate('/login');
//         }, 3000);
//       } else {
//         toast.error(data.message || 'Registration failed');
//       }
//     } catch (error) {
//       toast.error('An error occurred during registration');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Row className="signin-container">
//       <Col span={12} className="left-panel">
//         <img
//           src="https://www.shutterstock.com/shutterstock/videos/3722316333/thumb/1.jpg?ip=x480"
//           alt="Background"
//           className="background-image"
//         />
//       </Col>

//       <Col span={12} className="right-panel">
//         <div className="form-wrapper">
//           <Title level={2} className='signintext'>
//             {!emailSubmitted
//               ? 'SIGN IN / SIGN UP'
//               : otpVerified
//                 ? 'CREATE YOUR PROFILE'
//                 : ''}
//           </Title>

//           {!emailSubmitted && (
//             <Text className='signintext'>
//               Welcome back! Please enter your details.
//             </Text>
//           )}

//           {emailSubmitted && otpVerified && (
//             <Text className='subtext'>
//               Add details to setup your account
//             </Text>
//           )}

//           {/* Email Form */}
//           {!emailSubmitted && (
//             <Form name="email-form" layout="vertical" onFinish={onEmailFinish} className="form">
//               <Form.Item
//                 label={<span>Email <span style={{ color: 'red' }}>*</span></span>}
//                 name="email"
//                 rules={[
//                   { required: true, message: 'Please enter your email!' },
//                   { type: 'email', message: 'Please enter a valid email!'}
//                 ]}
//               >
//                 <Input placeholder="Enter your email" className='inputs' />
//               </Form.Item>
//               <p>
//                 Already have an account?{' '}
//                 <span>
//                   <a href="/login" style={{ color: 'blue' }}>Login</a>
//                 </span>
//               </p>
//               <Form.Item>
//                 <Button
//                   type="primary"
//                   htmlType="submit"
//                   block
//                   className='verifybtn'
//                   loading={loading}
//                 >
//                   Continue
//                 </Button>
//               </Form.Item>

//               <Form.Item>
//                 <Button icon={<FcGoogle size={24} />} block className="inputs">
//                   Continue with Google
//                 </Button>
//               </Form.Item>
//             </Form>
//           )}

//           {/* OTP Form */}
//           {emailSubmitted && !otpVerified && (
//             <Form name="otp-form" layout="vertical" onFinish={onOtpFinish} className="form">
//               <Form.Item
//                 className='Inputss'
//                 label="OTP"
//                 name="otp"
//                 rules={[{ required: true, message: 'Please enter the OTP!' }]}
//               >
//                 <Input.OTP
//                   length={6}
//                   separator={i => <span style={{ color: i & 1 ? 'red' : 'blue' }}>—</span>}
//                   onChange={text => console.log('onChange:', text)}
//                   onInput={value => console.log('onInput:', value)}
//                 />              </Form.Item>

//               <p className='verifytxt'>We sent a 6-digit verification code to your inbox</p>
//               <p style={{ lineHeight: '15px', paddingLeft: '9rem' }}>
//                 Didn't receive code?{' '}
//                 <button
//                   type="button"
//                   className='resend'
//                   onClick={() => setCountdown(30)}
//                   disabled={countdown > 0}
//                 >
//                   {countdown > 0 ? `Resend in ${countdown}s` : 'Resend Code'}
//                 </button>
//               </p>

//               <Form.Item>
//                 <Button
//                   type="primary"
//                   htmlType="submit"
//                   block
//                   className='verifybtn'
//                   loading={loading}
//                 >
//                   Verify OTP
//                 </Button>
//               </Form.Item>
//             </Form>
//           )}

//           {/* Final Form */}
//           {otpVerified && (
//             <Form name="final-form" layout="vertical" onFinish={onFinalFormSubmit} className="form">
//               <Form.Item
//                 label="Email"
//                 name="email"
//                 rules={[{ required: true, message: 'Please enter your email Id!' }]}
//               >
//                 <Input placeholder="Enter your email Id" className='inputs' />
//               </Form.Item>

//               <Form.Item
//                 label="Password"
//                 name="password"
//                 rules={[{ required: true, message: 'Please enter your password!' }]}
//                 hasFeedback
//               >
//                 <Input.Password placeholder="Enter your password" className="inputs" />
//               </Form.Item>

//               <Form.Item
//                 label="Confirm Password"
//                 name="confirmPassword"
//                 dependencies={['password']}
//                 hasFeedback
//                 rules={[
//                   { required: true, message: 'Please confirm your password!' },
//                   ({ getFieldValue }) => ({
//                     validator(_, value) {
//                       if (!value || getFieldValue('password') === value) {
//                         return Promise.resolve();
//                       }
//                       return Promise.reject(new Error('Passwords do not match!'));
//                     },
//                   }),
//                 ]}
//               >
//                 <Input.Password placeholder="Confirm your password" className='inputs' />
//               </Form.Item>

//               <Form.Item>
//                 <Button
//                   type="primary"
//                   htmlType="submit"
//                   block
//                   className='verifybtn'
//                   loading={loading}
//                 >
//                   Continue
//                 </Button>
//               </Form.Item>
//             </Form>
//           )}

//         </div>
//       </Col>

//       <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick pauseOnHover />
//     </Row>
//   );
// };

// export default SignInPage;


///27/05/2025


import React, { useState, useEffect } from 'react';
import { Row, Col, Typography, Input, Button, Form } from 'antd';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignUpPage.css';
import { FcGoogle } from 'react-icons/fc';
const { Title, Text } = Typography;
import Config from '../../Api-service/config';
import { useNavigate } from 'react-router-dom';
import mainpage from '../../Assets/mainimage.avif'
const SignInPage = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const navigate = useNavigate(); // Make sure this line is present

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const onEmailFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(`${Config.API_BASE_URL}/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: values.email }),
      });
      const data = await response.json();

      if (response.ok) {
        setEmail(values.email);
        setEmailSubmitted(true);
        toast.success('OTP sent to your email!');
        setCountdown(30);
      } else {
        toast.error(data.message || 'Failed to send OTP');
      }
    } catch (error) {
      toast.error('Network error');
    }
    setLoading(false);
  };

  const onOtpFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(`${Config.API_BASE_URL}/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp: values.otp }),
      });
      const data = await response.json();

      if (response.ok) {
        setOtpVerified(true);
        toast.success('OTP verified successfully!');
      } else {
        toast.error(data.message || 'OTP verification failed');
      }
    } catch (error) {
      toast.error('Network error');
    }
    setLoading(false);
  };

  // const onFinalFormSubmit = async (values) => {
  //   setLoading(true);
  //   try {
  //     const payload = {
  //       email,
  //       fullname: values.fullname,
  //       password: values.password,
  //       confirmPassword: values.confirmPassword,
  //     };

  //     const response = await fetch(`${Config.API_BASE_URL}/register`, {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(payload),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       toast.success('User registered successfully!');
  //        setTimeout(() => {
  //       navigate('/login');
  //     }, 6000); 
  //     } else {
  //       toast.error(data.message || 'Registration failed');
  //     }
  //         navigate('/login');

  //   } catch (error) {
  //   }
  //   setLoading(false);

  // };


  const onFinalFormSubmit = async (values) => {
    setLoading(true);
    try {
      const payload = {
        email,
        fullname: values.fullname,
        password: values.password,
        confirmPassword: values.confirmPassword,
      };

      const response = await fetch(`${Config.API_BASE_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('User registered successfully!');
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      } else {
        toast.error(data.message || 'Registration failed');
      }
    } catch (error) {
      toast.error('An error occurred during registration');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Row className="signin-container">
      <Col span={12} className="left-panel">
        <img
          src={mainpage}
          alt="Background"
          className="background-image"
        />
      </Col>

      <Col span={12} className="right-panel">
        <div className="form-wrapper">
          <Title level={2} className='signintext'>
            {!emailSubmitted
              ? 'SIGN IN / SIGN UP'
              : otpVerified
                ? 'CREATE YOUR PROFILE'
                : ''}
          </Title>

          {!emailSubmitted && (
            <Text className='signintext'>
              Welcome back! Please enter your details.
            </Text>
          )}

          {emailSubmitted && otpVerified && (
            <Text className='subtext'>
              Add details to setup your account
            </Text>
          )}

          {/* Email Form */}
          {!emailSubmitted && (
            <Form name="email-form" layout="vertical" onFinish={onEmailFinish} className="form">
              <Form.Item
                label={<span>Email <span style={{ color: 'red' }}>*</span></span>}
                name="email"
                rules={[
                  { required: true, message: 'Please enter your email!' },
                  { type: 'email', message: 'Please enter a valid email!'}
                ]}
              >
                <Input placeholder="Enter your email" className='inputs' />
              </Form.Item>
              <p>
                Already have an account?{' '}
                <span>
                  <a href="/login" style={{ color: 'blue' }}>Login</a>
                </span>
              </p>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  className='verifybtn'
                  loading={loading}
                >
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

          {/* OTP Form */}
          {emailSubmitted && !otpVerified && (
            <Form name="otp-form" layout="vertical" onFinish={onOtpFinish} className="form">
              <Form.Item
                className='Inputss'
                label="OTP"
                name="otp"
                rules={[{ required: true, message: 'Please enter the OTP!' }]}
              >
                <Input.OTP
                  length={6}
                  separator={i => <span style={{ color: i & 1 ? 'red' : 'blue' }}>—</span>}
                  onChange={text => console.log('onChange:', text)}
                  onInput={value => console.log('onInput:', value)}
                />              </Form.Item>

              <p className='verifytxt'>We sent a 6-digit verification code to your inbox</p>
              <p style={{ lineHeight: '15px', paddingLeft: '9rem' }}>
                Didn't receive code?{' '}
                <button
                  type="button"
                  className='resend'
                  onClick={() => setCountdown(30)}
                  disabled={countdown > 0}
                >
                  {countdown > 0 ? `Resend in ${countdown}s` : 'Resend Code'}
                </button>
              </p>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  className='verifybtn'
                  loading={loading}
                >
                  Verify OTP
                </Button>
              </Form.Item>
            </Form>
          )}

          {/* Final Form */}
          {otpVerified && (
            <Form name="final-form" layout="vertical" onFinish={onFinalFormSubmit} className="form">
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please enter your email Id!' }]}
              >
                <Input placeholder="Enter your email Id" className='inputs' />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please enter your password!' }]}
                hasFeedback
              >
                <Input.Password placeholder="Enter your password" className="inputs" />
              </Form.Item>

              <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                dependencies={['password']}
                hasFeedback
                rules={[
                  { required: true, message: 'Please confirm your password!' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('Passwords do not match!'));
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="Confirm your password" className='inputs' />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  className='verifybtn'
                  loading={loading}
                >
                  Continue
                </Button>
              </Form.Item>
            </Form>
          )}

        </div>
      </Col>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick pauseOnHover />
    </Row>
  );
};

export default SignInPage;
