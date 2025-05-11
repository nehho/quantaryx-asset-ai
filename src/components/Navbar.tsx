
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="font-display font-bold text-2xl text-gradient">QuantaryX</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="font-medium text-gray-700 hover:text-quantaryx-purple transition-colors">產品</a>
            <a href="#vision" className="font-medium text-gray-700 hover:text-quantaryx-purple transition-colors">願景</a>
            <a href="#contact" className="font-medium text-gray-700 hover:text-quantaryx-purple transition-colors">聯繫我們</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button className="bg-quantaryx-darkblue hover:bg-quantaryx-darkblue/90">請求演示</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
