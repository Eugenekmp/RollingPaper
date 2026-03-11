import styled from "styled-components";

function ProfileImgOptions({ changeImg }) {
  const IMG_LIST = [
    "https://api.dicebear.com/7.x/adventurer/svg?seed=Aneka&backgroundColor=b6e3f4",
    "https://api.dicebear.com/7.x/adventurer/svg?seed=Charlie&backgroundColor=ffd5dc",
    "https://api.dicebear.com/7.x/adventurer/svg?seed=Daisy&backgroundColor=c0aede",
    "https://api.dicebear.com/7.x/adventurer/svg?seed=Ethan&backgroundColor=d1f4d9",
    "https://api.dicebear.com/7.x/adventurer/svg?seed=Freya&backgroundColor=ffdfbf",
    "https://api.dicebear.com/7.x/adventurer/svg?seed=George&backgroundColor=ffd5dc",
    "https://api.dicebear.com/7.x/adventurer/svg?seed=Hannah&backgroundColor=b6e3f4",
    "https://api.dicebear.com/7.x/adventurer/svg?seed=Ivan&backgroundColor=c0aede",
    "https://api.dicebear.com/7.x/adventurer/svg?seed=Zoe&backgroundColor=d1f4d9",
    "https://api.dicebear.com/7.x/adventurer/svg?seed=Kevin&backgroundColor=ffdfbf",
  ];

  const handleChange = (e) => {
    console.log("호출됨", e.target.src);
    changeImg(e.target.src);
  };

  return (
    <div>
      {IMG_LIST.map((url, index) => (
        <Img
          key={index}
          src={url}
          alt={`프로필${index + 1}`}
          onClick={handleChange}
          style={{ cursor: "pointer" }}
        />
      ))}
    </div>
  );
}

const Img = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 100px;
  border: 1px solid grey;
  margin-right: 5px;
`;

export default ProfileImgOptions;
