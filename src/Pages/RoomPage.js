import CustomButton from "../Components/CustomButton";
import { useNavigate } from "react-router-dom";

const RoomPage = () => {
  const navigate = useNavigate();
  const onClickBackButton = () => {
    navigate("/");
  };
  return (
    <div>
      <CustomButton title={"돌아가기"} onClick={onClickBackButton} />
    </div>
  );
};

export default RoomPage;
