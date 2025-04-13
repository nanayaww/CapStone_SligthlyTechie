export default function Balance({ name, amount }) {
  return (
    <div className=" w-[100%] dark:bg-slategray border rounded-md flex flex-col justify-center px-2.5 py-2.5 ">
      <h2 className=" text-softgray font-medium text-sm">Total {name}</h2>
      <span className=" font-bold text-[1.85rem]">${amount}</span>
    </div>
  );
}
