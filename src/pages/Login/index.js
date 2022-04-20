import React, { useState } from "react";
import home from "../../images/home.svg";
import "./login.scss";
import {
  ArrowLeftOutlined,
  UserOutlined,
  MailOutlined,
  ContactsOutlined,
  CopyOutlined,
  MobileOutlined
} from "@ant-design/icons";
import TextInput from "../../component/input";
import ReCAPTCHA from "react-google-recaptcha";
import { Button, notification } from "antd";
import PhoneInput from 'react-phone-input-2'
import { useNavigate } from "react-router-dom";

function Login() {
  const [fieldValue, setFieldValue] = useState({
    fullName: "",
    phoneNo: "",
    email: "",
    client: "",
    dp: "",
    folio: "",
  });
  const [errorMsg, setErrorMsg] = useState({
    fullName: "",
    // phoneNo: "",
    email: "",
    client: "",
    dp: "",
    folio: "",
  });
  const [captcha, setChatcha] = useState(false);
  // const [phoneLength, setPhoneLength] = useState(0);
  let navigate = useNavigate();

  function onChange(value) {
    setChatcha(value ? true : false);
  }

  const handleOnChange = (value, data, name) => {
    // setPhoneLength(data.format.replace(/[^+.]/g, "").length - data.dialCode.length)
    setFieldValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  const handleChange = (value, name) => {
    setFieldValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const openNotification = message => {
    notification.info({
      message,
      placement: "topRight",
    });
  };

  const checkValidation = (fieldName) => {
    let valiodationMsg = ""
    if (fieldName === "fullName") {
      const validFullName = fieldValue.fullName.match(/^[a-zA-Z ]*$/);
      valiodationMsg = validFullName ? "" : "Number is notvalid";
    } else if (fieldName === "email") {
      const validEmail = fieldValue.email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      valiodationMsg = validEmail === null && fieldValue.email ? "Email is notvalid" : "";
    } else if (fieldName === "client" || fieldName === "dp") {
      valiodationMsg = fieldValue[fieldName].length < 9 ? "" : "Length should not exceed 8";
    }
    else if(fieldName === "folio") {
      const validFolio = fieldValue[fieldName].length < 9 && fieldValue[fieldName].match(/^[0-9]*$/);
      valiodationMsg = validFolio ? "" : "Length should not exceed 8 and only number is valid";
    }
    // else if(fieldName === "phoneNo") {
    //   valiodationMsg = (fieldValue.phoneNo.length === phoneLength) ? "" : `Please enter the valid phone number`;
    // }

    setErrorMsg((prevState) => {
      return {
        ...prevState,
        [fieldName]: valiodationMsg,
      };
    });
  };

  const onSubmit = () => {
    if(fieldValue.fullName === "") {
      setErrorMsg((prevState) => {
        return {
          ...prevState,
          fullName: "FullName is required",
        };
      });
      return;
    }
    if(fieldValue.phoneNo === "") {
      setErrorMsg((prevState) => {
        return {
          ...prevState,
          phoneNo: "PhoneNo is required",
        };
      });
      return;
    }
    const label = ["fullName", "phoneNo", "email", "client", "dp", "folio"]
    let validation = label.every((la)=>{
      return errorMsg[la] === "" ? true : false;
    })
    !captcha && openNotification('please complete the captcha');
    if(captcha && validation){
      openNotification('Loggedin Successfully');
      navigate("/home");
    }
  }

  return (
    <div>
      <div className="loginContainer">
        <div className="backArrow">
          <ArrowLeftOutlined /> Back to Investors Page
        </div>
        <div className="mainContainer">
          <div className="leftContainer">
            <img src={home} alt="home" />
            <div className="shareholderBold">Shareholders Feedback</div>
            <div className="loginDescrtion">
              <b>Lorem ipsum dolor sit amet consectetuer aqipiscing elit.</b>
              <br />
              <br />
              Urna cursus eget nunc scelerisque viverra mauris in aliquam.
              Tellus in metus vulputate eu scelerisque felis. Amet facilisis
              magna etiam tempor orci eu lobortis elementum nibh.
            </div>
          </div>
          <div className="rightContainer">
            <TextInput
              placeholder={"Full Name"}
              value={fieldValue.fullName}
              onChange={(data) => handleChange(data, "fullName")}
              onBlur={() => checkValidation("fullName")}
              errMsg={errorMsg.fullName ? errorMsg.fullName : false}
              suffix={<UserOutlined />}
            />
            <div className="phoneFieldContainer">
            <PhoneInput
              country={'us'}
              value={fieldValue.phoneNo}
              onChange={(value, data)=>handleOnChange(value, data, "phoneNo")}
              onBlur={() => checkValidation("phoneNo")}
              inputProps={{
                name: 'phone',
                required: true,
                autoFocus: true
              }}
            />
            <MobileOutlined className="phoneIcon" />
            {errorMsg.phoneNo && <span className="errmsg">{errorMsg.phoneNo}</span>}
            </div>
            <TextInput
              placeholder={"Email ID"}
              value={fieldValue.emai}
              onChange={(data) => handleChange(data, "email")}
              onBlur={() => checkValidation("email")}
              errMsg={errorMsg.email ? errorMsg.email : false}
              suffix={<MailOutlined />}
            />
            <TextInput
              placeholder={"Client ID"}
              value={fieldValue.client}
              onChange={(data) => handleChange(data, "client")}
              onBlur={() => checkValidation("client")}
              errMsg={errorMsg.client ? errorMsg.client : false}
              suffix={<ContactsOutlined />}
            />
            <TextInput
              placeholder={"DP ID"}
              value={fieldValue.dp}
              onChange={(data) => handleChange(data, "dp")}
              onBlur={() => checkValidation("dp")}
              errMsg={errorMsg.dp ? errorMsg.dp : false}
              suffix={<UserOutlined />}
            />
            <TextInput
              placeholder={"OR Folio No. *"}
              value={fieldValue.folio}
              onChange={(data) => handleChange(data, "folio")}
              onBlur={() => checkValidation("folio")}
              errMsg={errorMsg.folio ? errorMsg.folio : false}
              suffix={<CopyOutlined />}
            />
            <div className="captchaContainer">
              <div className="whiteBoxCaptcha">
                <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={onChange}
                />
              </div>
            </div>
            <Button className="submitButton" onClick={onSubmit} type="primary">
              Submit Feedback
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
