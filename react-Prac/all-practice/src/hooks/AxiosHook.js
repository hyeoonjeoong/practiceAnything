import React, { useEffect, useState } from 'react';
import axios from 'axios';
import defaultAxios from 'axios';

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  if (!opts.url) {
    return;
  }
  //   useEffect(() => {}, []);
  return state;
};

const AxiosHook = () => {
  //   const { loading, data, error } = useAxios({
  //     url: 'https://yts.mx/api/v2/list_movies.json',
  //   });
  //   console.log(`Loading: ${loading} \n Error: ${error} \n Data: ${data}`);
  return <div>AxiosHook</div>;
};

export default AxiosHook;

//4:41
