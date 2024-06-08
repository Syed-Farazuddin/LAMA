/*eslint-disable*/

import React, { useState } from "react";

export default function CreateProject() {
  const [projectName, setProjectName] = useState("");
  return (
    <div className="w-full h-[220px] relative flex flex-col">
      <h4 className="font-bold text-slate-900 text-xl mb-6">Create project</h4>
      <div className="flex flex-col gap-2">
        <p className="text-slate-600">Enter project Name:</p>
        <input
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          type="text"
          placeholder="Type here"
          className="w-full py-2 px-4 outline-none border-2 rounded-sm"
        />
        <p>{}</p>
      </div>
      <div className="flex absolute right-0 bottom-0 gap-8">
        <button className="text-red">Cancel</button>
        <button className="bg-purple text-white px-2 py-1">Create</button>
      </div>
    </div>
  );
}
