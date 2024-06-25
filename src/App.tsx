import React, { useEffect, useState } from 'react';
import Base from './Base';
import { CardStackIcon, HeartIcon } from '@radix-ui/react-icons';

const App = () => {
  return (
    <Base>
      <div className="inline-flex p-2 w-full h-full">
        {/* SideBar */}
        <div className="w-auto self-center rounded-md p-2 h-full justify-center gap-1 bg-white/5 flex flex-col">
          <CardStackIcon className="aspect-square w-auto text-white/70 h-12 p-4 hover:bg-white/10 rounded-lg" />
          <HeartIcon className="aspect-square w-auto text-white/70 h-12 p-4 hover:bg-white/10 rounded-lg" />
         </div>
        {/* Main Content */}
        <main></main>
      </div>
    </Base>
  );
};

export default App;
