import { useNavigate } from "react-router-dom";
import DetailButton from "./DetailButton";

function DetailCardListItemAdd({ id }) {
  const navigate = useNavigate();

  const handleAddCard = () => {
    navigate(`/post/${id}/message`);
  };

  return (
    <div>
      <DetailButton onClick={handleAddCard}>+</DetailButton>
    </div>
  );
}

export default DetailCardListItemAdd;
