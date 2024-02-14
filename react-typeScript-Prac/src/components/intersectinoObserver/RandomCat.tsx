import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";

interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
}

const RandomCat: React.FC = () => {
  const [list, setList] = useState<Cat[]>([]);
  const [page, setPage] = useState<number>(1);
  const [load, setLoad] = useState<boolean>(true);
  const preventRef = useRef<boolean>(true);
  const obsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getCat();
    const observer = new IntersectionObserver(obsHandler, { threshold: 0.5 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    getCat();
  }, [page]);

  const obsHandler = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting && preventRef.current) {
      preventRef.current = false;
      setPage((prev) => prev + 1);
    }
  };

  const getCat = useCallback(async () => {
    console.log("고양이 사진 불러오기");
    setLoad(true);
    try {
      const res = await axios.get<Cat[]>(
        "https://api.thecatapi.com/v1/images/search"
      );
      if (res.data && res.data.length > 0) {
        setList((prev) => [...prev, { ...res.data[0] }]);
        preventRef.current = true;
      } else {
        console.error("No data returned from API");
      }
    } catch (error) {
      console.error("Error fetching cat images:", error);
    }
    setLoad(false);
  }, [page]);

  return (
    <>
      <div className="wrap min-h-[100vh]">
        {list && (
          <>
            {list.map((cat) => (
              <img
                key={cat.id}
                className="opacity-100 mx-auto mb-6"
                src={cat.url}
                // alt={cat.dke}
                width={"500px"}
                height={"300px"}
              />
            ))}
          </>
        )}
        {load && <div className="py-3 bg-blue-500 text-center">로딩 중</div>}
        <div ref={obsRef} className="py-3 bg-red-500 text-white text-center">
          옵저버 Element
        </div>
      </div>
    </>
  );
};

export default RandomCat;
