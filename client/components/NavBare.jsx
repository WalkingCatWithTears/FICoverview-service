import React from "react";

const NavBare = () => {
  return (
    <div>
      <header className="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4 ">
        <div className="flex items-center justify-between mb-4 md:mb-0 pl-4">
          <h1 className="leading-none text-2xl text-grey-darkest">
            <a className="no-underline text-grey-darkest hover:text-black px-4 font-serif text-base">
              WalkingCatsWithTears
            </a>
          </h1>

          <a className="text-black hover:text-orange md:hidden" href="#">
            <i className="fa fa-2x fa-bars"></i>
          </a>
        </div>

        <form className="mb-4 w-full md:mb-0 md:w-1/4 flex pl-4">
          <label className="hidden" for="search-form">
            Search
          </label>
          <input
            className="bg-grey-lightest border-b-2 focus:border-orange p-2 rounded-lg shadow-inner w-full"
            placeholder="Search"
            type="text"
          />
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mt-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </form>
      </header>
    </div>
  );
};

export default NavBare;
