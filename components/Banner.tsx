import Container from "../styles/utils";
import Image, { StaticImageData } from "next/image";
import styled from "styled-components";


interface BannerProps {
    image: StaticImageData;
    width: number;
    height: number;
}


const Banner = ({image, width, height }: BannerProps) => {
return (
    <BannerContainer>
        <Image src={image} width={width} height={height} alt="Banner Image"/>
    </BannerContainer>
)
}

const BannerContainer = styled.section`
    ${Container}
    border-top: 3px solid ${({theme}) => theme.colors.primary};
    border-bottom: 3px solid ${({theme}) => theme.colors.primary};

`;

export default Banner;