'use client';

import { useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';

interface BarcodeProps {
  value: string;
  width?: number;
  height?: number;
  format?: string;
  label?: string;
  className?: string;
}

const Barcode = ({ 
  value, 
  width = 2, 
  height = 40, 
  format = 'CODE128',
  label,
  className = '' 
}: BarcodeProps) => {
  const barcodeRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (barcodeRef.current) {
      try {
        JsBarcode(barcodeRef.current, value, {
          format: format,
          width: width,
          height: height,
          displayValue: false,
          background: 'transparent',
          lineColor: '#000000',
          margin: 0,
        });
      } catch (error) {
        console.error('Barcode generation failed:', error);
      }
    }
  }, [value, width, height, format]);

  return (
    <div className={`flex flex-col items-center space-y-1 ${className}`}>
      <div className="bg-white p-2 border border-gray-300 dark:border-gray-600">
        <svg ref={barcodeRef}></svg>
      </div>
      {label && (
        <div className="text-xs font-mono text-gray-600 dark:text-gray-400 tracking-wider">
          {label}
        </div>
      )}
    </div>
  );
};

export default Barcode; 