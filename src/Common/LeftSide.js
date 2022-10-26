import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSide = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://vehicle-artisan-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="w-auto flex flex-col justify-items-center mx-3">
      <ul className="menu bg-base-100 w-full rounded-box">
        <div className="alert alert-info shadow-lg">
          <div>
            <a href="#my-modal-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-current flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </a>
            <span className="text-center">
              Category List: {categories.length}
            </span>
          </div>
        </div>
        <div className="modal" id="my-modal-2">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Category: {categories.length}</h3>
            <p className="py-4">
              Total Available category is: {categories.length}
            </p>
            <div className="modal-action">
              <a href="#" className="btn">
                Okay
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:justify-items-stretch grid-cols-4 md:grid-cols-1 justify-center gap-1 w-full mt-2">
          {categories.map((category) => (
            <li key={category.categoryId}>
              <Link
                className="h-full w-auto	border-solid border-2 border-accent-focus rounded-lg"
                to={`/tutorials/${category.categoryId}`}
              >
                {category.categoryName}
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default LeftSide;
