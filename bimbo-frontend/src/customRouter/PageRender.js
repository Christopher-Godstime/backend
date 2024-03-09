import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "../components/NotFound";

const generatePage = (pageName, props) => {
  const component = () => require(`../pages/${pageName}`).default;

  try {
    return React.createElement(component(), props); // Pass props here
  } catch (err) {
    return <NotFound />;
  }
};

const PageRender = ({
  showAssessment,
  setShowAssessment,
  getInTouch,
  setGetInTouch,
}) => {
  const { page, id } = useParams();
  let pageName = "";
  if (id) {
    pageName = `${page}/[id]`;
  } else {
    pageName = `${page}`;
  }

  return generatePage(pageName, {
    showAssessment,
    setShowAssessment,
    getInTouch,
    setGetInTouch,
  }); // Pass props to generatePage
};

export default PageRender;
