// import React from 'react';

const searchItems = [
  { id: 1, text: '1A1zP1eP...' },
  { id: 2, text: '0x742d35...' },
  { id: 3, text: '44AFFq5kSiGBoZ...' },
];

function SearchHistory() {
  return (
    <div className="flex flex-col w-full text-[color:var(--sds-color-text-neutral-on-neutral)]">
      <h3 className="self-start leading-snug">Search history</h3>
      <div className="flex flex-wrap gap-1 items-start mt-3 w-full leading-none whitespace-nowrap rounded min-h-[103px]">
        {searchItems.map((item) => (
          <div key={item.id} className="flex gap-2 justify-center items-center p-2 rounded-lg bg-zinc-600">
            <div className="self-stretch my-auto">{item.text}</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a12d35a344a22193abbd6967323e06681ded55706ceaed5c38ea31dce6653538?placeholderIfAbsent=true&apiKey=9825bd02a58246fc9d930bec7baef96a" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchHistory;