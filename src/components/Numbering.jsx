import React from "react";

export default function Numbering() {
  return (
    <div className="flex  flex-col justify-center items-center  font-serif min-h-96">
      <h1 className="text-5xl text-center">Advancing Knowledge by the numbers</h1>
      <div className="flex md:flex-row flex-col m-8 gap-4">
        <div className="flex flex-col rounded-full p-8 bg-slate-500 ">
          <h1 className="text-6xl rounded-full">150+</h1>
          <h2>Million Students</h2>
        </div>
        <div className="flex flex-col rounded-full p-8 bg-slate-500">
          <h1 className="text-6xl rounded-full">150+</h1>
          <h2>Million Educators</h2>
        </div>
        <div className="flex flex-col rounded-full p-8 bg-slate-500">
          <h1 className="text-6xl rounded-full">150+</h1>
          <h2>SaaS capabilities</h2>
        </div>
      </div>
    </div>
  );
}
