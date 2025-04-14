import React from "react";

function Conversation() {
  return (
    <div className="w-full h-15 border border-gray-600 rounded-xl px-2 hover:bg-gray-600 transition-colors duration-300 ease-in-out flex items-center gap-5
     mt-4">
      <div className="w-12 h-12 bg-gray-600 transition-transform duration-300 ease-in-out rounded-full overflow-hidden">
        <img src="" alt="" />
      </div>
      <div className="flex flex-col text-white">
        <span className="text-2xl leading-8">
          suraj
        </span>
        <p className="text-[10px] text-gray-400 mb-1 overflow-hidden w-[280px] h-3">
          hello surajdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaa aaaaaaaaa aaaaaaaaaaaaaaaaaaaa
        </p> 
      </div>
    </div>
  );
}

export default Conversation;
