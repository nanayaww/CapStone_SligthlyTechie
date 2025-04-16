import { MdDeleteOutline } from "react-icons/md";
import TableData from "./TableData";
import TableHead from "./TableHead";

export default function Table({ filteredCategory, expenses, setExpenses }) {
  function handleDelete(index) {
    const newExpenses = [...expenses]; // Create a copy of the array
    newExpenses.splice(index, 1); // Remove the item at index
    setExpenses(newExpenses); // Set the updated array
  }

  function handleFilter(expense) {
    if (filteredCategory === "" || filteredCategory === "All") {
      return expense;
    } else if (filteredCategory === expense.Date) {
      return expense;
    }
    return expense.Category === filteredCategory;
  }

  const tableData = expenses
    .filter((expense) => handleFilter(expense))
    .map((expense, index) => (
      <tr className="border-b-1 border-softgray " key={index}>
        <TableData value={expense.Description} />
        <TableData value={expense.Category} />
        <TableData value={expense.Date} />
        <TableData value={expense.Amount} />
        <TableData value={expense.Comment} />
        <TableData
          value={
            <MdDeleteOutline
              className="cursor-pointer"
              onClick={() => handleDelete(index)}
            />
          }
        />
      </tr>
    ));

  const noExpense = (
    <tr>
      <td>No expenses</td>
    </tr>
  );

  return (
    <table className=" w-full text-left border-collapse ">
      <thead>
        <tr className="border-b-1 border-softgray">
          <TableHead value="Description" />
          <TableHead value="Category" />
          <TableHead value="Date" />
          <TableHead value="Amount" />
          <TableHead value="Comment" />
        </tr>
      </thead>
      <tbody>{expenses.length > 0 ? tableData : noExpense}</tbody>
    </table>
  );
}
