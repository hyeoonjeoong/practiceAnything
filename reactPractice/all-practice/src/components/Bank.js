import { useState } from "react";

const Bank = () => {
  const [money, setMoney] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const addMoney = () => {
    const newMoney = parseFloat(inputValue);
    setMoney((prevMoney) => prevMoney + newMoney);
    setInputValue("");
  };
  const minusMoney = () => {
    const newMoney = parseFloat(inputValue);
    setMoney((prevMoney) => prevMoney - newMoney);
    setInputValue("");
  };
  return (
    <>
      <h3>💲💰🤑</h3>
      <h3>잔액 : {money}원</h3>

      <input
        type="number"
        value={inputValue}
        placeholder="금액을 입력하세요"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addMoney}>입금</button>
      <button onClick={minusMoney}>출금</button>
    </>
  );
};

export default Bank;
