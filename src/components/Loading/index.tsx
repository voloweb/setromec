import React from 'react';

type LoadingType = {
  secondary?: boolean;
};

const Loading = ({ secondary = false }: LoadingType) => {
  return (
    <div
      className={`
        inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-e-transparent
        align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] mt-[-2px]
        ${secondary ? 'text-setromec-blue-1' : 'text-white'}
      `}
      role="status"
    >
      <span
        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap
      !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >
        Loading...
      </span>
    </div>
  );
};

export default Loading;
