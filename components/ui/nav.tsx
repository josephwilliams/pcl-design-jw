// import ThemeToggle from "../theme-switch";
// import { useThemeContext } from "@/contexts/ThemeContext";

export default function NavBar() {
  //   const { isDarkTheme } = useThemeContext();

  return (
    <div className="sticky top-0 z-30 flex h-[44px] w-full justify-center bg-[#fcebc8]">
      <div className="flex items-center justify-between w-full px-6 max-w-[850px] mx-auto">
        <div className="text-black text-2xl title-font w-[200px] h-[40px] relative overflow-hidden flex items-center gap-1">
          Title
        </div>

        {/* <div className="flex items-center gap-2">
          <ThemeToggle />
        </div> */}
      </div>
    </div>
  );
}
