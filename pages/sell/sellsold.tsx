import React from "react";
import Lastinfo from "../LastInfo";
import Top from "../Top";

const sellsold = () => {
  return (
    <>
      <Top />
      <div className="container-fluid" style={{ display: "flex" }}>
        <div style={{ marginTop: "30px" }}>
          <h3>Should I sell my home now?</h3>
          <br />
          <p>
            Selling your home is a big decision, and we at Ebullient can help
            you understand market conditions and other factors you should
            consider. Here are some questions to ask to help you figure out if
            selling your home makes sense for you right now.
          </p>
          <p>
            Selling your home is a big decision, and we at can help you
            understand market conditions and other factors you should consider.
            Here are some questions to ask to help you figure out if selling
            your home makes sense for you right now.
          </p>
          <div>
            <h3>Know your local market</h3>
          </div>
          <p>
            <a style={{ fontWeight: "bold" }}>
              Does your home no longer fit your life?
            </a>{" "}
            : Are you expecting new family members such as a baby, or are your
            college kids moving out, or might an aging parent move in? Life
            changes like these may make your current living quarters feel too
            small, or large, or just no longer suit your needs. Career changes
            such as a new job that’s farther away might also mean it makes sense
            to move, or if you now work mostly from home, this could free you up
            to live just about anywhere. Make sure to consider your personal
            circumstances as well as market conditions when deciding whether the
            time is right for you to sell.
          </p>
          <p>
            <a style={{ fontWeight: "bold" }}>
              Can you afford your home, and maintain it?
            </a>{" "}
            : If a job loss or divorce has made your current mortgage payments
            unmanageable, it may be smart to cut your losses and downsize to a
            home within your means. People close to retirement may also want to
            sell so they can move to an area with better weather or a more
            relaxed pace, or into a home with fewer maintenance hassles like a
            huge yard or swimming pool.
          </p>
        </div>
        <div
          className="text-center"
          style={{
            backgroundColor: "",
            width: "70%",
            marginTop: "30px",
            fontWeight: "bold",
            fontSize: "15px",
          }}
        >
          <h3>
            <ins>Seller Guide</ins>
          </h3>
          <br />
          <a href="/sell/sellsold">
            <ins>should i sell my home?</ins>
          </a>
          <br />
          <br />
          <a href="/sell/sellworth">
            <ins>How much is my home worth??</ins>
          </a>

          <br />
          <br />
          <a href="sell/selldocs">
            <ins>How should i sell my home?</ins>
          </a>
        </div>
      </div>
      <Lastinfo />
    </>
  );
};

export default sellsold;
