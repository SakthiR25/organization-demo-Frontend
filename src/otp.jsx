import React, { useState } from "react";
import { Input, Button, Typography, Space } from "antd";

const { Text, Link } = Typography;

const OtpVerification = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      // Move to next input if value entered
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleVerify = () => {
    alert(`Verifying OTP: ${otp.join("")}`);
  };

  const handleResend = () => {
    alert("Resend code clicked");
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "auto",
        padding: 20,
        border: "1px solid #1890ff",
        borderRadius: 4,
        marginTop: 40,
      }}
    >
      <Space direction="vertical" size="middle" style={{ width: "100%" }}>
        <Text strong>
          Otp <Text type="danger">*</Text>
        </Text>
        <Space size="small" style={{ justifyContent: "center", width: "100%" }}>
          {otp.map((digit, idx) => (
            <Input
              key={idx}
              id={`otp-${idx}`}
              value={digit}
              onChange={(e) => handleChange(e, idx)}
              maxLength={1}
              style={{
                width: 40,
                height: 40,
                textAlign: "center",
                borderRadius: 8,
                fontSize: 20,
                fontWeight: "bold",
                backgroundColor: "#f0f0f0",
                borderColor: "#d9d9d9",
              }}
            />
          ))}
        </Space>

        <Text style={{ textAlign: "center", display: "block" }}>
          We sent a 6-digit verification code to your inbox
        </Text>

        <Text style={{ textAlign: "center", display: "block" }}>
          Didn’t receive code?{" "}
          <Link onClick={handleResend} strong>
            Resend code
          </Link>
        </Text>

        <Button
          type="primary"
          style={{ width: "100%", fontWeight: "bold" }}
          onClick={handleVerify}
          disabled={otp.some((val) => val === "")}
        >
          Verify
        </Button>
      </Space>
    </div>
  );
};

export default OtpVerification;






