import React from 'react';
import mavLogo from '../mav.png';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => (
  <img
    src={mavLogo}
    alt="M.A. Veerappan Auto logo"
    className={className}
    loading="lazy"
    decoding="async"
  />
);

export default Logo;
