import { Button, Card, Checkbox, List } from "antd";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Top from "../Top";
import LocalSider from "../LocalSider";
import { Link } from "react-router-dom";

const propertieslist = () => {
  const [propertyDatalist, setPropertyDatalist] = useState([]);
  // console.log("property data", propertyDatalist);
  const router = useRouter();
  const [propertyimage, setPropertyImage] = useState("");
  const [addprop, setAddProp] = useState("");
  const [propertytype, setPropertyType] = useState("");

  useEffect(() => {
    getpropertydata();
  }, []);

  const getpropertydata = () => {
    axios
      .post("http://localhost:1998/property/filterdata", {
        propertytype,
      })
      .then((res) => {
        // console.log("property111", res?.data?.propertyData);
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

  useEffect(() => {
    GetPropList();
  }, []);

  const GetPropList = async () => {
    await axios
      .get(`http://localhost:1998/handleprop/newaddprop`)
      .then((res) => {
        setAddProp(res?.data?.PropListData);
        // console.log("prop list", res?.data?.PropListData);
      });
  };

  const onChange = (checkedValues: CheckboxValueType[]) => {
    const propertytype = checkedValues;
    // console.log("checked value", checkedValues);

    if (checkedValues != "") {
      console.log("enter");
      axios
        .post("http://localhost:1998/property/filterdata", {
          propertytype,
        })
        .then((res) => {
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
    } else {
      console.log("fffff");
      axios
        .post("http://localhost:1998/property/filterdata", {})
        .then((res) => {
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
    }
  };

  const plainOptions = [];
  console.log("plain", plainOptions);
  for (let i = 0; i < addprop.length; i++) {
    plainOptions.push({
      label: addprop[i].propertyList,
      value: addprop[i].propertyList,
    });
  }

  // const onhandle = async (_id) => {
  //   // console.log("hdghja");
  //   console.log(_id);

  //   await axios
  //     .get(`http://localhost:1998/property/property/${_id}`, {})
  //     .then((res) => {
  //       console.log("res",res)
  //     });
  // };

  // const propertyhandle = (record) => {
  //   router.push(`/components/[property/` + record._id);
  //   console.log(record, "id");
  // };

  return (
    <div>
      <Top />
      <div style={{ display: "flex" }}>
        <div style={{ marginTop: "30px" }}>
          <nav
            id="sidebarMenu"
            className="collapse d-lg-block sidebar collapse bg-white"
          >
            <Checkbox.Group
              className="ant-checkbox-group-item"
              options={plainOptions}
              onChange={onChange}
              style={{
                display: "inline-block",
                verticalAlign: "Middle",
                flexDirection: "initial",
              }}
            />
          </nav>
        </div>

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
            dataSource={propertyDatalist}
            renderItem={(record) => (
              <List.Item>
                <a href={"/components/homepage/"}>
                  <Card
                    hoverable
                    style={{ width: 220, height: 300 }}
                    cover={
                      // <Link to={`/components/homepage/${record._id}`}>
                      <img
                        alt=""
                        height={220}
                        width={100}
                        src={`${record.propertyimage}`}
                      />
                    }
                  >
                    <p
                      className="text-start"
                      style={{
                        fontSize: "15px",
                        marginTop: "-15px",
                        fontWeight: "bold",
                      }}
                    >
                      {record.propertyname}
                    </p>
                    <p
                      className="text-end"
                      style={{
                        fontSize: "10px",
                        marginTop: "-34px",
                        color: "grey",
                      }}
                    >
                      {record.propertytype}
                    </p>
                    <p className="text-start" style={{ fontSize: "10px" }}>
                      {record.city}
                    </p>

                    <p
                      className="text-end"
                      style={{
                        fontSize: "10px",
                        marginTop: "-33px",
                        fontWeight: "bolder",
                      }}
                    >
                      ${record.price}
                    </p>
                    <Button
                      onClick={() => {
                        propertyhandle(record);
                      }}
                    >
                      Check Details
                    </Button>
                  </Card>
                </a>
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default propertieslist;
