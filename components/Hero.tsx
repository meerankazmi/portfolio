import React from "react";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiPostgresql, SiMongodb, SiGraphql } from "react-icons/si";
import { Link } from "react-scroll";

export default function Hero() {
  const skills = [
    { id: 1, title: "React", icon: <FaReact /> },
    { id: 2, title: "Node/Express", icon: <FaNodeJs /> },
    { id: 3, title: "PostgreSQL", icon: <SiPostgresql /> },
    { id: 4, title: "MongoDB", icon: <SiMongodb /> },
    { id: 5, title: "GraphQL", icon: <SiGraphql /> },
  ];

  return (
    <div className="h-screen grid grid-cols-2 items-center gap-20">
      <div>
        <h1 className="font-semibold text-4xl text-primary-light mb-4">
          Hello, I am Kazmi 👋
        </h1>
        <p className="text-lg">
          Welcome to my portfolio site. I am a self taught web developer and
          UI/UX Designer. These are the technologies I know:
        </p>
        <div className="grid grid-cols-2 gap-4 my-10">
          {skills.map((el) => {
            return (
              <div className="flex flex-row" key={el.id}>
                <div className="text-3xl text-primary-light mr-3">
                  {el.icon}
                </div>
                <div className="text-xl">{el.title}</div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-row justify-between items-center">
          <Link to="projects" smooth duration={1000}>
            <button className="font-semibold text-xl px-4 py-2 text-white bg-primary transition-all ease-in-out duration-300 focus:outline-none rounded hover:bg-primary-dark">
              Browse Projects
            </button>
          </Link>
          <a
            href="https://github.com/meerankazmi"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="text-4xl text-primary hover:text-primary-dark transition-all ease-in-out duration-300" />
          </a>
        </div>
      </div>
      <div>
        <img src="/img/1.jpg" alt="main img" className="main-img w-full" />
      </div>
    </div>
  );
}
