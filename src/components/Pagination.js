import React, { useState } from "react";
import Data from "../Data.json";

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Data.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(Data.length / recordsPerPage);
  const numbers = [...Array(nPage).keys()];

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage < nPage ? prevPage + 1 : prevPage));
  };

  return (
    <div>
      <div className="container flex justify-center">
        <table>
          <thead>
            <tr>
              <th className="px-4 py-2">Id</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {records.map((d, i) => (
              <tr key={i}>
                <td className="border px-4 py-2">{d.id}</td>
                <td className="border px-4 py-2">{d.first_name}</td>
                <td className="border px-4 py-2">{d.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <nav className="container flex justify-center mt-4">
        <ul className="flex">
          <li>
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-200 rounded-md mr-2"
            >
              Prev
            </button>
          </li>
          {numbers.map((number) => (
            <li key={number}>
              <button
                onClick={() => handleClick(number)}
                className={`px-3 py-1 rounded-md mr-2 ${
                  currentPage === number + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {number + 1}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={nextPage}
              disabled={currentPage === nPage}
              className="px-3 py-1 bg-gray-200 rounded-md ml-2"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
