import React, { useState } from "react";
import cm from "../assets/mai.png";
import { FaCirclePlus } from "react-icons/fa6";
import CreateProject from "../components/CreateProject";
export default function Mainpage() {
  const [projects, setProjects] = useState([]);
  const [showCreateProject, setShowCreateProject] = useState(false);

  return (
    <div>
      {projects && projects.length == 0 ? (
        <div
          className={`flex flex-col gap-6 items-center justify-center relative ${
            showCreateProject ? "opacity-50" : ""
          }`}
        >
          <h3 className="text-purple font-bold text-4xl">
            Create a new project
          </h3>
          {showCreateProject && (
            <div
              className={`absolute z-10 bg-white py-2 px-6 rounded-md w-[50%] border-2 ${
                showCreateProject ? "opacity-100" : ""
              }`}
            >
              <CreateProject />
            </div>
          )}
          <img className="h-[300px] w-[400px]" src={cm} alt="" />
          <p className="w-[70%] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in
          </p>
          <button
            className="flex items-center justify-center gap-2 bg-black text-xl py-2 rounded-md text-white px-2"
            onClick={() => {
              setShowCreateProject(true);
            }}
          >
            <span>
              <FaCirclePlus />
            </span>
            <p>Create New Project</p>
          </button>
        </div>
      ) : (
        <div>There are {projects.length} projects</div>
      )}
    </div>
  );
}
