import { useState } from 'react';
import SideNav from './components/SideNav';
import TopNav from './components/TopNav';
import MainArea from './components/MainArea';

function App() {
  return (
    <div
      className="grid grid-rows-[80px_1fr_1fr_220px] 
     grid-flow-col h-screen w-screen bg-gray-700"
    >
      <aside className="row-span-3 bg-gray-900 ">
        <SideNav />
      </aside>
      <div className="col-span-4 bg-gray-800">Bottom Bar</div>
      <div className="row-span-1 col-span-3 bg-gray-700">
        <TopNav />
      </div>
      <main className="col-span-3 row-span-1">
        <MainArea />
      </main>
    </div>
  );
}

export default App;
