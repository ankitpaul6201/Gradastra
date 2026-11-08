import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface AdviestButtonProps {
  title: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'glass' | 'white';
  icon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
}

export const AdviestButton: React.FC<AdviestButtonProps> = ({
  title,
  onClick,
  type = 'button',
  variant = 'primary',
  icon,
  className = '',
  style,
  disabled = false
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`adviest-reactive-btn adviest-btn-${variant} ${className}`}
      style={style}
    >
      <div className="adviest-btn-roll-text">
        <span className="adviest-btn-text-main">{title}</span>
        <span className="adviest-btn-text-hover">{title}</span>
      </div>
      <div className="adviest-btn-icon-pill">
        <div className="adviest-icon-incoming">
          {icon || <ArrowRight size={18} strokeWidth={2} />}
        </div>
        <div className="adviest-icon-current">
          {icon || <ArrowRight size={18} strokeWidth={2} />}
        </div>
      </div>
    </button>
  );
};

export default AdviestButton;
