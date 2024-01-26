import React, { useState } from "react";

import * as S from "../styles/DataTableStyle.js";

function DataTable02({ keySet, headers, items }) {
  if (!headers || !headers.length) {
    throw new Error("<DataTable /> headers is required.");
  }

  const [selectedLists, setSelectedLists] = useState([]);

  const handleSingleCheck = (checked, item) => {
    setSelectedLists((prev) => {
      const updatedList = checked
        ? [...prev, item]
        : prev.filter((el) => el !== item);
      console.log(updatedList);
      return updatedList;
    });
  };

  const handleAllCheck = (checked) => {
    if (checked) {
      const allChecked = [];
      items.map((el) => allChecked.push(el.item));
      setSelectedLists(allChecked);
    } else {
      setSelectedLists([]);
    }
  };

  //헤더가 작성한 순서대로 보여질 수 있도록 value값만 확실히 뽑아내기
  const headerList = headers.map((header) => header.value);
  return (
    <>
      <S.Table>
        <thead>
          <S.TableTr>
            <S.TableTd>
              <input
                type="checkbox"
                onChange={(e) => handleAllCheck(e.target.checked)}
                checked={selectedLists.size === items.length ? true : false}
              />
            </S.TableTd>
            {headers.map((header) => (
              <S.TableHeader key={header.text}>{header.text}</S.TableHeader>
            ))}
          </S.TableTr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <S.TableTr key={`${keySet}_${index}`}>
              <S.TableTd>
                <input
                  type="checkbox"
                  onChange={(e) => handleSingleCheck(e.target.checked, item)}
                  checked={selectedLists.includes(item) ? true : false}
                />
              </S.TableTd>
              {headerList.map((value, columnIndex) => (
                <S.TableTd key={`${keySet}_${index}_${columnIndex}`}>
                  {item[value]}
                </S.TableTd>
              ))}
            </S.TableTr>
          ))}
        </tbody>
      </S.Table>
    </>
  );
}

export default DataTable02;
