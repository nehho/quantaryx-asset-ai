
import React from 'react';

interface AIFeatureButtonProps {
  index: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

const AIFeatureButton: React.FC<AIFeatureButtonProps> = ({
  index,
  icon,
  title,
  description,
  isActive,
  onClick
}) => {
  return (
    <button 
      className={`p-3 rounded-lg text-left transition-all ${
        isActive 
          ? "bg-quantaryx-purple/10 border border-quantaryx-purple/30" 
          : "hover:bg-gray-50 border border-transparent"
      }`}
      onClick={onClick}
    >
      <div className="flex items-start">
        <div className={`p-2 rounded-md ${
          isActive ? "bg-quantaryx-purple text-white" : "bg-gray-100"
        }`}>
          {icon}
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium">{title}</h3>
          <p className="text-xs text-gray-500 mt-1">{description}</p>
        </div>
      </div>
    </button>
  );
};

export default AIFeatureButton;
