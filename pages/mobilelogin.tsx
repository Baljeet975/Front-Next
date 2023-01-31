// import React, { Component } from "react";
// import firebase from "./firebase";

// export default class Mobilelogin extends Component {
//   setupRecaptcha = () => {
//     window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
//       "recaptcha-container",
//       {
//         size: "normal",
//         callback: function (response) {
//           // reCAPTCHA solved, allow signInWithPhoneNumber.
//           this.onSignInSubmit();
//         },
//       }
//     );
//   };

//   onSignInSubmit = (event) => {
//     event.preventDefault();

//     this.setupRecaptcha();
//     var mobilenumber = "";
//     var appVerifier = window.recaptchaVerifier;
//     firebase
//       .auth()
//       .signInWithPhoneNumber(mobilenumber, appVerifier)
//       .then(function (confirmationResult) {
//         window.confirmationResult = confirmationResult;
//         const code = window.prompt("Enter otp");
//         confirmationResult
//           .confirm(code)
//           .then((result) => {
//             // User signed in successfully.
//             const user = result.user;
//             console.log("user sign in ");
//             // ...
//           })
//           .catch((error) => {
//             // User couldn't sign in (bad verification code?)
//             // ...
//           });
//       })
//       .catch(function (error) {});
//   };

//   render() {
//     return (
//       <div>
//         <div className="Container">
//           <h2>Phone Login</h2>
//           <form onSubmit={this.onSignInSubmit}>
//             <div id="recaptcha-container"></div>
//             <div className="form-group">
//               <label>Phone Number</label>
//               <input type="number" className="form-control"></input>
//             </div>
//             <button type="submit" className="btn btn-primary">
//               submit
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }
