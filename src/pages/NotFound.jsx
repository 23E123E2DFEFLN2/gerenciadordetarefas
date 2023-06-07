import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <img
          src="/images/not-found.jpg"
          alt="not found"
          className="w-[500px]"
        />
        <h1 className="font-bold text-3xl">
Hmmm, essa página não existe.</h1>
        <p className="text-xl font-medium">
        
Volte a organizar o trabalho e a vida.
        </p>
        <Link
          className="px-6 py-2 my-3 text-lg bg-primary hover:bg-red-500 text-white font-medium rounded-lg"
          to="/"
        >
          Inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
