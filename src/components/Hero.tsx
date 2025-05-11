
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Brain, ArrowRight, Activity, ChartBar, Database, Search, Briefcase, TrendingUp, BarChart3, ChartPie, Repeat } from 'lucide-react';
import { ChartContainer } from '@/components/ui/chart';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

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

const pieData = [
  { name: '股票', value: 35 },
  { name: '債券', value: 20 },
  { name: '不動產', value: 25 },
  { name: '另類投資', value: 15 },
  { name: '現金', value: 5 },
];

const portfolioData = [
  { date: '1/1', value: 100 },
  { date: '2/1', value: 105 },
  { date: '3/1', value: 110 },
  { date: '4/1', value: 108 },
  { date: '5/1', value: 115 },
  { date: '6/1', value: 125 },
  { date: '7/1', value: 135 },
  { date: '8/1', value: 145 },
  { date: '9/1', value: 155 },
  { date: '10/1', value: 170 },
  { date: '11/1', value: 165 },
  { date: '12/1', value: 180 },
];

const COLORS = ['#9b87f5', '#33C3F0', '#FF8042', '#7E69AB', '#1EAEDB'];

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

// Advanced features for detailed display
const advancedFeatures = [
  {
    id: "wealth-overview",
    title: "財富總覽",
    icon: <ChartPie className="h-6 w-6 text-quantaryx-purple" />,
    description: "AI驅動的全方位財富儀表板",
    details: "我們的AI系統自動連接並分析您所有的資產數據，包括銀行賬戶、投資組合、房地產、私募股權和加密貨幣，以創建一個綜合性的財富儀表板。",
    chartType: "pie",
    capabilities: [
      "資產類別自動分類與標記",
      "跨機構資產整合與同步",
      "AI異常檢測與風險警報",
      "預測性淨值變化趨勢分析"
    ]
  },
  {
    id: "alternative-investments",
    title: "另類投資總覽",
    icon: <Briefcase className="h-6 w-6 text-quantaryx-purple" />,
    description: "私募、房地產、藝術品智能追蹤",
    details: "QuantaryX的AI系統能夠追踪、分析和評估傳統上難以量化的另類投資，包括私募股權、房地產、收藏品和藝術品。",
    chartType: "pie",
    capabilities: [
      "非流動性資產估值AI模型",
      "私募投資表現追踪引擎",
      "另類投資與公開市場相關性分析",
      "智能流動性預測與策略建議"
    ]
  },
  {
    id: "real-time-tracking",
    title: "實時跟踪",
    icon: <Activity className="h-6 w-6 text-quantaryx-purple" />,
    description: "市場波動即時更新與AI分析",
    details: "我們的AI系統不僅能實時追踪您的投資組合表現，還能智能分析市場波動對您資產的影響，並提供即時的見解和建議。",
    chartType: "line",
    capabilities: [
      "實時市場數據與組合影響分析",
      "新聞事件與資產關聯性AI檢測",
      "投資組合實時風險評估",
      "情緒分析與市場趨勢預測"
    ]
  },
  {
    id: "automated-trading",
    title: "自動化交易",
    icon: <Repeat className="h-6 w-6 text-quantaryx-purple" />,
    description: "AI策略驅動的智能交易系統",
    details: "QuantaryX的AI交易系統能根據您的風險偏好和投資目標，自動執行交易策略，包括再平衡、止損和策略性進出場。",
    chartType: "bar",
    capabilities: [
      "智能再平衡與稅務優化交易",
      "動態止損/止盈策略執行",
      "多因子AI交易信號生成",
      "投資組合對沖自動調整"
    ]
  },
  {
    id: "full-ai",
    title: "全AI體驗",
    icon: <Brain className="h-6 w-6 text-quantaryx-purple" />,
    description: "全方位AI助手為您管理財富",
    details: "我們的AI財富助手能夠理解您的長期財務目標，並主動提供見解、建議和決策支持，讓財富管理變得前所未有的簡單和智能。",
    chartType: "advanced",
    capabilities: [
      "自然語言財務查詢系統",
      "智能決策推薦引擎",
      "跨資產類別關聯分析",
      "個性化財富目標追踪與調整"
    ]
  }
];

const Hero = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [showAIInsight, setShowAIInsight] = useState(false);
  const [selectedAdvancedFeature, setSelectedAdvancedFeature] = useState(null);

  const handleFeatureClick = (index: number) => {
    setActiveFeature(index);
    setShowAIInsight(true);
  };

  const handleAdvancedFeatureClick = (feature: any) => {
    setSelectedAdvancedFeature(feature);
  };

  const renderChart = (chartType: string) => {
    if (chartType === 'pie') {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value) => [`${value}%`, '占比']}
            />
          </PieChart>
        </ResponsiveContainer>
      );
    } else if (chartType === 'line') {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={portfolioData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
            <XAxis dataKey="date" fontSize={10} tickLine={false} axisLine={false} />
            <YAxis hide />
            <Tooltip 
              formatter={(value) => [`$${Number(value).toLocaleString()}`, '表現']}
              cursor={{fill: 'rgba(155, 135, 245, 0.1)'}}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#9b87f5" 
              dot={false}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      );
    } else if (chartType === 'advanced') {
      return (
        <div className="p-2 bg-quantaryx-softblue/20 rounded-lg h-full flex flex-col justify-center items-center">
          <Brain className="h-12 w-12 text-quantaryx-purple mb-2 animate-pulse" />
          <div className="text-center">
            <p className="font-medium text-quantaryx-darkblue">AI 正在分析您的投資組合</p>
            <p className="text-xs text-gray-600 mt-1">發現潛在機會與風險...</p>
          </div>
        </div>
      );
    } else {
      return (
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
                <stop offset="0%" stopColor="#9b87f5" />
                <stop offset="100%" stopColor="#c2b5fa" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      );
    }
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
                              <stop offset="0%" stopColor="#9b87f5" />
                              <stop offset="100%" stopColor="#c2b5fa" />
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
      
      {/* Advanced AI Features Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gradient mb-4">
              QuantaryX 核心 AI 功能
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              點擊卡片了解我們如何運用人工智能重新定義財富管理體驗
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedFeatures.map((feature) => (
              <div
                key={feature.id}
                className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border ${
                  selectedAdvancedFeature?.id === feature.id 
                    ? 'border-quantaryx-purple scale-[1.02]' 
                    : 'border-gray-100'
                }`}
                onClick={() => handleAdvancedFeatureClick(feature)}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="ml-3 font-bold text-lg">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-2">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {selectedAdvancedFeature && (
            <div className="mt-10 bg-white rounded-xl shadow-md p-6 animate-fade-in">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  {selectedAdvancedFeature.icon}
                  <h3 className="ml-3 font-bold text-xl">{selectedAdvancedFeature.title}</h3>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setSelectedAdvancedFeature(null)}
                  className="text-gray-500"
                >
                  關閉
                </Button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 mb-6">{selectedAdvancedFeature.details}</p>
                  
                  <h4 className="font-medium mb-3 flex items-center">
                    <Brain className="h-4 w-4 mr-2 text-quantaryx-purple" />
                    AI 驅動能力
                  </h4>
                  
                  <ul className="space-y-2">
                    {selectedAdvancedFeature.capabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="h-5 w-5 rounded-full flex items-center justify-center mt-0.5 mr-2 bg-quantaryx-purple/10 text-quantaryx-purple">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-3 w-3">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        <span className="text-sm">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="h-64 bg-gray-50 rounded-lg p-4">
                  {renderChart(selectedAdvancedFeature.chartType)}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;
