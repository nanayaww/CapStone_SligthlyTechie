export default function Balance({ name, amount }) {
  return (
    <div className=" w-[100%] border-lightgrey shadow dark:bg-slategray dark:border-softgray border rounded-md flex flex-col flex-wrap justify-center px-2.5 py-2.5 ">
      <h2 className=" dark:text-softgray font-medium text-sm">Total {name}</h2>
      <span className=" font-bold text-[1.85rem] dark:text-white">
        ${amount}
      </span>
    </div>
  );
}
