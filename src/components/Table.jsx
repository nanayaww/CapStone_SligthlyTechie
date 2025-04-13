import { MdDeleteOutline } from "react-icons/md";
import TableData from "./TableData";
import TableHead from "./TableHead";

export default function Table({ expenses, setExpenses }) {
  function handleDelete(index) {
    const newExpenses = [...expenses]; // Create a copy of the array
    newExpenses.splice(index, 1); // Remove the item at index
    setExpenses(newExpenses); // Set the updated array
  }

  return (
    <table
      className=" w-full text-left border-collapse   
    "
    >
      <thead>
        <tr className="border-b-1 border-softgray">
          <TableHead value="Description" />
          <TableHead value="Category" />
          <TableHead value="Date" />
          <TableHead value="Amount" />
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <tr className="border-b-1 border-softgray " key={index}>
            <TableData value={expense.Description} />
            <TableData value={expense.Category} />
            <TableData value={expense.Date} />
            <TableData value={expense.Amount} />
            <TableData
              value={
                <MdDeleteOutline
                  className="cursor-pointer"
                  onClick={() => handleDelete(index)}
                />
              }
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
