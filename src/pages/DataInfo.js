import React from "react";
import PageBody from "../components/PageBody";
import PageHeader from "../components/PageHeader";

const Data = () => {
  return (
    <section className="section">
      <div className="section__center">
        <PageHeader title={"Data"} />
        <PageBody text={"Data from this app is provided by:"}>
          <ul>
            <li>
              <a href="https://openweathermap.org/" alt="link" target="blank">
                OpenWeather
              </a>
            </li>
            <li>
              <a
                href="http://geodb-cities-api.wirefreethought.com/"
                alt="link"
                target="blank"
              >
                GeoDB cities
              </a>
            </li>
          </ul>
        </PageBody>
      </div>
    </section>
  );
};

export default Data;
