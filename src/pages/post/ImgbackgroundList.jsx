import { useContext } from "react";
import BackgroundCheck from "./BackgroundCheck";
import ImgBackgroundItem from "./ImgbackgroundItem";
import styled from "styled-components";
import MyContext from "../../components/MyContext";

function Imgbackgrounds({ className, onClickImg, userSelectedImg}){
    const { bgImgList } = useContext(MyContext);
    return (
        <div className={className}>
            {bgImgList.map((item, index)=> (
                <ImgBackgroundItem key={index} data={item} onClick={()=>onClickImg(index)}>
                    {index===userSelectedImg? <BackgroundCheck /> : ''}
                </ImgBackgroundItem>
            ))}
        </div>
    )
}
const StyledImgBackgroundList = styled(Imgbackgrounds)`
    display: flex;
    gap: 16px;
    margin: 24px 0;
    width: 100%;
    align-self: start

    @media ${({ theme }) => theme.tablet} {
        margin-top: 40px
    }

    @media ${({ theme }) => theme.mobile} {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 1fr;
        gap: 12px;
    }`

export default StyledImgBackgroundList;