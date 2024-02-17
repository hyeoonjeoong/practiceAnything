import React, { useState } from "react";

import Checkbox from "./Checkbox";

const MultipleCheck = () => {
  const [checkValue, setCheckValue] = useState<string>("");

  const handleCheckboxChange = (id: string, value: string) => {
    if (value === checkValue) {
      // 이미 선택된 항목의 체크를 해제할 때
      setCheckValue("");
    } else {
      // 새로운 항목을 선택할 때
      setCheckValue(value);
    }
    console.log(checkValue);
  };
  return (
    <>
      <Checkbox
        id="alcohol_1"
        value="소주/맥주"
        onChange={() => handleCheckboxChange("alcohol_1", "소주/맥주")}
        isChecked={checkValue === "소주/맥주"}
      >
        소주 / 맥주
      </Checkbox>
      {/* <Checkbox id="alcohol_2" value="해외맥주/생맥주">
        해외맥주 / 생맥주
      </Checkbox>
      <Checkbox id="alcohol_3" value="칵테일">
        칵테일
      </Checkbox>
      <Checkbox id="alcohol_4" value="막걸리/전통주">
        막걸리 / 전통주
      </Checkbox>
      <Checkbox id="alcohol_5" value="와인">
        와인
      </Checkbox>
      <Checkbox id="alcohol_6" value="양주">
        양주
      </Checkbox>
      <Checkbox id="alcohol_7" value="고량주">
        고량주
      </Checkbox>
      <Checkbox id="alcohol_8" value="사케/하이볼">
        사케 / 하이볼
      </Checkbox>
      <Checkbox id="alcohol_9" value="이색술">
        이색 술
      </Checkbox> */}
    </>
  );
};

export default MultipleCheck;
