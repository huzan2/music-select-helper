import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const onClickLogo = () => {
    navigate("/");
  };
  return (
    <div className="text-center text-4xl cursor-pointer font-bold">
      <p onClick={onClickLogo}>개쩌는 로고</p>
    </div>
  );
};

export default Header;
