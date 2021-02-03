import React from "react";
import PageBody from "../components/shared/PageBody";
import PageHeader from "../components/shared/PageHeader";

function About() {
  return (
    <section className="section">
      <div className="section__center">
        <PageHeader title={"About"} />
        <PageBody
          text="Page made by Dawid Stasiński for learning purposes."
        />
      </div>
    </section>
  );
}

export default About;
