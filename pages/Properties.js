import React, { useState, useEffect, useRef } from "react";
import { Button, Form, Input, Modal, Table } from "antd";
import axios from "axios";
import { Upload } from "antd";
import {
  FileAddOutlined,
  UploadOutlined,
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Space, Skeleton } from "antd";
import Highlighter from "react-highlight-words";
import Admintop from "./Admintop";
// import FormItem from "antd/es/form/FormItem";

const Properties = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [state, setState] = useState([]);

  const [propertyname, setPropertyName] = useState("");
  const [propertytype, setPropertytype] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [price, setPrice] = useState("");

  const [city, setCity] = useState("");
  const [documentfile, setDocumentFile] = useState("");
  const [propertydata, setPropertyData] = useState("");
  const [filteredInfo, setFilteredInfo] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editingproperty, setEditingProperty] = useState(null);
  console.log("editing Prop", editingproperty);
  const searchInput = useRef(null);
  const [searchedColumn, setSearchedColumn] = useState("");
  const [searchText, setSearchText] = useState("");
  const [dataSource, setDataSource] = useState([]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    getpropertydata();
  }, []);

  const getpropertydata = () => {
    axios.get("http://localhost:1998/property").then((res) => {
      console.log(res?.data?.propertyData, "Response");
      const showData = res?.data?.propertyData;
      console.log(showData);
      setPropertyData(showData);
    });
  };

  const props = {
    beforeUpload: (file) => {
      const isfile =
        file.type === "image/png" ||
        file.type === "image/jpeg" ||
        file.type === "application/msword" ||
        file.type === "application/pdf";
      if (!isfile) {
        message.error("only jpeg,pdf,doc and png file upload");
      } else {
        message.success("Yes File is Upload ");
      }
      setDocumentFile(file);
      console.log("aaaaa", file);
      return (isfile && false) || Upload.LIST_IGNORE;
    },
    onChange: (info) => {
      console.log(info.fileList, "kkkkkkkkkk");
      console.log(info.file, "hhhhhhhh");
    },
  };

  const resetEditing = () => {
    setIsEditing(false);
    setEditingProperty(null);
  };

  const ondeleteProperty = (record) => {
    Modal.confirm({
      title: "Are you Sure, you want to delete this property record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        deleteProperty(record._id);
      },
    });
  };

  const deleteProperty = async (_id) => {
    await axios
      .delete(`http://localhost:1998/property/${_id}`)
      .then((res) => {});
    window.location.reload();
  };

  const addproperty = () => {
    const formData = new FormData();
    formData.append("image", documentfile);
    formData.append("propertyname", propertyname);
    formData.append("propertytype", propertytype);
    formData.append("zipcode", zipcode);
    formData.append("city", city);
    console.log("image", documentfile);
    axios
      .post(`http://localhost:1998/property/add`, formData)
      .then((response) => {
        console.warn("res", response);
      });
  };

  const onEditProperty = (record) => {
    setIsEditing(true);
    setEditingProperty({ ...record });
  };

  const editProperty = async (_id) => {
    const propertyname = editingproperty.propertyname;
    console.log(propertyname, "name");
    const propertytype = editingproperty.propertytype;
    const city = editingproperty.city;
    const zipcode = editingproperty.zipcode;
    await axios
      .put(`http://localhost:1998/property/${_id}`, {
        propertyname,
        propertytype,
        city,
        zipcode,
      })
      .then((res) => {
        console.log("res", res);
      });
    setIsEditing(false);
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);

    const payload = selectedKeys[0];

    console.log("payload Value", payload);
    axios
      .post(`http://localhost:1998/property/filterdata`, {
        city: payload,
      })
      .then((res) => {
        setDataSource(res?.data?.PropertyDataByCity);
        console.log("property data", res?.data?.PropertyDataByCity);
      });
  };

  const handleTypeSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);

    const payload = selectedKeys[0];

    console.log("payload Value", payload);
    axios
      .post(`http://localhost:1998/property/filterdata`, {
        propertytype: payload,
      })
      .then((res) => {
        setDataSource(res?.data?.PropertyDataByPropertyType);
        console.log("property data", res?.data?.PropertyDataByPropertyType);
      });
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>

          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const getColumnTypeSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleTypeSearch(selectedKeys, confirm, dataIndex)
          }
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleTypeSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>

          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: "Apartment Name",
      dataIndex: "propertyname",
    },
    {
      title: "Type",
      dataIndex: "propertytype",
      width: "160px",
      ...getColumnTypeSearchProps("propertytype"),
    },

    {
      title: "City",
      dataIndex: "city",
      ...getColumnSearchProps("city"),
    },
    {
      title: "Zip Code",
      dataIndex: "zipcode",
    },
    {
      title: "Image",
      dataIndex: "image",
    },
    {
      title: "$Price",
      dataIndex: "price",
    },

    {
      title: "Actions",
      render: (record) => {
        return (
          <>
            <Button
              style={{ color: "black" }}
              onClick={() => {
                onEditProperty(record);
              }}
            >
              <EditOutlined />
            </Button>
            <Button
              style={{ color: "black" }}
              onClick={() => {
                ondeleteProperty(record);
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
    <>
      <Admintop />

      <div style={{ background: "grey" }}>
        <Button
          type="primary"
          onClick={showModal}
          style={{
            marginTop: "20px",
            width: "200px",
            display: "flex",
            marginLeft: "30px",
            // alignItems: "right",
          }}
        >
          Add New Property Details
        </Button>
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={addproperty}
          onCancel={handleCancel}
        >
          <Form
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 14 }}
            name="basic"
            initialValues={{
              remember: true,
            }}
            style={{ margin: 20 }}
            autoComplete="off"
          >
            <Form.Item label="Apartment Name" rules={[{ type: "text" }]}>
              <Input
                value={propertyname}
                onChange={(e) => {
                  setPropertyName(() => {
                    console.log("propertyname" + e.target.value);
                    return e.target.value;
                  });
                }}
              ></Input>
            </Form.Item>
            <Form.Item label="Property Type" rules={[{ type: "text" }]}>
              <Input
                value={propertytype}
                onChange={(e) => {
                  setPropertytype(() => {
                    console.log("propertytype" + e.target.value);
                    return e.target.value;
                  });
                }}
              ></Input>
            </Form.Item>
            <Form.Item label="City" rules={[{ type: "text" }]}>
              <Input
                value={city}
                onChange={(e) => {
                  setCity(() => {
                    console.log("city" + e.target.value);
                    return e.target.value;
                  });
                }}
              ></Input>
            </Form.Item>
            <Form.Item label="Zip Code" rules={[{ type: "text" }]}>
              <Input
                value={zipcode}
                onChange={(e) => {
                  setZipCode(() => {
                    console.log("zipcode" + e.target.value);
                    return e.target.value;
                  });
                }}
              ></Input>
            </Form.Item>
            <Form.Item label="Price" rules={[{ type: "text" }]}>
              <Input
                value={price}
                onChange={(e) => {
                  setPrice(() => {
                    console.log("price" + e.target.value);
                    return e.target.value;
                  });
                }}
              ></Input>
            </Form.Item>
            <Form.Item>
              <Upload.Dragger {...props}>
                <Button icon={<UploadOutlined />}>Upload </Button>
              </Upload.Dragger>
            </Form.Item>
          </Form>
        </Modal>

        <Modal
          title=" Edit Property"
          open={isEditing}
          onText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setState((pre) => {
              console.log(pre, "s");
              console.log(editingproperty, "kk");
              editProperty(editingproperty._id);
              return pre.map((Property) => {
                console.log(Property, "gdh");
                if (Property._id === editingproperty._id) {
                  return editProperty;
                } else {
                  return Property;
                }
              });
            });
            setIsEditing(false);
          }}
        >
          <Form>
            <Form.Item label="Name">
              <Input
                value={editingproperty?.propertyname}
                onChange={(e) => {
                  setEditingProperty((pre) => {
                    return { ...pre, propertyname: e.target.value };
                  });
                }}
              />
            </Form.Item>
            <Form.Item label="Type">
              <Input
                value={editingproperty?.propertytype}
                onChange={(e) => {
                  setEditingProperty((pre) => {
                    return { ...pre, propertytype: e.target.value };
                  });
                }}
              />
            </Form.Item>
            <Form.Item label="City">
              <Input
                value={editingproperty?.city}
                onChange={(e) => {
                  setEditingProperty((pre) => {
                    return { ...pre, city: e.target.value };
                  });
                }}
              />
            </Form.Item>
            <Form.Item label="Zip Code">
              <Input
                value={editingproperty?.zipcode}
                onChange={(e) => {
                  setEditingProperty((pre) => {
                    return { ...pre, zipcode: e.target.value };
                  });
                }}
              />
            </Form.Item>
          </Form>
        </Modal>

        <div style={{}}>
          <Table
            style={{ width: "95%", marginLeft: "30px" }}
            columns={columns}
            dataSource={propertydata}
            onChange={handleChange}
            rowKey={(propertydata) => {
              const id = propertydata?.["_id"];
              return id;
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Properties;
