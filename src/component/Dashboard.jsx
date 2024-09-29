// import React from 'react';
import SearchBar from './SearchBar';
import UserProfile from './UserProfile';
import SidePanel from './SidePanel';
// import StatCards from './StatCards';
// import TransactionCharts from './TransactionCharts';

function Dashboard() {
  return (
    <div className="flex overflow-hidden flex-col border border-black border-solid bg-neutral-800">
      <header className="px-16 py-12 w-full bg-neutral-800 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
            <SearchBar />
          </div>
          <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
            <UserProfile />
          </div>
        </div>
      </header>
      <main className="z-10 mt-0 max-md:mr-1.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <aside className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
            <SidePanel />
          </aside>
          <section className="flex flex-col ml-5 w-[74%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-56 w-full max-md:mt-10 max-md:max-w-full">
              {/* <StatCards /> */}
              {/* <TransactionCharts /> */}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;