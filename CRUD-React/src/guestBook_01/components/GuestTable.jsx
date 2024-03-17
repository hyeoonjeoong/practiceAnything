import React, { useEffect } from "react";

const GuestTable = ({ content }) => {
  useEffect(() => {
    console.log(content);
  }, []);

  return (
    <>
      <table>
        <th>
          <td>작성자</td>
          <td>내용</td>
        </th>
        {content.map((data) => (
          <>
            <tr key={data.id}>
              <td>{data.writer}</td>
              <td>{data.inputText}</td>
            </tr>
          </>
        ))}
      </table>
    </>
  );
};

export default GuestTable;
