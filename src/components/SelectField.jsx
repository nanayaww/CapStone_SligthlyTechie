export default function SelectField({ categories, name, value, setExpense }) {
  return (
    <div>
      <select
        className=" border border-lightgrey dark:border-softgray rounded-md w-[100%] dark:text-white px-2.5 py-1 "
        name={name}
        value={value}
        onChange={(e) => setExpense(name, e.target.value)}
      >
        <option
          className="dark:bg-slategray dark:text-white text-black "
          value=""
        >
          {name}
        </option>

        {categories.map((category) => (
          <option
            className=" dark:bg-slategray dark:text-white text-black"
            key={category}
            value={category}
          >
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
