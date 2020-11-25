import React from "react";
import PageBody from "../components/PageBody";
import PageHeader from "../components/PageHeader";

function About() {
  return (
    <section className="section">
      <div className="section__center">
        <PageHeader title={"About"} />
        <PageBody
          text={"Page made by Dawid Stasiński for learning purposes."}
        />
      </div>
    </section>
  );
}

export default About;
