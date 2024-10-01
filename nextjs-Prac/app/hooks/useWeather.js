import React, { useEffect, useState } from "react";
import axios from "axios";

const useWeather = (date, time, x, y) => {
  const getWeatherData = async (onComplete) => {
    const params = {
      ServiceKey: process.env.NEXT_PUBLIC_WEATHER_KEY,
      pageNo: 1,
      numOfRows: 773,
      dataType: "JSON",
      base_date: date,
      base_time: time,
      nx: x,
      ny: y,
    };
    try {
      const response = await axios({
        method: "get",
        url: "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst",
        params,
      });
      console.log(response.data, "fullResponse");
      const items = response.data.response.body.items.item;

      if (response.data && items) {
        console.log(items, "items");

        const categories = ["POP", "PTY", "SKY", "TMN", "TMX", "TMP"];
        const weatherValues = Object.fromEntries(
          categories.map((category) => [
            category,
            items.find((item) => item.category === category)?.fcstValue ?? "",
          ])
        );

        console.log(weatherValues);

        onComplete({
          rainPercent: weatherValues["POP"],
          rainType: weatherValues["PTY"],
          skyCondition: weatherValues["SKY"],
          highTemperature: weatherValues["TMN"],
          lowTemperature: weatherValues["TMX"],
          hourTemperature: weatherValues["TMP"],
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return {
    getWeatherData,
  };
};

export default useWeather;
