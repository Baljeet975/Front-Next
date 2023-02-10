import React from "react";
import Lastinfo from "../LastInfo";
import Top from "../Top";

const sellworth = () => {
  return (
    <>
      <Top />
      <div
        className="container-fluid"
        style={{ marginTop: "30px", display: "flex" }}
      >
        <div>
          <h3>How much is my home worth?</h3>
          <p>
            Figuring out how much your home is worth is important if you hope to
            get a good price when you sell. While you might have a certain
            dollar figure in mind—based on what you paid originally, plus a
            little extra since real estate tends to appreciate—your home’s
            actual value could be lower or much higher based on your local
            housing market, the condition of your home, and other factors. Not
            sure where to start? Realtor.com® has a variety of tools and advice
            to help you figure out
          </p>
          <p>
            <a style={{ fontWeight: "bold" }}> Check out comps</a> : The best
            way to assess your home’s value is to learn the sales prices of
            similar properties in your neighborhood, otherwise known as
            “comparables” or “comps.” For example, if a home near yours with the
            same square footage and numbers of bedrooms and bathrooms recently
            sold for $250,000, your own home’s value is likely in that ballpark.
            The more comps you check, the more accurately you can pinpoint your
            own home’s price. One great place to start is to type your address
            into the Realtor.com , which will estimate your property’s sales
            price based on an algorithm that factors in similar properties in
            your area.
          </p>
          <div>
            <h3>Track your home value</h3>
          </div>
          <p>
            <a style={{ fontWeight: "bold" }}> Consult a real estate agent.</a>
            While comps are a great way to get a general sense of your home’s
            value, you can fine tune this number by consulting a real estate
            agent. These professionals can visit your property, assess its
            unique strengths and weaknesses, then present a comparative market
            analysis (or CMA) estimating your home’s price based on recent real
            estate sales in your area. Here’s who can help.
          </p>
          <p>
            <a style={{ fontWeight: "bold" }}> Get alternative cash offers</a>
            One useful tool to help with home valuation is to see what companies
            are willing to pay for your home, which can be done at the . You
            simply type in your address to receive an estimated home value—and
            from there, you can include additional details (such as your home’s
            condition and number of bedrooms and bathrooms) to receive offers
            from companies who may be interested in buying your home, as well as
            estimated price ranges they’d pay. At that point, you can decide
            whether or not to inquire further with these companies, or just use
            the information provided to get a better sense of how much your home
            is worth.
          </p>
          <p>
            <a style={{ fontWeight: "bold" }}> Factor in home improvements</a>
            Factor in home improvements. If you’ve redesigned your kitchen or
            installed a swimming pool, you’ll recoup some of what you paid for
            these upgrades when you sell. But your return on investment will
            vary depending on what kind of renovation you did, and how desirable
            it is to buyers in your area.
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

export default sellworth;
