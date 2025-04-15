export default function Filter({
  categories,
  filteredCategory,
  setFilteredCategory,
}) {
  const handleFilterChange = (e) => {
    setFilteredCategory(e.target.value);

    console.log(filteredCategory);

    // // Filter expenses to only show the selected category
    // const filtered = expenses.filter((expense) => {
    //   return expense.Category === selectedCategory;
    // });
    // console.log(filtered);

    // setFilteredExpenses(filtered);
    // // If "All" is selected, show all expenses
    // if (selectedCategory === "All") {
    //   setExpenses(expenses);
    // } else {
    //   setExpenses([filteredExpenses]);
    // }
  };

  const options = categories.map((category) => (
    <option
      className="dark:bg-slategray dark:text-white text-black"
      key={category}
      value={category}
    >
      {category}
    </option>
  ));

  return (
    <div className=" flex items-center gap-5">
      <h2>Filter:</h2>
      <select
        className="  outline-none border rounded-md border-lightgrey dark:border-softgray 
        dark:hover:bg-slate-400 dark:bg-slategray px-2.5 py-1"
        onChange={handleFilterChange}
        defaultValue="Filter"
      >
        <option
          className="dark:bg-slategray dark:text-white text-black"
          value="All"
        >
          All Categories
        </option>
        {options}
      </select>
      <button
        className=" border rounded-md border-lightgrey dark:border-softgray 
        dark:hover:bg-slate-400 dark:bg-slategray px-0.5 py-1"
      >
        <input
          type="date"
          placeholder="Date"
          onChange={(e) => setFilteredCategory(e.target.value)}
        />
      </button>
    </div>
  );
}
