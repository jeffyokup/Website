import React from "react";
import "antd/dist/antd.css";
import { Timeline, Icon } from "antd";

const titleStyle = {
  color: "red"
};

function Home() {
  return (
    <div>
      <h1 style={{ fontSize: 45 }}>Hi, I'm Jeffrey</h1>
      <h2>I am an Iowa State Graduate and Computer Scientist </h2>
      <div style={{ float: "right" }}>
        <h3>My Timeline</h3>
        <Timeline>
          <Timeline.Item>First day at ISU 08-05-2016</Timeline.Item>
          <Timeline.Item>Teachers Assistant 01-10-2017</Timeline.Item>
          <Timeline.Item>
            Software Engineer Intern at Cerner 05-015-2018
          </Timeline.Item>
          <Timeline.Item>
            Resumed as Teachers Assistant 08-20-2018
          </Timeline.Item>
          <Timeline.Item color="green">ISU Graduation 05-05-2019</Timeline.Item>
        </Timeline>
      </div>
    </div>
  );
}
export default Home;
