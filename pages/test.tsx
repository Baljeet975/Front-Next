// import { Button, Form, Input } from "antd";
// import React, { useState } from "react";
// import axios from "axios";

// const test = () => {
//   const [number, setNumber] = useState("");
//   console.log("www", number);

//   const handleLogOk = async () => {
//     await axios
//       .post(`http://localhost:1998/user/signup`, {
//         number,
//       })
//       .then((res) => {
//         console.log(res, "res");
//       });
//   };

//   return (
//     <div>
//       <Form onSubmit={handleLogOk}>
//         <Form.Item>
//           <Input
//             placeholder="Number"
//             aria-label="Number"
//             onChange={(e) => {
//               setNumber(e.target.value);
//             }}
//           />
//           <Button type="submit">Submit</Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default test;
