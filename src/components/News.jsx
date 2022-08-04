import React from "react";
import SectionHeader from "./SectionHeader";
import MyButton from "./MyButton";
import data from "../utls/NewsData";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <section className="news">
      <div className="container">
        <div className="news__content">
          <div className="news__header">
            <div className="news__header-texts">
              <SectionHeader
                title={"Discover The recent content about organic products"}
                suptitle={"News"}
              />
            </div>
            <MyButton bgColor={"white"}>More News</MyButton>
          </div>
          <div className="news__cards">
            {data.map((item) => {
              return <NewsCard key={item.id} props={item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
