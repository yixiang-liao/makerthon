import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

const News = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = () => {
      Papa.parse(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vQLeoKHXZi-jr312GHN7w7ExSHZxArIdt8qhPo_KVVSiZrBlIdH3gwL30Qd3PgJh8E-wVbbuoKkDU-E/pub?output=csv&gid=0',
        {
          download: true,
          header: true,
          complete: function (results) {
            var parsedData = results.data;
            console.log(parsedData);
            setData(parsedData);
          },
          error: function (error) {
            console.warn(error);
          }
        }
      );
    };

    fetchData(); // 立即获取数据

    const interval = setInterval(() => {
      fetchData(); // 每秒钟获取数据
    }, 1000);

    return () => clearInterval(interval); // 在组件卸载时清除定时器
  }, []);

  return (
    <div className="News">
      <div className="a">最新<br />公告</div>
      {data?.map((item, i) => (
        <div key={i} className="b">
          {item.Title}
        </div>
      ))}
    </div>
  );
};

export default News;
