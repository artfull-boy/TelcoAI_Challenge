import React from 'react';

interface IconCardProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

function IconCard({ Icon }: IconCardProps) {
  return (
    <div className="size-[36px] p-[10px] rounded-[8px] bg-[#F8FAFC] cursor-pointer">
      <Icon width={16} height={16} color={"#333333"} strokeWidth={2} />
    </div>
  );
}

export default IconCard;
