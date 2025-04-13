export default function Filter({ categories, expenses, setFilteredExpenses }) {
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
  };

  return (
    <div>
      <select
        className="outline-none border rounded-md ml-5 border-lightgrey dark:border-softgray 
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
        {categories.map((category) => (
          <option
            className="dark:bg-slategray dark:text-white text-black"
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
