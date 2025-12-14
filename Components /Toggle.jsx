import { useState } from "react";

export default function Modal() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false); // modal dark/light

  return (
    <div className=" p-5 rounded m-3 inline-block">
      <button onClick={() => setOpen(true)}>Open</button>

      {open && (
        <div onClick={() => setOpen(false)}>
          <div onClick={(e) => e.stopPropagation()}
               style={{
                 background: dark ? "#1e1e1e" : "white",
                 color: dark ? "white" : "black",
                 padding: "20px"
               }}
          >
            <p>This is a toggle for light and dark button    </p>

            <button className="border rounded p-2 mt-5" onClick={() => setDark(!dark)}>
              {dark ? "Light Mode" : "Dark Mode"}
            </button>

            <br/><br/>

            <button onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}