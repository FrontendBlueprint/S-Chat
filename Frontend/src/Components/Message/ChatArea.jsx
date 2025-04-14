import React from "react";
import Messages from "./Messages";

function ChatArea({ user }) {
  return (
    <div className="chat-area w-full h-[90%] bg-secondary relative overflow-y-scroll">
      {/* Header */}
      <div className="chat-header fixed  top-0 w-full h-16 border-b border-white z-20 bg-primary flex items-center gap-5 px-6">
        <div className="profile-picture w-12 h-12 bg-gray-600 transition-transform duration-300 ease-in-out rounded-full overflow-hidden">
          <img
            src={user?.profilePicture || "/default-profile.png"}
            alt={`${user?.name || "User"}'s profile`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="user-info flex flex-col text-white">
          <span className="username text-2xl leading-8">
            {user?.name || "Unknown User"}
          </span>
        </div>
      </div>

      {/* Messages */}
      <Messages />
    </div>
  );
}

export default ChatArea;
