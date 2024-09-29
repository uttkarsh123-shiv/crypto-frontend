// import React from 'react';

function SearchBar() {
  return (
    <form className="flex flex-wrap gap-10 w-full font-[number:var(--sds-typography-body-font-weight-regular)] text-[length:var(--sds-typography-body-size-medium)] max-md:mt-10 max-md:max-w-full">
      <label htmlFor="searchInput" className="my-auto leading-snug text-white">Search</label>
      <div className="flex overflow-hidden flex-auto gap-2 items-center px-4 py-5 leading-none bg-white rounded-full border border-solid border-neutral-700 min-h-[52px] text-[color:var(--sds-color-text-default-tertiary)]">
        <input
          type="text"
          id="searchInput"
          className="flex-1 shrink self-stretch my-auto basis-0 bg-transparent border-none outline-none"
          placeholder="Wallet Address/ Transaction Hash..."
          aria-label="Search for wallet address or transaction hash"
        />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ceee35d297d4c0fe5453107e73e7fbb494e6164c747eb1afdb410a1be3052fd4?placeholderIfAbsent=true&apiKey=9825bd02a58246fc9d930bec7baef96a" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" alt="" />
      </div>
    </form>
  );
}

export default SearchBar;