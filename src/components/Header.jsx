import { CiDark, CiLight } from "react-icons/ci";

export default function Header({ dark, toggleDarkMode }) {
  return (
    <div className=" shadow flex justify-between items-center w-full  p-2 mb-3 ">
      <h1 className=" text-[1.5rem] font-bold text-black dark:text-white">
        Expense tracker
      </h1>
      <span className=" w-[10%] ">
        <button className=" " onClick={toggleDarkMode}>
          {!dark ? (
            <CiDark className=" text-white text-[1.5rem]" />
          ) : (
            <CiLight className="text-black text-[1.5rem] " />
          )}
        </button>
      </span>
    </div>
  );
}
