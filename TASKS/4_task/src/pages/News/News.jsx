import { useEffect, useState } from "react";
import { fetchNews } from "../../api";
import "../News/News.css";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews()
      .then((response) => setNews(response.slice(0, 2)))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <ol className="newOl">
        {news.map((onenew) => (
          <li className="newLi" key={onenew.id}>
            {onenew.title}
            <ul className="newUl">{onenew.body}</ul>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default News;
