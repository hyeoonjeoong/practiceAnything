import React, { useState, useRef } from "react";
import styled from "styled-components";

//input 에서 사용자가 업로드 한 file을 base64로 인코딩 한다.
//인코딩 된 문자열을 useState로 관리할 수 있다.
//이를 통해 사용자가 업로드한 파일의 미리보기가 가능해진다!

//FileReader 는 File, Blob객체를 핸들링하는데 사용한다.
//기본적으로 이벤트 형식이니 이벤트 리스너를 사용해 줄 수 있다!

//--FileReader.readAsDataURL()
//File, Blob을 읽어와 base64로 인코딩 한 문자열을 FileReader 인스턴스의 result라는 속성에 담아준다.

//--FileReader.onload
//FileReader가 성공적으로 파일을 읽어들였을 때 트리거 되는 이벤트 핸들러이다.
//이 핸들러 내부에 우리가 원하는 이미지 프리뷰 로직을 넣어주면 된다.

//도움 받은 링크: https://nukw0n-dev.tistory.com/30#FileReader-onload [찐이의 개발 연결구과:티스토리]

//https://velog.io/@hye_rin/React-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%85%EB%A1%9C%EB%93%9C%ED%95%98%EA%B3%A0-%EB%AF%B8%EB%A6%AC%EB%B3%B4%EA%B8%B0

const FileReader = () => {
  const [uploadFile, setUploadFile] = useState("");

  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();

  //   const handleFileUpload = (e) => {
  //     fileEncode(e.target.files[0]);

  //     console.log(e.target.files[0]); //업로드 한 파일에 대한 정보 확인 가능
  //   };

  const fileEncode = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    console.log(reader);
    return new Promise((resolve) => {
      reader.onload = () => {
        setUploadFile(reader.result);
        resolve();
      };
    });
  };

  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new window.FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  return (
    <>
      <li>FileReader Web API 사용해보기</li>
      <input type="file" onChange={saveImgFile} ref={imgRef} />
      <PreviewBox>
        {imgFile && <img src={imgFile} alt="이미지 미리보기" />}
      </PreviewBox>
    </>
  );
};

export default FileReader;

const PreviewBox = styled.div`
  width: 300px;
  height: 300px;
  object-fit: cover;
  background-color: wheat;
`;
