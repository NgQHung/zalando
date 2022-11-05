import React, { memo } from "react";

interface IProps {
  setRestore: (state: boolean) => void;
}

const WardrobeNotification = ({ setRestore }: IProps) => {
  return (
    <div className="text-[#ffff] flex justify-between max-w-[460px] bg-[#1a1a1a] fixed bottom-0 left-4 z-[1000]">
      <p className=" py-4 pr-4">Předmět odstraněn</p>
      <p onClick={() => setRestore(true)} className="py-4 pr-4">
        Vrátit
      </p>
    </div>
  );
};

export default memo(WardrobeNotification);
