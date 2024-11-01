import React from 'react';

interface LiActionProps {
  icon: string;
  color: string;
  onClick: () => void;
}
const LiAction = ({ icon, color, onClick }: LiActionProps) => {
  return (
    <span className={`cursor-pointer ${color}`} onClick={onClick}>
      <i className={icon}></i>
    </span>
  );
};

export default LiAction;
