//import { SocialIcon } from "react-social-icons";
import IconGithub from "../images/icon-github.svg";
import IconInsta from "../images/icon-instagram.svg";
import { useRecoilState } from "recoil";
import { isLoggedIn } from "../util/atom";
import { useSetRecoilState } from "recoil";
import { isModalOpen, userDataState } from "../util/atom";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const setIsModalOpen = useSetRecoilState(isModalOpen);
  const onClickGithubIcon = () => {
    window.open("https://github.com/huzan2/music-select-helper");
  };
  const navigate = useNavigate();
  const onClickSignUp = () => {
    navigate("/signup");
  };
  const [LoggedIn, setLoggedIn] = useRecoilState(isLoggedIn);
  // eslint-disable-next-line
  const [userData, setUserData] = useRecoilState(userDataState);
  return (
    <div className="flex absolute flex-col items-center justify-center w-full bg-gray-300 bottom-0 right-0 z-10">
      <div className="flex items-center justify-center py-2 text-center text-sm font-light">
        {LoggedIn ? (
          <>
            <p className="cursor-pointer hover:underline">{userData.name}</p>
            <p className="ml-1"> 님, 환영합니다.</p>
            <p
              className="hover:underline cursor-pointer ml-3"
              onClick={() => {
                setLoggedIn(false);
                alert("로그아웃합니다");
              }}
            >
              로그아웃
            </p>
          </>
        ) : (
          <>
            <p
              className="mx-2 ml-4 cursor-pointer hover:underline"
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              로그인
            </p>
            <p
              onClick={onClickSignUp}
              className="mx-2 cursor-pointer hover:underline"
            >
              회원가입
            </p>
          </>
        )}
      </div>
      <div className="flex">
        <img
          src={IconGithub}
          alt="github"
          onClick={onClickGithubIcon}
          className="h-auto w-8"
        />
        <img src={IconInsta} alt="instagram" className="h-auto w-8" />
      </div>
      <p className="text-center text-sm font-thin">
        ©2023 Copyright: Team Name
      </p>
    </div>
  );
};

export default Footer;
