import { useNavigate } from "react-router-dom";
import CustomButton from "../Components/CustomButton";

const Manual = () => {
  const navigate = useNavigate();
  const onClickBackButton = () => {
    navigate("/");
  };
  return (
    <div>
      설명서페이지
      <CustomButton title={"메인으로"} onClick={onClickBackButton} />
    </div>
  );
};

export default Manual;
