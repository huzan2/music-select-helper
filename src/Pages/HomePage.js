import CustomButton from "../Components/CustomButton";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const onClickManual = () => {
    navigate("/manual");
  };
  return (
    <div className="items-center justify-center">
      <div className="mt-64">
        <CustomButton title={"room 생성"} />
        <CustomButton title={"room 입장"} />
        <div className="flex mt-4 text-center justify-center">
          <p className="mx-1 text-sm">사용법이 궁금하다면?</p>
          <p
            className="mx-1 text-sm underline text-blue-400 cursor-pointer"
            onClick={onClickManual}
          >
            설명서 바로가기
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
