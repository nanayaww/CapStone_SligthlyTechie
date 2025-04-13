import { useState } from "react";
import SelectField from "./SelectField";
import TextField from "./TextField";

export default function Form({ categories, expenses, setExpenses }) {
  const [expense, setExpense] = useState({
    Description: "",
    Category: "",
    Amount: "",
    Comment: "",
  });

  function handleExpenseFields(fieldname, newvalue) {
    setExpense({
      ...expense,
      [fieldname]: newvalue,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // create new expense
    const newExpense = {
      ...expense,
      Date: new Date().toDateString(),
      id: Date.now(),
    };

    setExpenses([...expenses, newExpense]);
    console.log(expenses);
    console.log(expense.Category);
  }

  return (
    <div className="w-[30vw] h-[50%] dark:bg-slategray p-6 flex rounded-md">
      <form
        className="w-full h-full flex flex-col gap-2.5 mt-2.5"
        onSubmit={handleSubmit}
      >
        <h2>Add Expenses</h2>
        <div className=" flex flex-col gap-5 border p-1.5 rounded ">
          <TextField
            type="number"
            name="Amount"
            value={expense.Amount}
            setExpense={handleExpenseFields}
          />
          <TextField
            type="text"
            name="Description"
            value={expense.Description}
            setExpense={handleExpenseFields}
          />
          <SelectField
            name="Category"
            categories={categories}
            value={expense.Category}
            setExpense={handleExpenseFields}
          />
          <TextField
            type="text"
            name="Comment"
            value={expense.Comment}
            setExpense={handleExpenseFields}
          />
          <button className=" border rounded-md w-[100%]">Add Expense</button>
        </div>
      </form>
    </div>
  );
}
