
import React from 'react';
import { Brain } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { renderChart } from './AIFeatureCard';

interface FeatureDetailProps {
  feature: {
    id: string;
    title: string;
    icon: React.ReactNode;
    details: string;
    uniqueFeature: string;
    capabilities: string[];
    chartType: string;
    aiInsight: string;
  };
  onClose: () => void;
}

const FeatureDetail: React.FC<FeatureDetailProps> = ({ feature, onClose }) => {
  return (
    <div className="mt-10 bg-white rounded-xl shadow-md p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          {feature.icon}
          <h3 className="ml-3 font-bold text-xl">{feature.title}</h3>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onClose}
          className="text-gray-500"
        >
          關閉
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="mb-6">
            <h4 className="font-medium mb-2">功能詳情</h4>
            <p className="text-gray-700">{feature.details}</p>
          </div>
          
          <div className="mb-6">
            <h4 className="font-medium mb-2 flex items-center">
              <span className="inline-block w-2 h-2 bg-quantaryx-purple rounded-full mr-2"></span>
              獲取優勢
            </h4>
            <p className="text-gray-700 text-sm border-l-2 border-quantaryx-purple/30 pl-3 py-1">
              {feature.uniqueFeature}
            </p>
          </div>
          
          <h4 className="font-medium mb-3 flex items-center">
            <Brain className="h-4 w-4 mr-2 text-quantaryx-purple" />
            AI 驅動能力
          </h4>
          
          <ScrollArea className="h-[180px] border rounded p-2">
            <ul className="space-y-2">
              {feature.capabilities.map((capability, idx) => (
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
          </ScrollArea>
        </div>
        
        <div>
          <div className="h-64 bg-gray-50 rounded-lg p-4 mb-4">
            {renderChart(feature.chartType, null)}
          </div>
          
          <div className="mt-3 p-4 bg-quantaryx-softblue/20 rounded-lg border border-quantaryx-softblue/30 animate-fade-in">
            <div className="flex items-center mb-2">
              <Brain className="h-4 w-4 text-quantaryx-purple mr-2" />
              <span className="text-sm font-medium text-quantaryx-darkblue">AI 智能洞察</span>
            </div>
            <p className="text-sm text-gray-600">
              {feature.aiInsight}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetail;
