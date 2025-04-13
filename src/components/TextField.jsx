export default function TextField({ type, name, value, setExpense }) {
  return (
    <div className=" w-full ">
      <input
        className=" border border-lightgrey dark:border-softgray rounded-md w-[100%] px-2.5 py-1 "
        onChange={(e) => setExpense(name, e.target.value)}
        type={type}
        placeholder={name}
        value={value}
      />
    </div>
  );
}
