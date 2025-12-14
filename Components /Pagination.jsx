import { useState } from "react";

const Pagination = ({ itemsPerPage = 5, data = [] }) => {
  const [page, setPage] = useState(1);

  let totalPages = Math.ceil(data.length / itemsPerPage);
  if (totalPages < 3) totalPages = 3;
  const start = (page - 1) * itemsPerPage;
  const currentItems = data.slice(start, start + itemsPerPage);

  return (
    <div className="w-full flex flex-col items-center gap-4">

      {/* Show Items */}
      <h2 className="text-xl font-bold mb-2">
        Current Page: {page} / {totalPages}
      </h2>
      <div className="w-full max-w-md p-4 border rounded">
        {currentItems.map((item, i) => (
          <p key={i} className="p-2 border-b last:border-none">
            {item}
          </p>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex gap-2">
        <button
          onClick={() => page > 1 && setPage(page - 1)}
          className="px-3 py-1 bg-gray-300 dark:bg-gray-300 rounded"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 rounded ${
              page === i + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-300 dark:text-white"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => page < totalPages && setPage(page + 1)}
          className="px-3 py-1 bg-gray-300 dark:bg-gray-300 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;