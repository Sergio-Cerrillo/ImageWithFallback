import './App.css';
import * as React from "react";
import {ImageWithFallback}  from './components/ImageWithFallback/ImageWithFallback.tsx';

export default function App() {
  return (
    <div className="bg-lime-100 justify-items-center h-[300px]">
      <div className="w-full h-[300px] relative overflow-hidden grid items-center">
        <ImageWithFallback className="w-full h-full object-cover blur "
        src="https://acortar.link/0oxomv"
        alt="fondoBanner"
        />
        <div className="flex absolute items-center justify-self-center shadow-lg shadow-slate-400 rounded-xl p-2">
          <ImageWithFallback className="w-11 h-11 mr-3"
          src="https://acortar.link/bhaxFz"
          />
          <h1 className="text-neutral-200 text-3xl md:text-6xl xl:text-9xl ">ImageWithFallback</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 border rounded md:grid-cols-3 xl:grid-cols-4 w-full h-full">
      <ImageWithFallback className="justify-self-center m-4"
        src="https://acortar.link/vXRlKU"
      />
        <ImageWithFallback className="justify-self-center m-4"
        src="https://try-try"
        srcFallback="https://acortar.link/Gldrfr"
      />
        <ImageWithFallback className="justify-self-center m-4"
        src="https://try-try"
        
      />
        <ImageWithFallback className="justify-self-center m-4"
        src="https://acortar.link/vXRlKU"
      />
      </div>

      <div className="grid items-center fixed bottom-0 p-4 justify-items-center w-full bg-black bg-opacity-40">

          <ImageWithFallback className="w-10 h-10"
          src="https://png.pngtree.com/png-vector/20230906/ourmid/pngtree-object-clock-with-square-shape-png-image_9996810.png"

          />
          <h4 className="text-white">Footer</h4>

        
      </div>
    </div>
  );
}
