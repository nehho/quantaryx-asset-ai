
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
            <a href="#investors" className="font-medium text-gray-700 hover:text-quantaryx-purple transition-colors">投資者</a>
            <a href="#contact" className="font-medium text-gray-700 hover:text-quantaryx-purple transition-colors">聯繫我們</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-quantaryx-darkblue hover:bg-quantaryx-darkblue/90">請求演示</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label={isMenuOpen ? "關閉選單" : "開啟選單"}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <a href="#products" className="block py-3 px-4 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md" onClick={toggleMenu}>產品</a>
            <a href="#vision" className="block py-3 px-4 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md" onClick={toggleMenu}>願景</a>
            <a href="#investors" className="block py-3 px-4 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md" onClick={toggleMenu}>投資者</a>
            <a href="#contact" className="block py-3 px-4 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md" onClick={toggleMenu}>聯繫我們</a>
            <div className="pt-2">
              <Button className="bg-quantaryx-darkblue hover:bg-quantaryx-darkblue/90 w-full">請求演示</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
