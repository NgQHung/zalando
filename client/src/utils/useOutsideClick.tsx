import React from "react";
export const UseOutsideClick = () => {
  let refInput = React.useRef<any>(null);
  const [searchMobileClick, setSearchMobileClick] = React.useState(false);
  React.useEffect(() => {
    // const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //   callback();
    // };

    document.addEventListener("mousedown", (e: any) => {
      if (!refInput?.current?.contains(e.target)) {
        setSearchMobileClick(false);
      }
    });
  }, []);

  return {
    searchMobileClick,
    refInput,
  };
};
