
import React from 'react';
import { Button } from "@/components/ui/button";
import { Brain } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="bg-grid absolute inset-0 opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left flex flex-col justify-center">
            <div className="opacity-0 animate-fade-in">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-quantaryx-softblue text-quantaryx-darkblue mb-6">
                <Brain className="h-4 w-4 mr-1.5" />
                <span>AI 驅動的資產作業系統</span>
              </div>
            </div>
            
            <h1 className="opacity-0 animate-fade-in animate-delay-200 text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block">重新定義</span>
              <span className="block text-gradient">資產理解與財富掌控</span>
            </h1>
            
            <p className="opacity-0 animate-fade-in animate-delay-300 mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              QuantaryX 是一套為高資產個人、家族辦公室與資產管理專業人士打造的「AI 財富操作系統」。我們不是「做數據可視化」，我們是重新定義「你如何感知、理解並控制你的資產」。
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
          
          <div className="opacity-0 animate-fade-in animate-delay-500 mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                <div className="w-full h-80 bg-gradient-to-br from-quantaryx-purple/50 to-quantaryx-brightblue/30 rounded-lg flex items-center justify-center">
                  <div className="p-5 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl animate-float">
                    <div className="w-64 h-48 flex flex-col items-start justify-between">
                      <div className="w-full flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-quantaryx-green rounded-full"></div>
                          <span className="text-sm font-medium">資產總覽</span>
                        </div>
                        <span className="text-lg font-bold">$5.43M</span>
                      </div>
                      
                      <div className="w-full mt-4">
                        <div className="h-24 bg-gradient-to-r from-quantaryx-softblue to-quantaryx-brightblue/20 rounded-lg flex items-end p-2">
                          {[40, 60, 30, 70, 50, 80, 40, 90, 60, 70, 50, 60].map((height, i) => (
                            <div 
                              key={i}
                              className="w-1/12 mx-0.5 bg-white/60 rounded-t"
                              style={{ height: `${height}%` }}
                            ></div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex justify-between w-full text-xs text-gray-600 mt-2">
                        <span>Jan</span>
                        <span>Jun</span>
                        <span>Dec</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
