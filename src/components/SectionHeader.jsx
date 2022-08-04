import React from "react";

const SectionHeader = ({suptitle,title}) => {
  return (<>
    <span className="section__header-suptitle title-1">{suptitle}</span>
    <h2 className="section__header-title title-2">{title}</h2>
  </>);
};

export default SectionHeader;
