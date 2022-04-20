import React from "react";
import { Table, Pagination } from "antd";
import "./table.scss";

const dataSource = [
  {
    key: "1",
    Postal: "16-FEB-2022",
    RecordDate: "11-FEB-2022",
    ClosingDate: "19-MAR-2022",
    Outcome: "22-MAR-2022",
    Resolution: "Board Changes",
    Notification: "NOTICE",
    BroadcastDate: "16-FEB-2022"
  },
  {
    key: "",
    Postal: "16-FEB-2022",
    RecordDate: "11-FEB-2022",
    ClosingDate: "19-MAR-2022",
    Outcome: "22-MAR-2022",
    Resolution: "Board Changes",
    Notification: "NOTICE",
    BroadcastDate: "16-FEB-2022"
  },
  {
    key: "3",
    Postal: "16-FEB-2022",
    RecordDate: "11-FEB-2022",
    ClosingDate: "19-MAR-2022",
    Outcome: "22-MAR-2022",
    Resolution: "Board Changes",
    Notification: "NOTICE",
    BroadcastDate: "16-FEB-2022"
  },
  {
    key: "4",
    Postal: "16-FEB-2022",
    RecordDate: "11-FEB-2022",
    ClosingDate: "19-MAR-2022",
    Outcome: "22-MAR-2022",
    Resolution: "Board Changes",
    Notification: "NOTICE",
    BroadcastDate: "16-FEB-2022"
  },
  {
    key: "5",
    Postal: "16-FEB-2022",
    RecordDate: "11-FEB-2022",
    ClosingDate: "19-MAR-2022",
    Outcome: "22-MAR-2022",
    Resolution: "Board Changes",
    Notification: "NOTICE",
    BroadcastDate: "16-FEB-2022"
  },
  {
    key: "6",
    Postal: "16-FEB-2022",
    RecordDate: "11-FEB-2022",
    ClosingDate: "19-MAR-2022",
    Outcome: "22-MAR-2022",
    Resolution: "Board Changes",
    Notification: "NOTICE",
    BroadcastDate: "16-FEB-2022"
  },
  {
    key: "7",
    Postal: "16-FEB-2022",
    RecordDate: "11-FEB-2022",
    ClosingDate: "19-MAR-2022",
    Outcome: "22-MAR-2022",
    Resolution: "Board Changes",
    Notification: "NOTICE",
    BroadcastDate: "16-FEB-2022"
  },
  {
    key: "8",
    Postal: "16-FEB-2022",
    RecordDate: "11-FEB-2022",
    ClosingDate: "19-MAR-2022",
    Outcome: "22-MAR-2022",
    Resolution: "Board Changes",
    Notification: "NOTICE",
    BroadcastDate: "16-FEB-2022"
  },
  {
    key: "9",
    Postal: "16-FEB-2022",
    RecordDate: "11-FEB-2022",
    ClosingDate: "19-MAR-2022",
    Outcome: "22-MAR-2022",
    Resolution: "Board Changes",
    Notification: "NOTICE",
    BroadcastDate: "16-FEB-2022"
  },
  {
    key: "10",
    Postal: "16-FEB-2022",
    RecordDate: "11-FEB-2022",
    ClosingDate: "19-MAR-2022",
    Outcome: "22-MAR-2022",
    Resolution: "Board Changes",
    Notification: "NOTICE",
    BroadcastDate: "16-FEB-2022"
  }
];

const columns = [
  {
    title: "Date of declaration of Postal Ballot",
    dataIndex: "Postal",
    key: "Postal",
  },
  {
    title: "Record Date",
    dataIndex: "RecordDate",
    key: "RecordDate",
  },
  {
    title: "Closing Date of Postal Ballot",
    dataIndex: "ClosingDate",
    key: "ClosingDate",
  },
  {
    title: "Date of declaration of Outcome",
    dataIndex: "Outcome",
    key: "Outcome",
  },
  {
    title: "Resolution",
    dataIndex: "Resolution",
    key: "Resolution",
  },
  {
    title: "Link to Detail Notification",
    dataIndex: "Notification",
    key: "Notification",
  },
  {
    title: "Broadcast Date",
    dataIndex: "BroadcastDate",
    key: "BroadcastDate",
  },
];

function TableComponent() {
  function itemRender(current, type, originalElement) {
    if (type === 'prev') {
      return "";
    }
    if (type === 'next') {
      return "";
    }
    return originalElement;
  }
  return (
    <div className="table-card table-container">
      <div className="tableHeader">Postal Ballots</div>
      <div className="tableTab">
        <div>Current & Forthcoming Postal Ballots</div>
        <div>Past Postal Ballots</div>
      </div>
      <Table dataSource={dataSource} columns={columns} />
      <Pagination className="pagination" size="small" total={30} itemRender={itemRender} />
    </div>
  );
}

export default TableComponent;
