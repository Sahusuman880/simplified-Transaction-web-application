import React from "react";

function Items({ item }) {
  return (
    <div className="w-[100%]">
      <div className="max-w-[900px]  mx-auto text-black ">
        <div className="grid grid-cols-[70%_auto] md:gap-10 gap-1 border-[2px] border-[black] my-[10px]  text-[10px] md:text-[16px]  font-bold">
          <div className="px-[5px] md:px-[30px] border-r-[2px] border-r-[black] ">
            {item.walletAddress}
          </div>
          <div className="px-[10px] ">{item.amount}</div>
        </div>
      </div>
    </div>
  );
}

export default Items;
