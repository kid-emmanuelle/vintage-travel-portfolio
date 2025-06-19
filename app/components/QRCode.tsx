'use client';

import { QRCodeSVG } from 'qrcode.react';

interface QRCodeProps {
  value: string;
  size?: number;
  label?: string;
  className?: string;
}

const QRCode = ({ value, size = 64, label, className = '' }: QRCodeProps) => {
  return (
    <div className={`flex flex-col items-center space-y-1 ${className}`}>
      <div className="p-2 bg-white border border-gray-300 dark:border-gray-600">
        <QRCodeSVG
          value={value}
          size={size}
          bgColor="white"
          fgColor="black"
          level="M"
          includeMargin={false}
        />
      </div>
      {label && (
        <div className="text-xs font-mono text-gray-600 dark:text-gray-400 tracking-wider">
          {label}
        </div>
      )}
    </div>
  );
};

export default QRCode; 