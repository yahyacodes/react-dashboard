import React, { useEffect, useRef } from "react";
import GitHubCalendar from "react-github-calendar";

const Heatmap = () => {
  return (
    <div className="bg-white rounded-md border p-4">
      <h4 className="text-sm font-medium border-b p-2">Most Active Time</h4>
      <div className="flex gap-4 p-2">
        <p className="bg-blue-100 rounded-md border text-blue-900 text-xs py-1 px-3">
          Instagram
        </p>
        <p className=" rounded-md border text-gray-500 text-xs py-1 px-3">
          YouTube
        </p>
        <p className=" rounded-md border text-gray-500 text-xs py-1 px-3">
          Twitterr
        </p>
      </div>
      <GitHubCalendar
        style={{ margin: "50px auto", color: "white" }}
        username="yahyacodes"
      />
    </div>
  );
};

export default Heatmap;
