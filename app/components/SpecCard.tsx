'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SpecItem {
  label: string;
  value: string;
  unit?: string;
  highlight?: boolean;
}

interface SpecCardProps {
  title: string;
  specs: SpecItem[];
  icon?: LucideIcon;
  className?: string;
  delay?: number;
}

const SpecCard = ({ title, specs, icon: Icon, className = '', delay = 0 }: SpecCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6 spec-grid ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          {Icon && <Icon className="w-5 h-5 text-porsche-red" />}
          <h3 className="font-orbitron font-bold text-sm tracking-wider text-gray-900 dark:text-white uppercase">
            {title}
          </h3>
        </div>
        <div className="w-8 h-px bg-porsche-red"></div>
      </div>

      {/* Specs Grid */}
      <div className="space-y-4">
        {specs.map((spec, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600"></div>
              <span className="text-xs font-mono text-gray-600 dark:text-gray-400 tracking-wide uppercase">
                {spec.label}
              </span>
            </div>
            <div className="flex items-baseline space-x-1">
              <span 
                className={`font-mono font-bold text-sm ${
                  spec.highlight 
                    ? 'text-porsche-red' 
                    : 'text-gray-900 dark:text-white'
                }`}
              >
                {spec.value}
              </span>
              {spec.unit && (
                <span className="text-xs font-mono text-gray-500 dark:text-gray-500">
                  {spec.unit}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Line */}
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center text-xs font-mono text-gray-500 dark:text-gray-500">
          <span>SPEC.SHEET</span>
          <span>{new Date().getFullYear()}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default SpecCard; 