import { ReactNode } from "react";
import "./Overlay.css";

interface OverlayProps {
  open: boolean;
  children?: ReactNode;
  blur?: boolean;
}

function Overlay({ open, children, blur }: any) {
  return (
    <div className={`overlay-wrapper ${blur ? "blur" : ""} ${!open ? "opacity-0" : "opacity-1"}`.trim()}>
      {children}
    </div>
  );
}

export default Overlay;
