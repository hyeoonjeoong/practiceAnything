import React from "react";
import { useForm } from "react-hook-form";

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log("제출 성공", data);
  };

  return (
    <>
      <hr />
      <h3>react hook form Prac</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* {!errors.id && <label htmlFor="id">id</label>} */}
        <label htmlFor="id">id</label>
        <input
          type="text"
          name="id"
          id="id"
          placeholder="아이디를 입력해주세요."
          style={inputStyle}
          {...register("id", {
            required: "아이디는 필수 값 입니다.",
            maxLength: {
              value: 20,
              message: "20자 이내로 작성 가능합니다.",
            },
          })}
          onChange={() => {
            trigger("id");
          }}
        />
        {errors.id && errors.id.type === "required" && (
          <p>{errors.id.message}</p>
        )}
        {errors.id && errors.id.type === "maxLength" && (
          <p>{errors.id.message}</p>
        )}

        <label htmlFor="pw">pw</label>
        <input
          type="password"
          name="pw"
          id="pw"
          placeholder="8~20자 영문 대소문자, 숫자 조합."
          style={inputStyle}
          {...register("pw", {
            required: "비밀번호는 필수 값 입니다.",
            maxLength: {
              value: 20,
              message: "20자 이내로 작성 가능합니다.",
            },
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/,
              message: "8~20자 영문 대소문자, 숫자 조합으로 가능합니다.",
            },
          })}
          onChange={() => {
            trigger("pw");
          }}
        />
        {errors.pw && errors.pw.type === "required" && (
          <p>{errors.pw.message}</p>
        )}
        {errors.pw && errors.pw.type === "maxLength" && (
          <p>{errors.pw.message}</p>
        )}
        {errors.pw && errors.pw.type === "pattern" && (
          <p>{errors.pw.message}</p>
        )}

        <label htmlFor="pwCheck">pwCheck</label>
        <input
          type="password"
          name="pwCheck"
          id="pwCheck"
          placeholder="비밀번호를 확인해주세요."
          style={inputStyle}
          {...register("pwCheck", {
            required: "비밀번호 확인은 필수 값입니다.",
            validate: (value) =>
              value === getValues("pw") || "비밀번호가 일치하지 않습니다.",
          })}
          onChange={() => {
            trigger("pwCheck");
          }}
        />
        {errors.pwCheck && errors.pwCheck.type === "required" && (
          <p>{errors.pwCheck.message}</p>
        )}
        {errors.pwCheck && errors.pwCheck.type === "validate" && (
          <p>{errors.pwCheck.message}</p>
        )}

        <label htmlFor="name">name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="이름을 입력해주세요."
          style={inputStyle}
          {...register("name", {
            required: "이름은 필수 값 입니다.",
            minLength: {
              value: 2,
              message: "최소 두 글자 이상 입력 해 주세요.",
            },
          })}
          onChange={() => {
            trigger("name");
          }}
        />
        {errors.name && errors.name.type === "required" && (
          <p>{errors.name.message}</p>
        )}
        {errors.name && errors.name.type === "minLength" && (
          <p>{errors.name.message}</p>
        )}

        <label htmlFor="nickName">nickName</label>
        <input
          type="text"
          name="nickName"
          id="nickName"
          placeholder="사용하실 닉네임을 입력해주세요."
          style={inputStyle}
          {...register("nickName", {
            required: "닉네임은 필수 값 입니다.",
            minLength: {
              value: 2,
              message: "최소 두 글자 이상 입력 해 주세요.",
            },
          })}
          onChange={() => {
            trigger("nickName");
          }}
        />
        {errors.nickName && errors.nickName.type === "required" && (
          <p>{errors.nickName.message}</p>
        )}
        {errors.nickName && errors.nickName.type === "minLength" && (
          <p>{errors.nickName.message}</p>
        )}

        <button type="submit">회원가입</button>
      </form>
    </>
  );
};

export default ReactHookForm;

const inputStyle = {
  width: "500px",
  padding: "10px",
  fontSize: "16px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  display: "block",
};
