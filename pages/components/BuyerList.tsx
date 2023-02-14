import React, { useEffect, useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import axios from "axios";
import { Button, Modal, Table } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import Admintop from "../Admintop";

const BuyerList = () => {
  const [buyerinfo, setbuyerInfo] = useState("");
  const [editingproperty, setEditingProperty] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [filteredInfo, setFilteredInfo] = useState({});

  const onEditProperty = (record) => {
    setIsEditing(true);
    setEditingProperty({ ...record });
  };

  useEffect(() => {
    getBuyerInfo();
  }, []);

  const getBuyerInfo = () => {
    axios.get("http://localhost:1998/buyerinfo").then((res) => {
      console.log(res?.data?.buyerData, "Response");
      const showData = res?.data?.buyerData;
      setbuyerInfo(showData);
    });
  };

  const ondeleteBuyerRecord = (record) => {
    Modal.confirm({
      title: "Are you Sure, you want to delete this property record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        deleteBuyerRecord(record._id);
      },
    });
  };

  const deleteBuyerRecord = async (_id) => {
    await axios
      .delete(`http://localhost:1998/buyerinfo/${_id}`)
      .then((res) => {});
    window.location.reload();
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "buyername",
    },
    {
      title: "Email",
      dataIndex: "buyeremail",
      width: "160px",
      //   ...getColumnTypeSearchProps("propertytype"),
    },

    {
      title: "Contact No",
      dataIndex: "buyerphonenumber",
      //   ...getColumnSearchProps("city"),
    },
    {
      title: "interested In",
      dataIndex: "interestedIn",
    },

    {
      title: "Actions",
      render: (record) => {
        return (
          <>
            <Button
              style={{ color: "black" }}
              onClick={() => {
                ondeleteBuyerRecord(record);
              }}
            >
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
  };

  return (
    <div className="container-fluid">
      <Admintop />
      <div style={{ marginTop: "30px" }}>
        <Table
          style={{ width: "95%", marginLeft: "30px" }}
          columns={columns}
          dataSource={buyerinfo}
          onChange={handleChange}
          rowKey={(propertydata) => {
            const id = propertydata?.["_id"];
            return id;
          }}
        />
      </div>
    </div>
  );
};

export default BuyerList;
