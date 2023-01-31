import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import axios from "axios";
import { useRouter } from "next/router";
import { Card, List, Checkbox, Input, CheckboxValueType, Row, Col } from "antd";
const { Meta } = Card;
const { Search } = Input;

const Middle = () => {
  const [propertyDatalist, setPropertyDatalist] = useState([]);
  console.log("property data", propertyDatalist);
  const router = useRouter();
  const [propertyimage, setPropertyImage] = useState("");
  const [addprop, setAddProp] = useState("");
  const [propertytype, setPropertyType] = useState("");

  useEffect(() => {
    GetPropList();
  }, []);

  const GetPropList = async () => {
    await axios
      .get(`http://localhost:1998/handleprop/newaddprop`)
      .then((res) => {
        setAddProp(res?.data?.PropListData);
        console.log("prop list", res?.data?.PropListData);
      });
  };

  useEffect(() => {
    getpropertydata();
  }, []);

  const getpropertydata = () => {
    axios
      .post("http://localhost:1998/property/filterdata", {
        propertytype,
      })
      .then((res) => {
        console.log("property111", res?.data?.propertyData);
        setPropertyDatalist(res?.data?.propertyData);
        for (let p = 0; p < res?.data?.propertyData.length; p++) {
          if (res?.data?.propertyData[p].image === "") {
            res.data.propertyData[p].propertyimage = "property_not_found.png";
          } else {
            res.data.propertyData[
              p
            ].propertyimage = `http://localhost:1998/images/${res.data.propertyData[p].image}`;
          }
        }
      });
  };

  const onChange = (checkedValues: CheckboxValueType[]) => {
    const propertytype = checkedValues;
    axios
      .post("http://localhost:1998/property/filterdata", {
        propertytype,
      })
      .then((res) => {
        console.log("property111", res?.data?.propertyData);
        setPropertyDatalist(res?.data?.propertyData);
        for (let p = 0; p < res?.data?.propertyData.length; p++) {
          if (res?.data?.propertyData[p].image === "") {
            res.data.propertyData[p].propertyimage = "property_not_found.png";
          } else {
            res.data.propertyData[
              p
            ].propertyimage = `http://localhost:1998/images/${res.data.propertyData[p].image}`;
          }
        }
      });
  };

  const plainOptions = [];
  console.log("plain", plainOptions);
  for (let i = 0; i < addprop.length; i++) {
    plainOptions.push({
      label: addprop[i].propertyList,
      value: addprop[i].propertyList,
    });
  }

  return (
    <>
      <div style={{ backgroundColor: "red" }}>
        {/* <div
          style={{
            marginTop: "30px",
            backgroundColor: "grey",
            width: "200px",
            marginLeft: "20px",
          }}
        > */}
        <Checkbox.Group
          options={plainOptions}
          onChange={onChange}
          style={{
            // display: "inline-block",
            marginTop: "10px",
            marginLeft: "20px",
          }}
        />
        {/* </div> */}
        {/* <div style={{ display: "flex" }}> */}

        <div
          style={{
            marginTop: "30px",
            alignItems: "center",
            display: "flex",
            marginLeft: "20px",
          }}
        >
          <List
            grid={{
              gutter: 16,
              xxl: 4,
            }}
            // style={{ margin: "20px" }}
            dataSource={propertyDatalist}
            renderItem={(item) => (
              <List.Item>
                <Card
                  hoverable
                  style={{ width: 260, height: 350 }}
                  cover={
                    <img alt="" height={200} src={`${item.propertyimage}`} />
                  }
                >
                  <Meta
                    title={item.propertyname}
                    description={item.propertytype}
                  />
                  <Meta title={item.zipcode} />
                  <Meta title={item.city} />
                  <Meta title={`$${item.price}`} />
                </Card>
              </List.Item>
            )}
          />
        </div>
      </div>
    </>
  );
};

export default Middle;
