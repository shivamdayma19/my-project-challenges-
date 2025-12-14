import { useState } from "react";

const Acordian = () => {
  const [open, setOpen] = useState(null);

  const data = [
    { title: "Item 1", content: "This is the content for item 1." },
    { title: "Item 2", content: "This is the content for item 2." },
    { title: "Item 3", content: "This is the content for item 3." },
  ];

  return (
    <div className="max-w-md mx-auto mt-5 space-y-3">
      {data.map((item, i) => (
        <div key={i} className="border rounded">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left p-3 bg-gray-100 font-medium"
          >
            {item.title}
          </button>

          {open === i && (
            <p className="p-3 border-t bg-white text-gray-700">
              {item.content}
            </p>
          )} 
        </div>
      ))}
    </div>
  );
};

export default Acordian;