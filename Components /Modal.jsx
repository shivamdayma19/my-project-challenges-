import { useState } from "react";

const Modal = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border p-3">
      <button className="border p-2 bg-blue-300 text-black m-6" onClick={() => setOpen(true)}>Open</button>

      {open && (
        <div className="border inline-block" onClick={() => setOpen(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <p>This is a Modal content</p>
            <button onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;