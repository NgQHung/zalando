import React from "react";
export const useOutsideClick = (callback: () => void) => {
  const ref = React.useRef();

  React.useEffect(() => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      callback();
    };

    //   document.addEventListener('click', handleClick);

    //   return () => {
    //     document.removeEventListener('click', handleClick);
    //   };
  }, []);

  return ref;
};
