import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useParams } from "react-router-dom";

// function propertydetails() {

//   return <div>Hello {propertyId}</div>;
// }

const homepage = () => {
  const router = useRouter();
  const propertyId = router.query.propertyId;
  let _id = propertyId;
  console.log("id", _id);

  // const params = useParams();
  // const [propertyId] = useState(params.propertyId);

  console.log("property", propertyId);
  // useEffect(() => {
  //   viewProperty();
  // }, []);
  // const viewProperty = async () => {
  //   // const _id = router.query.propertyId;
  //   await axios.get(`http://localhost:1998/property/`, {}).then((res) => {
  //     console.log("res", res);
  //   });
  // };

  return (
    <>
      <h1>hiiii{propertyId}</h1>
    </>
  );
};
export default homepage;
