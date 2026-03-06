import DetailButton from "./DetailButton";

function DetailCardListItem({ card, editMode, onDelete, onClick }) {
  const formatted = card.createdAt.slice(0, 10).replace(/-/g, "."); // 날짜 형식 변경

  return (
    <div onClick={onClick}>
      {editMode && (
        <DetailButton
          onClick={(e) => {
            e.stopPropagation();
            onDelete(card.id);
          }}
        >
          휴지통
        </DetailButton>
      )}

      <div>
        <img src={card.profileImageURL} />
        <div>
          <h4>
            From. <span>{card.sender}</span>
          </h4>
          <p>{card.relationship}</p>
        </div>
      </div>
      <p>{card.content}</p>
      <p>{formatted}</p>
    </div>
  );
}

export default DetailCardListItem;
