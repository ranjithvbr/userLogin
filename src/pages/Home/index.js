import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import TableComponent from "../../component/Table";
import "./home.scss";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();
  return (
    <div>
      <div className="loginContainer">
        <div className="backArrow" onClick={() => navigate("/")}>
          <ArrowLeftOutlined /> Back to Investors Page
        </div>
        <TableComponent />
      </div>
    </div>
  );
}
