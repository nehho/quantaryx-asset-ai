
import React from 'react';
import { Brain } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface AIFeatureCardProps {
  cardTitle: string;
  cardValue: string;
  chartType: string;
  chartData: any;
  insight: string;
  showAIInsight: boolean;
}

const COLORS = ['#9b87f5', '#33C3F0', '#FF8042', '#7E69AB', '#1EAEDB'];

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

export const renderChart = (chartType: string, chartData: any) => {
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
            isAnimationActive={true}
            animationBegin={0}
            animationDuration={1500}
            animationEasing="ease-out"
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
            isAnimationActive={true}
            animationBegin={0}
            animationDuration={1500}
            animationEasing="ease-out"
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
            isAnimationActive={true}
            animationBegin={0}
            animationDuration={1500}
            animationEasing="ease-out"
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

const AIFeatureCard: React.FC<AIFeatureCardProps> = ({ 
  cardTitle, 
  cardValue, 
  chartType, 
  chartData,
  insight, 
  showAIInsight 
}) => {
  return (
    <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
      <div className="relative block w-full bg-white rounded-lg overflow-hidden">
        <div className="w-full h-auto bg-gradient-to-br from-quantaryx-purple/50 to-quantaryx-brightblue/30 rounded-lg p-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl animate-float p-6 transition-all duration-300">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-quantaryx-green rounded-full"></div>
                <span className="text-sm font-medium">{cardTitle}</span>
              </div>
              <span className="text-2xl font-bold">{cardValue}</span>
            </div>

            <div className="h-60 w-full">
              {renderChart(chartType, chartData)}
            </div>
            
            {showAIInsight && (
              <div className="mt-3 p-3 bg-quantaryx-softblue/20 rounded-lg border border-quantaryx-softblue/30 animate-fade-in text-left">
                <div className="flex items-center mb-1">
                  <Brain className="h-4 w-4 text-quantaryx-purple mr-2" />
                  <span className="text-sm font-medium text-quantaryx-darkblue">AI 智能洞察</span>
                </div>
                <p className="text-xs text-gray-600">
                  {insight}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIFeatureCard;
