import React, { useState, useRef } from "react";
import styled from "styled-components";

//input 에서 사용자가 업로드 한 file을 base64로 인코딩 한다.
//인코딩 된 문자열을 useState로 관리할 수 있다.
//이를 통해 사용자가 업로드한 파일의 미리보기가 가능해진다!

const FileReader = () => {
  const [uploadImgFile, setUploadImgFile] = useState("");
  const imgRef = useRef();

  const saveImgFile = () => {
    // 입력된 파일을 가져온다.
    const file = imgRef.current.files[0];

    console.log(file); //업로드한 파일의 정보가 보여진다!

    //파일 데이터를 읽어올 수 있도록 FileReader 생성자 만들기.
    const reader = new window.FileReader();

    //readAsDataURL - File, Blob을 읽어와 base64로 인코딩 한 문자열을 FileReader 인스턴스의 result라는 속성에 담아준다.
    //간단히 File, Blob 객체를 읽어 Data URL 형태로 바꿔준다!
    reader.readAsDataURL(file);

    //onload - 파일을 성공적으로 읽었을 때 실행.
    reader.onload = () => {
      //파일이 읽어졌다면 result 속성에 담기게 된다.
      setUploadImgFile(reader.result);
    };
  };

  return (
    <>
      <li>FileReader Web API 사용해보기</li>
      {/* accept 은 input type="file" 일 때만 사용 할 수 있다. 
       accept="image/*" 은 이미지 확장자 전체를 허용하겠다는 것!
       특정 확장자만 받고 싶다면 accept=".png, .jpg" 이런식으로 사용 가능! */}
      <input type="file" onChange={saveImgFile} ref={imgRef} accept="image/*" />
      <PreviewBox>
        {uploadImgFile && <img src={uploadImgFile} alt="이미지 미리보기" />}
      </PreviewBox>
    </>
  );
};

export default FileReader;

const PreviewBox = styled.div`
  width: 300px;
  height: 300px;
  background-color: wheat;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;
