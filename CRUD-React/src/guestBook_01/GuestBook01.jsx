import React from "react";

import Write from "./components/Write";
import GuestTable from "./components/GuestTable";
import SearchResult from "./components/SearchResult";

const GuestBook01 = () => {
  return (
    <>
      <Write />
      <GuestTable />
      <SearchResult />
    </>
  );
};

export default GuestBook01;
