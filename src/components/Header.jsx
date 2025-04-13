import { CiDark, CiLight } from "react-icons/ci";

export default function Header({ dark, toggleDarkMode }) {
  return (
    <div className="flex justify-between items-center w-full h-[8%] p-2 ">
      <h1 className=" font-bold text-black dark:text-white">Expense tracker</h1>
      <span className=" w-8 ">
        <button className=" " onClick={toggleDarkMode}>
          {dark ? <CiDark /> : <CiLight className="text-white" />}
        </button>
      </span>
    </div>
  );
}
