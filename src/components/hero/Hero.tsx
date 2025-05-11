
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import HeroHeader from './HeroHeader';
import AIFeatureButton from './AIFeatureButton';
import AIFeatureCard from './AIFeatureCard';
import FeatureCarousel from './FeatureCarousel';
import FeatureDetail from './FeatureDetail';
import { AIFeatures, advancedFeatures } from './constants';

const Hero = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [showAIInsight, setShowAIInsight] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleFeatureClick = (index: number) => {
    setActiveFeature(index);
    setShowAIInsight(true);
  };

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="bg-grid absolute inset-0 opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Hero Header Section */}
          <HeroHeader />
          
          {/* AI Features Grid Section */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left flex flex-col justify-center">
            <div className="opacity-0 animate-fade-in animate-delay-500 mt-6 grid grid-cols-2 gap-4">
              {AIFeatures.map((feature, index) => (
                <AIFeatureButton 
                  key={index}
                  index={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  isActive={activeFeature === index}
                  onClick={() => handleFeatureClick(index)}
                />
              ))}
            </div>
          </div>
          
          {/* Feature Card Visualization */}
          <div className="opacity-0 animate-fade-in animate-delay-700 mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <AIFeatureCard 
              cardTitle={AIFeatures[activeFeature].cardTitle}
              cardValue={AIFeatures[activeFeature].cardValue}
              chartType={AIFeatures[activeFeature].chartType}
              chartData={AIFeatures[activeFeature].chartData}
              insight={AIFeatures[activeFeature].insight}
              showAIInsight={showAIInsight}
            />
          </div>
        </div>
      </div>
      
      {/* Advanced AI Features Section with Carousel */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gradient mb-4">
              QuantaryX 核心 AI 功能
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              滑動卡片探索我們如何運用人工智能重新定義財富管理體驗
            </p>
          </div>
          
          {/* Feature Carousel */}
          <FeatureCarousel 
            features={advancedFeatures}
            selectedFeatureId={selectedFeature?.id}
            onFeatureSelect={setSelectedFeature}
          />
          
          {/* Selected Feature Detail */}
          {selectedFeature && (
            <FeatureDetail 
              feature={selectedFeature}
              onClose={() => setSelectedFeature(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;
