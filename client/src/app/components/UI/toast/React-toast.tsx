import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppSelector } from "../../../hooks";
const React_Toast = () => {
  const toastList = useAppSelector((state) => state.UISlice.toast);

  //   useEffect(() => {
  const notify = () => {
    const { type, content } = toastList;
    if (type) {
      toast[type](
        `${content}`
        // {
        //   position: "top-left",
        //   autoClose: 3000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "colored",
        // }
      );
    }
  };
  useEffect(() => {
    notify();
    console.log("render");
  }, []);
  //   notify();
  // console.log(toastList);
  //   }, [toastList]);

  return (
    <div>
      {/* <button onClick={notify}>Notify!</button> */}
      <ToastContainer
        position="top-left"
        autoClose={3000}
        limit={4}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default React_Toast;
