import React from "react";
import { ChevronsLeft } from "lucide-react";

const BackButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed top-1/2 left-0 transform -translate-y-1/2 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 focus:outline-none focus:ring focus:ring-white"
      style={{
        borderTopLeftRadius: "50%",
        borderBottomLeftRadius: "50%",
        width: "8vh",
        height: "16vh",
        left: "0px",
      }}
    >
      <ChevronsLeft className="w-10 h-10 transform -translate-x-2" />
    </button>
  );
};

export default BackButton;
