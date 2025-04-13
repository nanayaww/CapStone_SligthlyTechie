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
        className="border rounded-md ml-5 darkbg-slategray px-2.5 py-1"
        onChange={handleFilterChange}
        defaultValue="Filter"
      >
        <option disabled value="Filter">
          Filter by Category
        </option>
        <option value="All">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
