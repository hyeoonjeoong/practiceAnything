import React, { useEffect, useState } from "react";

import Write from "./components/Write";
import GuestTable from "./components/GuestTable";
import SearchResult from "./components/SearchResult";

const GuestBook01 = () => {
  const [content, setContent] = useState([]);
  const [listId, setListId] = useState(0);

  const writtenData = (data) => {
    const newContent = {
      id: listId,
      writer: data.writer,
      inputText: data.inputText,
    };
    setContent([...content, newContent]);
    setListId(listId + 1);
  };

  useEffect(() => {
    console.log(content);
  }, [content]);

  return (
    <>
      <Write writtenData={writtenData} />
      <GuestTable content={content} />
      <SearchResult />
    </>
  );
};

export default GuestBook01;
