export default function SelectField({ categories, name, value, setExpense }) {
  return (
    <div>
      <select
        className=" border rounded-md w-[100%] px-2.5 py-1 "
        name={name}
        value={value}
        onChange={(e) => setExpense(name, e.target.value)}
      >
        <option className=" text-black" value="">
          Select {name}
        </option>

        {categories.map((category) => (
          <option className=" text-black" key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
