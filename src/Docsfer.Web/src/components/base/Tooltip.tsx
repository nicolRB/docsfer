import React, { useRef, useState, useLayoutEffect, useCallback } from "react";
import { createPortal } from "react-dom";

type Position = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  position?: Position;
  offset?: number;
}

const Tooltip: React.FC<TooltipProps> = ({
  text,
  children,
  position = "bottom",
  offset = 8,
}) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const tipRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  const place = useCallback(() => {
    const trigger = triggerRef.current;
    const tip = tipRef.current;
    if (!trigger || !tip) return;

    const r = trigger.getBoundingClientRect();
    const tw = tip.offsetWidth;
    const th = tip.offsetHeight;

    let top = 0,
      left = 0;

    switch (position) {
      case "top":
        top = r.top - th - offset;
        left = r.left + r.width / 2 - tw / 2;
        break;
      case "bottom":
        top = r.bottom + offset;
        left = r.left + r.width / 2 - tw / 2;
        break;
      case "left":
        top = r.top + r.height / 2 - th / 2;
        left = r.left - tw - offset;
        break;
      case "right":
      default:
        top = r.top + r.height / 2 - th / 2;
        left = r.right + offset;
        break;
    }

    // keep inside viewport a bit
    const padding = 4;
    left = Math.max(padding, Math.min(left, window.innerWidth - tw - padding));
    top = Math.max(padding, Math.min(top, window.innerHeight - th - padding));

    setCoords({ top, left });
  }, [position, offset]);

  useLayoutEffect(() => {
    if (!open) return;
    place();
    const onScrollOrResize = () => place();
    window.addEventListener("scroll", onScrollOrResize, true);
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize, true);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [open, place]);

  return (
    <>
      <div
        ref={triggerRef}
        className="inline-flex"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        aria-describedby={open ? "tooltip" : undefined}
      >
        {children}
      </div>

      {open &&
        createPortal(
          <div
            ref={tipRef}
            id="tooltip"
            role="tooltip"
            style={{ position: "fixed", top: coords.top, left: coords.left }}
            className={`
            z-50 px-3 py-1.5 rounded-lg border text-sm whitespace-nowrap
            bg-white border-gray-300 text-gray-800 shadow
            dark:bg-zinc-950 dark:border-zinc-700 dark:text-zinc-200
            transition-all duration-300 ease-out
            ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"}
          `}
          >
            {text}
          </div>,
          document.body
        )}
    </>
  );
};

export default Tooltip;
