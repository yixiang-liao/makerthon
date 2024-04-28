import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import TableO from '../components/TableO';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Paper from '@mui/material/Paper';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// 在 SwiperCore 中启用 Autoplay、Pagination 和 Navigation 模块


const Page = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString(),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
    }, []);

  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = () => {
      Papa.parse(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vQLeoKHXZi-jr312GHN7w7ExSHZxArIdt8qhPo_KVVSiZrBlIdH3gwL30Qd3PgJh8E-wVbbuoKkDU-E/pub?output=csv&gid=651301667',
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
    const D3D = [
      { title: '文創工坊', url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQLeoKHXZi-jr312GHN7w7ExSHZxArIdt8qhPo_KVVSiZrBlIdH3gwL30Qd3PgJh8E-wVbbuoKkDU-E/pub?output=csv&gid=468671024' }
    ];
    const Mg = [
      { title: '木工坊', url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQLeoKHXZi-jr312GHN7w7ExSHZxArIdt8qhPo_KVVSiZrBlIdH3gwL30Qd3PgJh8E-wVbbuoKkDU-E/pub?output=csv&gid=1602056620' }
    ];
    const Ls = [
      { title: '機工坊', url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQLeoKHXZi-jr312GHN7w7ExSHZxArIdt8qhPo_KVVSiZrBlIdH3gwL30Qd3PgJh8E-wVbbuoKkDU-E/pub?output=csv&gid=1077283877' }
    ];
    const Material = [{ title: '材料室', url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQLeoKHXZi-jr312GHN7w7ExSHZxArIdt8qhPo_KVVSiZrBlIdH3gwL30Qd3PgJh8E-wVbbuoKkDU-E/pub?output=csv&gid=1227004105' }
    ];
  return (
    <div className='page'>
      <div className='A'>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          spaceBetween={0}
          slidesPerView={1}

          loop
          pagination={{
              "clickable":true
          }}

        autoplay={{delay:5000,disableOnInteraction:false}}
        scrollbar={{draggable:true}}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Scrollbar, A11y, Autoplay]}
        className="mySwiper"
      >
          <SwiperSlide><TableO items={Mg} className='Block'/></SwiperSlide>
          <SwiperSlide><TableO items={Ls} className='Block'/></SwiperSlide>
          <SwiperSlide><TableO items={D3D} className='Block'/></SwiperSlide>
          <SwiperSlide><TableO items={Material} className='Block'/></SwiperSlide>
        </Swiper>
      </div>
        {data?.map((dd, i) => (
        <div key={i} className='B'>
            <img src={dd.img}></img>
          </div>
        ))}
    </div>
  )
}

export default Page;
