'use client';

import Carousel, {
  ArrowProps,
  CarouselInternalState,
  CarouselProps,
} from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  desktop: {
    breakpoint: {max: 3000, min: 1150},
    items: 3,
  },
  tablet: {
    breakpoint: {max: 1150, min: 800},
    items: 2,
  },
  mobile: {
    breakpoint: {max: 800, min: 0},
    items: 1,
  },
};

type Props = {
  children: React.ReactNode;
};

export default function MultiCarousel({children}: Props) {
  return (
    <Carousel
      infinite
      autoPlay
      itemClass='gap-x-auto h-full z-0 overflow-visible'
      responsive={responsive}
    >
      {children}
    </Carousel>
  );
}
