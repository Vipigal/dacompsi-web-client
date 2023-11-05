import { Carousel } from "@mantine/carousel";
import { ReactNode } from "react";

interface ICarouselProps {
  children?: ReactNode;
  className?: string;
}

const BannerCarousel = ({ children, className }: ICarouselProps) => {
  return (
    <Carousel
      withControls
      withIndicators
      height={240}
      slideSize={"100%"}
      slideGap={{ base: 0, sm: "md" }}
      className={className}
    >
      {children}
    </Carousel>
  );
};

export default BannerCarousel;
