import React from "react";
import { useRouter } from "next/router";

function propertydetails() {
  const router = useRouter();
  const propertyId = router.query.propertyId;
  return <div>{propertyId}</div>;
}

export default propertydetails;
