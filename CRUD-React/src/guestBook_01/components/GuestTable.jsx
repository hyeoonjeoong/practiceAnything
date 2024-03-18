import React, { useEffect } from "react";

const GuestTable = ({ content }) => {
  useEffect(() => {
    console.log(content);
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th className="table-writer">작성자</th>
            <th className="table-content">내용</th>
          </tr>
        </thead>
        {content.map((data) => (
          <>
            <tr key={data.id}>
              <td className="table-writer">{data.writer}</td>
              <td>{data.inputText}</td>
            </tr>
          </>
        ))}
      </table>
    </>
  );
};

export default GuestTable;
