// import React, { Component } from "react";
// import { render } from "react-dom";

// export class Chat extends Component {
//   ComponentDidMount() {
//     (function (d, m) {
//       var kommunicateSettings = {
//         appId: "4336c02ac0469f61509838c41f749d6e",
//         popupWidget: true,
//         automaticChatOpenOnNavigation: true,
//       };
//       var s = document.createElement("script");
//       s.type = "text/javascript";
//       s.async = true;
//       s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
//       var h = document.getElementsByTagName("head")[0];
//       h.appendChild(s);
//       window.kommunicate = m;
//       m._globals = kommunicateSettings;
//     })(document, window.kommunicate || {});
//   }
//   render() {
//     return <div>This is a bot</div>;
//   }
// }

// export default Chat;

import React, { Component } from "react";

export class chat extends Component {
  componentDidMount() {
    (function (d, m) {
      var kommunicateSettings = {
        appId: "4336c02ac0469f61509838c41f749d6e",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
    /* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
  }
  render() {
    return <div>chat</div>;
  }
}

export default chat;
