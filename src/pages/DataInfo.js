import PageBody from "../components/shared/PageBody";
import PageHeader from "../components/shared/PageHeader";

const DataInfo = () => {
  return (
    <section className="section">
      <div className="section__center">
        <PageHeader title="Data" />
        <PageBody text="Data from this app is provided by:">
          <DataInfoList />
        </PageBody>
      </div>
    </section>
  );
};

const DataInfoList = () => {
  return (
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
  );
};

export default DataInfo;
