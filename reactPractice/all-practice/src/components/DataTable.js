import React, { useState, useEffect } from "react";

import * as S from "../styles/DataTableStyle.js";

function DataTable({ keySet, headers, items, selectBox, setItems, setDelete }) {
  if (!headers || !headers.length) {
    throw new Error("<DataTable /> headers is required.");
  }

  const [selectedLists, setSelectedLists] = useState(new Set());

  const onChecked = (item) => {
    const newSelectedLists = new Set(selectedLists);
    const checkedItem = items.findIndex((i) => i === item);
    if (newSelectedLists.has(checkedItem)) {
      newSelectedLists.delete(checkedItem);
    } else {
      newSelectedLists.add(checkedItem);
    }
    setSelectedLists(newSelectedLists);

    const selectedContents = Array.from(newSelectedLists).map(
      (index) => items[index]
    );
    const selectedProductId = Array.from(newSelectedLists).map(
      (index) => items[index].productID
    );
    console.log("selectedContents", selectedContents);
    console.log("selectedProductId", selectedProductId);
  };

  const SelectAll = () => {
    const selectedAll = selectedLists.size === items.length;
    const newSelectedLists = new Set(
      selectedAll ? [] : items.map((_, index) => index)
    );
    setSelectedLists(newSelectedLists);
  };

  const handleDelete = () => {
    const selectedIndexes = Array.from(selectedLists);
    const updatedItems = items.filter(
      (_, index) => !selectedIndexes.includes(index)
    );
    const deletedItems = selectedIndexes.map((index) => items[index]);
    setItems(updatedItems);

    console.log("삭제 전 배열", items);
    console.log("뭐가 삭제될거니", deletedItems);
    console.log("삭제 후 배열", updatedItems);
  };

  const headerList = headers.map((header) => header.value);
  return (
    <>
      <S.Table>
        <thead>
          <S.TableTr>
            <S.TableTd>
              <input
                type="checkbox"
                onChange={SelectAll}
                checked={selectedLists.size === items.length}
              />
            </S.TableTd>
            {headers.map((header) => (
              <S.TableHeader key={header.text}>
                {header.value === "deliveryStatus" ? header.text : header.text}
              </S.TableHeader>
            ))}
          </S.TableTr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <S.TableTr key={`${keySet}_${index}`}>
              <S.TableTd>
                <input
                  type="checkbox"
                  onChange={() => onChecked(item)}
                  checked={selectedLists.has(index)}
                />
              </S.TableTd>
              {headerList.map((value, columnIndex) => (
                <S.TableTd key={`${keySet}_${index}_${columnIndex}`}>
                  {value === "deliveryStatus" ? <SelectBox /> : item[value]}
                </S.TableTd>
              ))}
            </S.TableTr>
          ))}
        </tbody>
      </S.Table>
      {setDelete === "true" && (
        <button onClick={handleDelete}>선택 상품 삭제하기</button>
      )}
    </>
  );
}
const SelectBox = () => {
  return (
    <>
      <select name="aaaa">
        <option value="releaseStatus" disabled defaultValue>
          출고 상태 변경
        </option>
        <option value="payWait">결제 대기</option>
        <option value="deliveryStart">출고</option>
        <option value="cancel">취소</option>
      </select>
    </>
  );
};
export default DataTable;
