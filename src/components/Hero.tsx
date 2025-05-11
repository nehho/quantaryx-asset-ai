
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Brain, ArrowRight, Activity, ChartBar, Database, Search } from 'lucide-react';
import { ChartContainer } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = [
  { month: '1月', value: 40 },
  { month: '2月', value: 60 },
  { month: '3月', value: 30 },
  { month: '4月', value: 70 },
  { month: '5月', value: 50 },
  { month: '6月', value: 80 },
  { month: '7月', value: 40 },
  { month: '8月', value: 90 },
  { month: '9月', value: 60 },
  { month: '10月', value: 70 },
  { month: '11月', value: 50 },
  { month: '12月', value: 60 },
];

const AIFeatures = [
  {
    icon: <Brain className="h-5 w-5" />,
    title: "智慧資產分析",
    description: "AI強化的資產淨值趨勢預測與風險識別"
  },
  {
    icon: <ChartBar className="h-5 w-5" />,
    title: "自動投資優化",
    description: "基於市場行為的AI驅動投資策略調整"
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: "智能資料整合",
    description: "多源財務數據自動解析與關聯構建"
  },
  {
    icon: <Search className="h-5 w-5" />,
    title: "投資機會識別",
    description: "AI篩選高價值投資標的與市場時機"
  }
];

const Hero = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [showAIInsight, setShowAIInsight] = useState(false);

  const handleFeatureClick = (index: number) => {
    setActiveFeature(index);
    setShowAIInsight(true);
  };

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="bg-grid absolute inset-0 opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
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

            <div className="opacity-0 animate-fade-in animate-delay-500 mt-6 grid grid-cols-2 gap-4">
              {AIFeatures.map((feature, index) => (
                <button 
                  key={index}
                  className={`p-3 rounded-lg text-left transition-all ${
                    activeFeature === index 
                      ? "bg-quantaryx-purple/10 border border-quantaryx-purple/30" 
                      : "hover:bg-gray-50 border border-transparent"
                  }`}
                  onClick={() => handleFeatureClick(index)}
                >
                  <div className="flex items-start">
                    <div className={`p-2 rounded-md ${
                      activeFeature === index ? "bg-quantaryx-purple text-white" : "bg-gray-100"
                    }`}>
                      {feature.icon}
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium">{feature.title}</h3>
                      <p className="text-xs text-gray-500 mt-1">{feature.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in animate-delay-700 mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                <div className="w-full h-auto bg-gradient-to-br from-quantaryx-purple/50 to-quantaryx-brightblue/30 rounded-lg p-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl animate-float p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-quantaryx-green rounded-full"></div>
                        <span className="text-sm font-medium">資產總覽</span>
                      </div>
                      <span className="text-2xl font-bold">$5.43M</span>
                    </div>

                    <div className="h-60 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={mockData} barSize={20}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
                          <XAxis dataKey="month" fontSize={10} tickLine={false} axisLine={false} />
                          <YAxis hide />
                          <Tooltip 
                            formatter={(value) => [`$${Number(value).toLocaleString()}`, '淨值']}
                            cursor={{fill: 'rgba(155, 135, 245, 0.1)'}}
                          />
                          <Bar 
                            dataKey="value" 
                            fill="url(#colorGradient)" 
                            radius={[4, 4, 0, 0]}
                          />
                          <defs>
                            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#9b87f5" stopColor="#9b87f5" />
                              <stop offset="100%" stopColor="#c2b5fa" stopColor="#c2b5fa" />
                            </linearGradient>
                          </defs>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    
                    {showAIInsight && (
                      <div className="mt-3 p-3 bg-quantaryx-softblue/20 rounded-lg border border-quantaryx-softblue/30 animate-fade-in text-left">
                        <div className="flex items-center mb-1">
                          <Brain className="h-4 w-4 text-quantaryx-purple mr-2" />
                          <span className="text-sm font-medium text-quantaryx-darkblue">AI 智能洞察</span>
                        </div>
                        <p className="text-xs text-gray-600">
                          {AIFeatures[activeFeature].title === "智慧資產分析" && "分析顯示您的資產在8月達到高峰，建議關注流動性分配以優化年底稅務籌劃。"}
                          {AIFeatures[activeFeature].title === "自動投資優化" && "根據您的風險偏好與市場波動，AI推薦增加10%的防禦性資產以平衡投資組合。"}
                          {AIFeatures[activeFeature].title === "智能資料整合" && "系統已自動整合12個金融機構的資料，並識別出3個重複計算的資產項目。"}
                          {AIFeatures[activeFeature].title === "投資機會識別" && "AI檢測到5檔符合您投資風格的高潛力標的，點擊查看詳細分析報告。"}
                        </p>
                      </div>
                    )}
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
