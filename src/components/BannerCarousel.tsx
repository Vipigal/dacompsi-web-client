import {Carousel} from '@mantine/carousel';
import { ReactNode } from 'react';


interface ICarouselProps{
	children?: ReactNode;
}



const BannerCarousel = ({children}:ICarouselProps)=>{

	return <Carousel withControls withIndicators height={240}  
	slideSize={'100%'}
	slideGap={{ base: 0, sm: 'md' }}>
{children}
	</Carousel>

}

export default BannerCarousel