import React from "react";
import Helmet from "react-helmet";
import Tools from "../components/Tools";

class TechBox extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title="Skills to pay the bills | Antonio Rodriguez"
          meta={[
            {
              name: "description",
              content:
                "These are my tools of the trade. No technology is safe 😂."
            }
          ]}
        />
        <Tools />
      </div>
    );
  }
}
export default TechBox;
