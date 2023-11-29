import { useEffect, useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { isModalOpen } from "../util/atom";
import CustomButton from "./CustomButton";
import { useNavigate } from "react-router-dom";

const LoginModal = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();
  const modal = useRef();
  const setIsModalOpen = useSetRecoilState(isModalOpen);
  const onClickInvisible = () => {
    setIsModalOpen(false);
  };
  const onClickToSignUp = () => {
    onClickInvisible();
    navigate("/signup");
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePw = (e) => {
    setPw(e.target.value);
  };
  const onClickLoginButton = () => {
    console.log(`email: ` + email, `pw: ` + pw);
  };
  useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, []);
  return (
    <div
      ref={modal}
      onClick={(e) => {
        if (e.target === modal.current) {
          onClickInvisible();
        }
      }}
      className="fixed left-0 top-0 w-screen h-screen flex bg-[rgba(0,0,0,0.5)] justify-center items-center z-10 whitespace-pre-line"
    >
      <div className="bg-white rounded-lg flex flex-col justify-center overflow-scroll w-2/3 h-2/3">
        <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          login
        </h2>
        <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
          <p className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </p>
          <input
            id="email"
            name="email"
            onChange={onChangeEmail}
            className="block w-full text-sm pl-2 font-normal rounded-md border-0 text-gray-900 shadow-sm placeholder:text-gray-400 py-1.5 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          />
          <p className="block text-sm font-medium leading-6 text-gray-900">
            Password
          </p>
          <input
            id="password"
            name="password"
            type="password"
            onChange={onChangePw}
            className="block w-full rounded-md pl-2 border-0 text-gray-900 shadow-sm placeholder:text-gray-400 py-1.5 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          />
          <CustomButton title={"로그인"} onClick={onClickLoginButton} />
          <CustomButton title={"구글로 로그인 버튼 여기"} />
          <div className="flex text-center text-sm justify-center mt-4">
            <p className="mx-1">회원이 아니라면?</p>
            <p
              onClick={onClickToSignUp}
              className="mx-1 underline text-blue-400 cursor-pointer hover:text-blue-200"
            >
              회원가입
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
