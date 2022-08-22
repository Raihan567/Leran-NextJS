import React from "react";
import Link from "next/link";
const About = () => {
  return (
    <div className="padding">
      <h2>About Page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit possimus,
        libero dolorem omnis incidunt nam non accusamus rem asperiores inventore
        dolores numquam ipsa ab, sed voluptatibus odio eveniet officia quasi?
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit
        quis quas earum aut nesciunt sint ex quod commodi sit, unde amet
        reiciendis eum culpa ea vitae aperiam nihil neque?
      </p>
      <h4>
        <Link href="/">
          <a>Go to HomePage</a>
        </Link>
      </h4>
    </div>
  );
};

export default About;
