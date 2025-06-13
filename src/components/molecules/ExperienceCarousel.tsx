import * as React from 'react';

// Components
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

// Images
import TITAN from '@/assets/journey/titan.webp';
import Ago from '@/assets/journey/ago.webp';
import Reuni from '@/assets/journey/reuni.webp';

const photos = [TITAN, Ago, Reuni];

export function ExperienceCarousel() {
  return (
    <div className="w-full lg:w-[70%] flex justify-center">
      <Carousel
        className="w-full max-w-[800px]"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="">
          {photos.map((photo, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="border-gray-500">
                  <CardContent className="max-h-[360px] p-0 w-full flex items-center justify-center">
                    <Image
                      style={{
                        objectFit: 'cover',
                        maxHeight: '360px',
                        borderRadius: '0.5rem',
                      }}
                      src={photo}
                      alt="titan"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-10 w-full flex justify-center gap-5">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
