import React from "react";

function Message() {
  return (
    <div
      className="message-container h-10 px-2 transition-colors duration-300 ease-in-out flex items-center gap-5 mt-4"
    >
      <div className="message-avatar w-9 h-9 bg-gray-600 transition-transform duration-300 ease-in-out rounded-full overflow-hidden">
        <img src="" alt="" />
      </div>
      <div className="message-content flex flex-col text-white bg-gray-600 rounded-sm px-2">
        <span className="message-text text-sm leading-8">suraj</span>
      </div>
    </div>
  );
}

export default Message;