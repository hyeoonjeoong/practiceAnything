"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import useWeather from "../hooks/useWeather.js";

interface WeatherType {
  rainPercent?: string;
  rainType?: string;
  skyCondition?: string;
  highTemperature?: string;
  lowTemperature?: string;
  hourTemperature?: string;
}

export default function WeatherPage() {
  const [weatherData, setWeatherData] = useState<WeatherType | null>(null);
  const { getWeatherData } = useWeather("20241001", "0200", 55, 127);

  const fetchWeather = () => {
    getWeatherData((data) => setWeatherData(data));
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  // -----------------hooks로 분리-----------------
  // const getWeatherData = async () => {
  //   const params = {
  //     ServiceKey: process.env.NEXT_PUBLIC_WEATHER_KEY,
  //     pageNo: 1,
  //     numOfRows: 773,
  //     dataType: "JSON",
  //     base_date: "20241001",
  //     base_time: "0200",
  //     nx: 55,
  //     ny: 127,
  //   };
  //   try {
  //     const response = await axios({
  //       method: "get",
  //       url: "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst",
  //       params,
  //     });
  //     console.log(response.data, "fullResponse");
  //     const items = response.data.response.body.items.item;

  //     if (response.data && items) {
  //       console.log(items, "items");

  //       const categories = ["POP", "PTY", "SKY", "TMN", "TMX", "TMP"];
  //       const weatherValues = Object.fromEntries(
  //         categories.map((category) => [
  //           category,
  //           items.find((item) => item.category === category)?.fcstValue ?? "",
  //         ])
  //       );

  //       console.log(weatherValues);

  //       setWeatherData({
  //         rainPercent: weatherValues["POP"],
  //         rainType: weatherValues["PTY"],
  //         skyCondition: weatherValues["SKY"],
  //         highTemperature: weatherValues["TMN"],
  //         lowTemperature: weatherValues["TMX"],
  //         hourTemperature: weatherValues["TMP"],
  //       });
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // useEffect(() => {
  //   getWeatherData();
  // }, []);

  return (
    <>
      <div>🌤️날씨!</div>
      {weatherData && (
        <>
          <div>강수 확률: {weatherData.rainPercent}</div>
          <div>강수 타입: {weatherData.rainType}</div>
          <div>하늘 상태: {weatherData.skyCondition}</div>
          <div>최고 기온: {weatherData.highTemperature}</div>
          <div>최저 기온: {weatherData.lowTemperature}</div>
          <div>한시간 기온: {weatherData.hourTemperature}</div>
        </>
      )}
    </>
  );
}
