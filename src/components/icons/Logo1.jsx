const Logo1 = ({ className = "" }) => {
  return (
 <div className={`flex items-center ${className}`}>
  {/* SVG icon */}
  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 100 100">
    <path d="M29 25c0-10 9-17 21-17 9 0 18 4 22 12l-11 6c-2-4-6-6-11-6-5 0-9 3-9 7 0 4 3 6 11 9 14 5 22 12 22 24 0 12-10 20-24 20-11 0-21-5-25-14l12-6c2 5 7 8 13 8 6 0 10-3 10-8 0-4-3-7-10-10-15-6-21-12-21-25z"
      fill="#ffffff"/>
    <path d="M3 40l32-5 62-15-56 30-38 20 20-24z"
      fill="#ca8a04"/>
  </svg>

  {/* Text */}
  <div className="flex leading-none gap-1">
    <span className="text-xl font-bold text-primary !font-[Poppins] ml-[-8px]">ervice</span>
    <span className="text-xl font-bold text-white !font-[Poppins]">Connekt</span>
  </div>
</div>
);
};

export default Logo1;