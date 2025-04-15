export default function Filter({
  categories,
  expenses,
  setExpenses,
  filteredExpenses,
  setFilteredExpenses,
}) {
  const handleFilterChange = (e) => {
    const selectedCategory = e.target.value;

    // If "All" is selected, show all expenses
    if (selectedCategory === "All") {
      setFilteredExpenses([]);
      return;
    }

    // Filter expenses to only show the selected category
    const filtered = expenses.filter((expense) => {
      return expense.Category === selectedCategory;
    });

    setFilteredExpenses(filtered);
    setExpenses(filteredExpenses);
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
          value="All Categories"
        >
          All Categories
        </option>
        {options}
      </select>
      <button
        className=" border rounded-md border-lightgrey dark:border-softgray 
        dark:hover:bg-slate-400 dark:bg-slategray px-0.5 py-1"
      >
        <input type="date" placeholder="Date" />
      </button>
    </div>
  );
}
