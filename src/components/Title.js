import React, { useState, useEffect } from 'react'

const Title = () => {
    const [currentTime, setCurrentTime] = useState(
      new Date().toLocaleTimeString(),
    );
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  return (
    <div className='title'>
        <h2>{currentTime}</h2>
        <h2>2024黑客松技職盃 分區賽 公告網站</h2>
    </div>
  )
}

export default Title
