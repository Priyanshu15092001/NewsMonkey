import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


// async componentDidMount() {
//   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c49fc619db544b9da1d8aba0b072c462&page=1&pageSize=${props.pageSize}`;
//   // setState({ loading: true });
//   // let data = await fetch(url);
//   // let parseData = await data.json();
//   // setState({ loading: false });
//   // setState({
//   //   articles: parseData.articles,
//   //   totalResults: parseData.totalResults,
//   // });
//   updateNews();
// }

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  // document.title = `${
  //   props.category.charAt(0).toUpperCase() +
  //   props.category.substring(1)
  // } - News Monkey`;
  useEffect(() => {
    updateNews();
  }, []);
  const fetchMoreData = async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
  
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.api}&page=${page + 1}&pageSize=${
      props.pageSize
    }`;
    // setState({ loading: true });
    setpage(page + 1);
    setloading(true);
    let data = await fetch(url);
    let parseData = await data.json();
    //setState({ loading: false });
    setloading(false);
  
    setarticles(articles.concat(parseData.articles));
    settotalResults(parseData.totalResults);
  }
  
  const updateNews = async () => {
    props.setprogress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page}&pageSize=${props.pageSize}`;
    // setState({ loading: true });
    props.setprogress(30);
  
    let data = await fetch(url);
    let parseData = await data.json();
    props.setprogress(75);
  
    // setState({ loading: false });
    setloading(false);
    setarticles(parseData.articles);
    settotalResults(parseData.totalResults);
    // setState({
    //   articles: parseData.articles,
    //   totalResults: parseData.totalResults,
    // });
    props.setprogress(100);
  };
  return (
    <>
      <h1 className="text-center" style={{ marginTop: "90px" }}>
        News Monkey- Top headlines
      </h1>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={loading && <Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title.slice(0, 45)}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author ? element.author : "unknown"}
                    date={new Date(element.publishedAt).toUTCString()}
                    name={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          {/* {loading && <Spinner />} */}
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
};
export default News;
