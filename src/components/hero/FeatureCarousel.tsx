
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FeatureItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}

interface FeatureCarouselProps {
  features: FeatureItem[];
  selectedFeatureId: string | null;
  onFeatureSelect: (feature: FeatureItem) => void;
}

const FeatureCarousel: React.FC<FeatureCarouselProps> = ({
  features,
  selectedFeatureId,
  onFeatureSelect
}) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-1">
        {features.map((feature) => (
          <CarouselItem key={feature.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card 
                className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border h-full ${
                  selectedFeatureId === feature.id 
                    ? 'border-quantaryx-purple scale-[1.02]' 
                    : 'border-gray-100'
                }`}
                onClick={() => onFeatureSelect(feature)}
              >
                <CardHeader>
                  <div className="flex items-center mb-2">
                    {feature.icon}
                    <CardTitle className="ml-3 text-lg">{feature.title}</CardTitle>
                  </div>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm line-clamp-2">{feature.details}</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-quantaryx-purple mt-2 px-0"
                  >
                    了解更多 <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center gap-2 mt-4">
        <CarouselPrevious className="relative static left-0 translate-y-0 mr-2" />
        <CarouselNext className="relative static right-0 translate-y-0 ml-2" />
      </div>
    </Carousel>
  );
};

export default FeatureCarousel;
