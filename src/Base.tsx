import React, { useState } from 'react';
import NavBar from './NavBar';
import * as ContextMenu from '@radix-ui/react-context-menu';
import { CheckIcon } from '@radix-ui/react-icons';
import devtoolsDetect from 'devtools-detect';
const Base = ({ children }: { children: React.ReactChild }) => {
  const [devOpen, setDevOpen] = useState(devtoolsDetect.isOpen);
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <div className="h-screen bg-black w-full flex items-center flex-col grow">
          <NavBar />
          {children}
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Content className="  bg-white/10 outline-lime-500 outline-8 text-white text-sm rounded-md">
          <ContextMenu.Item className="flex flex-col items-start   min-w-36 gap-1 w-full outline-none ">
            <button className="hover:bg-white/10 grow p-2 pl-4 text-start w-full " onClick={window.Main.reload}>
              Refresh
            </button>

            <ContextMenu.CheckboxItem
              checked={devOpen}
              onClick={() => window.ipcRenderer.invoke('devTools')}
              className="inline-flex hover:bg-white/10 p-2  pl-4 w-full items-center flex-row-reverse"
              onCheckedChange={setDevOpen}
            >
              <ContextMenu.ItemIndicator>
                <CheckIcon />
              </ContextMenu.ItemIndicator>
              <button className=" grow  text-start w-full ">OpenDevTools</button>
            </ContextMenu.CheckboxItem>
            <button className="hover:bg-white/10 grow p-2 pl-4 text-start w-full " onClick={window.Main.Close}>
              Exit
            </button>
          </ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
};

export default Base;
