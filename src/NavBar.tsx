import { Cross2Icon } from '@radix-ui/react-icons';
import React, { useEffect, useState } from 'react';
import * as Menubar from '@radix-ui/react-menubar';
function AppBar() {
  const [isMaximize, setMaximize] = useState(false);
  const [name, ename] = useState('');

  useEffect(() => {
    async function loadData() {
      await window.ipcRenderer.invoke('appname').then((res) => ename(res));
    }
    loadData();
  }, []);

  const handleToggle = () => {
    if (isMaximize) {
      setMaximize(false);
    } else {
      setMaximize(true);
    }
    window.Main.Maximize();
  };

  return (
    <div className="flex flex-col  w-full">
      <div className="w-full inline-flex justify-between draggable  items-center  text-sm bg-black text-white  sticky top-0">
        <h1 tabIndex={-1} className="text-xl px-4 py-2 no-draggable">
          {name}
        </h1>
        <div className="inline-flex no-draggable  gap-2 py-2 px-4 ">
          <button
            tabIndex={-1}
            onClick={window.Main.Close}
            className={`text-white bg-red-700 rounded-full focus:outline-amber-600 hover:scale-125 p-1 hover:text-3xl ease-in-out transition-all duration-500 aspect-square inline-flex items-center justify-center`}
          >
            <Cross2Icon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppBar;
