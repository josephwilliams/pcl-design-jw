import StickySquare from "@/components/floating-box";
import Sidebar from "@/components/sidebar";
import NavBar from "@/components/ui/nav";

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("../components/chart"), {
  ssr: false,
});
// import PlaceholderImage from "@/assets/placeholder.png";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";

// Title, Subtitle and GraphPlaceholder component
const TitleAndGraph = () => {
  return (
    <div className="flex-1 p-6">
      <h1 className="text-3xl font-bold">Dashboard Title</h1>
      <h2 className="text-xl text-gray-600 mb-6">Subtitle goes here</h2>

      <Chart />
    </div>
  );
};

// Main page component
const Dashboard = () => {
  return (
    <main className="mx-auto min-w-[100vw] min-h-[100vh]">
      <NavBar />

      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex">
          <div className="min-w-[1000px] max-w-[1000px]">
            <TitleAndGraph />
          </div>
          <StickySquare />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
