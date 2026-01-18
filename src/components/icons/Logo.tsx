const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
       <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
  
      <path
        d="M28 8C28 8 24 6 18 6C12 6 8 10 8 14C8 18 12 20 18 21C24 22 28 24 28 28C28 32 24 36 18 36C12 36 8 34 8 34"
        stroke="#ca8a04"
        stroke-width="4"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="32" cy="8" r="4" fill="#ca8a04" />
      <circle cx="8" cy="34" r="4" fill="#ca8a04" />
       <line
          x1="28"
          y1="8"
          x2="32"
          y2="8"
          stroke="#ca8a04"
          stroke-width="3"
        />
    </svg>
      <div className="flex flex-col leading-none">
        <span className="text-xl font-bold text-primary !font-[Poppins]">Service</span>
        <span className="text-xl font-bold text-white !font-[Poppins]">Connekt</span>
      </div>
    </div>
  );
};

export default Logo;
