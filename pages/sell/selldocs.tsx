import React from "react";
import Lastinfo from "../LastInfo";
import Top from "../Top";

const SellDocs = () => {
  return (
    <>
      <Top />
      <div className="container-fluid" style={{ display: "flex" }}>
        <div className="DataDocs" style={{ marginTop: "20px" }}>
          <h3 style={{ marginTop: "10px" }}>How should I sell my home?</h3>
          <br />
          <p>
            Today, there are many ways to sell a house, and the best option for
            you will depend on your unique circumstances. To help you figure out
            the best selling method for you, here’s a rundown of your options,
            as well as the pros and cons of each.
          </p>
          <p>
            <a style={{ fontWeight: "bold" }}>List with a real estate agent</a>{" "}
            : Hiring a real estate agent or broker to sell your home is the
            tried-and-true method that tends to net the highest profit. An agent
            can create a custom marketing plan, get the word out to many buyers,
            and assist you through the entire home-selling process. While you
            pay a commission for an agent’s services (often a percentage of your
            home’s sales price), it may be money well-spent since listing with
            an agent can help you fetch a high price for your home. Here’s in
            your area who can help.
          </p>
          <br />
          <p>
            <a style={{ fontWeight: "bold" }}>Sell to a partner company</a> :
            Ebullient partners with several iBuyer and other companies to offer
            you various ways to sell your home. An Ebuyer is a company with the
            financial means to purchase your home in cash. While their offers
            are generally competitive (based on the sales price of similar
            properties in your area), the price may not be as high as what you’d
            get on the open market with a real estate agent’s expertise. Still,
            the speed, convenience, and control you gain from an iBuyer may be
            worth every penny, as it allows you to consider the following
            options:
          </p>
          <br />
          <div style={{ marginLeft: "40px" }}>
            <p>
              <a style={{ fontWeight: "bold" }}> Sell fast and with ease</a> :
              If you need to sell quickly to move for a new job or other reason,
              an iBuyer allows you to skip the lengthy process of prepping and
              listing your home for sale. iBuying transactions can happen
              entirely online, and in a matter of days.
            </p>
            <br />
            <p>
              <a style={{ fontWeight: "bold" }}> Sell now, move later</a> :
              While iBuying transactions can happen quickly, you can also take
              longer and choose your closing date, which is helpful if you want
              to avoid moving twice. An iBuyer may allow you to stay in your
              current home until you buy a new home and are ready to move
            </p>
            <br />
            <p>
              <a style={{ fontWeight: "bold" }}> Buy now, sell later</a> : Buy
              now, sell later. See a new home you want to buy right now, but
              don’t want to carry two mortgages at once? Our partner companies
              can help convert your home equity into cash. This may enable you
              to make a competitive offer on a new home that’s not contingent on
              the sale of your current home, or even whether it’s listed yet.
            </p>
            <br />
            <p>
              <a style={{ fontWeight: "bold" }}> Sell in any condition</a> : If
              your property is damaged, run-down, or facing foreclosure, an
              iBuyer may be willing to buy your home as is, offloading the
              burden of making repairs or renovations.
            </p>
            <br />
          </div>
          <p>
            <a style={{ fontWeight: "bold" }}> Sell your home on your own</a> :
            If A small percentage of homeowners decide to sell their own home, a
            process known as For Sale By Owner or FSBO. This can help save money
            since you aren’t paying for a real estate agent’s services. But it’s
            a lot of work, with no guarantees of a sale—particularly since you
            can’t add your home to a multiple listing service, where properties
            are seen by thousands of agents and homebuyers, without the
            assistance of a licensed real estate professional. FSBO properties
            are not displayed on Ebullient at this time.
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
          <a href="/sell/selldocs">
            <ins>How should i sell my home?</ins>
          </a>
        </div>
      </div>
      <Lastinfo />
    </>
  );
};

export default SellDocs;
