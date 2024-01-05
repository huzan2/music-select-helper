import { useEffect, useState } from "react";
import CustomButton from "../Components/CustomButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isModalOpen } from "../util/atom";

const SignUpPage = () => {
  axios.defaults.baseURL = process.env.REACT_APP_SERVER_URI;
  axios.defaults.withCredentials = true;
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    gender: "none",
    instrument: "",
    phone: "",
  });
  const [pw1, setPw1] = useState("");
  const [pw2, setPw2] = useState("");
  const [pwConfirmed, setPwConfirmed] = useState(true);
  const [emailCheck, setEmailCheck] = useState(true);
  const navigate = useNavigate();
  const setIsModalOpen = useSetRecoilState(isModalOpen);
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
  const handlePw1 = (e) => {
    setPw1(e.target.value);
  };
  const handlePw2 = (e) => {
    setPw2(e.target.value);
  };
  const inputLengthHandle = (e) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
  };
  const handleName = (e) => {
    let temp = userInfo;
    temp.name = e.target.value;
    setUserInfo(temp);
  };
  const handleGender = (e) => {
    let temp = userInfo;
    temp.gender = e.target.value;
    setUserInfo(temp);
  };
  const handleSession = (e) => {
    let temp = userInfo;
    temp.instrument = e.target.value;
    setUserInfo(temp);
  };
  const handleEmail = (e) => {
    let temp = userInfo;
    temp.email = e.target.value;
    setUserInfo(temp);
    if (emailRegEx.test(e.target.value)) {
      setEmailCheck(true);
    } else {
      setEmailCheck(false);
    }
  };
  const handlePhone = (e) => {
    const rawPhone = e.target.value.replace(/-/g, "");
    let formattedPhone = "";
    if (rawPhone.length < 4) {
      formattedPhone = rawPhone;
    } else if (rawPhone.length < 8) {
      formattedPhone = `${rawPhone.slice(0, 3)}-${rawPhone.slice(3)}`;
    } else if (rawPhone.length < 11) {
      formattedPhone = `${rawPhone.slice(0, 3)}-${rawPhone.slice(
        3,
        7
      )}-${rawPhone.slice(7)}`;
    } else {
      formattedPhone = `${rawPhone.slice(0, 3)}-${rawPhone.slice(
        3,
        7
      )}-${rawPhone.slice(7, 11)}`;
    }
    let temp = userInfo;
    temp.phone = formattedPhone;
    setUserInfo(temp);
  };
  useEffect(() => {
    const handleConfirmPassword = () => {
      if (pw1 !== pw2) {
        setPwConfirmed(false);
      } else if (pw1 === pw2) {
        setPwConfirmed(true);
      }
    };
    handleConfirmPassword();
  }, [pw1, pw2]);
  const signUp = async () => {
    const jsonbody = {
      ...userInfo,
      password: pw1,
    };
    console.log(JSON.stringify(jsonbody));
    // eslint-disable-next-line
    const res = await axios
      .post("/api/users/signup", JSON.stringify(jsonbody), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((e) => {
        console.log(e);
        if (e.status === 201) {
          alert("회원가입에 성공했습니다. 로그인 창으로 이동합니다.");
          navigate("/");
          setIsModalOpen(true);
        }
      });
  };
  return (
    <div className="isolate px-6 py-16 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Sign Up
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          sign up and enjoy
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <p className="block text-sm font-semibold leading-6 text-gray-900">
              이름
            </p>
            <div className="mt-2.5">
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleName}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="flex justify-end gap-x-3 pr-4">
            <div className="flex flex-col">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                성별
              </p>
              <div className="mt-2.5">
                <select
                  id="gender"
                  name="gender"
                  onChange={handleGender}
                  className="text-gray-900 py-2 pr-3 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md border-0 focus:ring-2 focus:ring-inset"
                >
                  <option value="none">선택</option>
                  <option value="남">남자</option>
                  <option value="여">여자</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                주 세션
              </p>
              <div className="mt-2.5">
                <select
                  id="session"
                  name="session"
                  onChange={handleSession}
                  className="text-gray-900 py-2 pr-3 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md border-0 focus:ring-2 focus:ring-inset"
                >
                  <option value="none">선택</option>
                  <option value="보컬">보컬</option>
                  <option value="기타">기타</option>
                  <option value="키보드">키보드</option>
                  <option value="베이스">베이스</option>
                  <option value="드럼">드럼</option>
                </select>
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <p className="block text-sm font-semibold leading-6 text-gray-900">
              이메일
            </p>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                onChange={handleEmail}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {emailCheck ? null : (
                <p className="text-end text-red-500 text-sm">
                  이메일이 형식에 맞지 않습니다.
                </p>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <p className="block text-sm font-semibold leading-6 text-gray-900">
              전화번호
            </p>
            <div className="mt-2.5">
              <input
                type="number"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                maxLength={11}
                onInput={inputLengthHandle}
                onChange={handlePhone}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="block">
            <p className="block text-sm font-semibold leading-6 text-gray-900">
              비밀번호
            </p>
            <div className="mt-2.5">
              <input
                type="password"
                name="password"
                id="password"
                maxLength={20}
                onInput={inputLengthHandle}
                onChange={handlePw1}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="block">
            <p className="block text-sm font-semibold leading-6 text-gray-900">
              비밀번호 확인
            </p>
            <div className="mt-2.5">
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                maxLength={20}
                onInput={inputLengthHandle}
                onChange={handlePw2}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {pwConfirmed ? null : (
                <p className="text-end text-red-500 text-sm">
                  비밀번호가 일치하지 않습니다.
                </p>
              )}
            </div>
          </div>
        </div>
        <CustomButton title={"회원가입"} onClick={signUp} />
      </div>
    </div>
  );
};

export default SignUpPage;
