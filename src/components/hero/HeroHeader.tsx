
import React from 'react';
import { Brain } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroHeader: React.FC = () => {
  return (
    <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left flex flex-col justify-center">
      <div className="opacity-0 animate-fade-in">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-quantaryx-softblue text-quantaryx-darkblue mb-6">
          <Brain className="h-4 w-4 mr-1.5" />
          <span>新一代AI財富管理系統</span>
        </div>
      </div>
      
      <h1 className="opacity-0 animate-fade-in animate-delay-200 text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
        <span className="block">用人工智能</span>
        <span className="block text-gradient">重新定義資產掌控</span>
      </h1>
      
      <p className="opacity-0 animate-fade-in animate-delay-300 mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
        QuantaryX 整合AI深度學習、知識圖譜與自然語言處理技術，為高資產個人與專業投資者提供全方位的資產可視化、智能決策與自動化執行平台。
      </p>
      
      <div className="opacity-0 animate-fade-in animate-delay-400 mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
        <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
          <Button className="bg-quantaryx-purple hover:bg-quantaryx-purple/90 text-white px-8 py-6 text-lg">
            開始使用
          </Button>
          <Button variant="outline" className="border-quantaryx-purple text-quantaryx-purple hover:bg-quantaryx-purple/10 px-8 py-6 text-lg">
            了解更多
          </Button>
        </div>
        <p className="mt-3 text-sm text-gray-500">
          專為高資產個人與專業投資者設計
        </p>
      </div>
    </div>
  );
};

export default HeroHeader;
