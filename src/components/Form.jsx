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
    <div className="w-[30vw] h-[50%] dark:bg-slategray p-4 flex flex-col rounded-md">
      <form
        className="w-full border border-lightgrey dark:border-softgray  rounded p-2.5"
        onSubmit={handleSubmit}
      >
        <h2 className=" font-bold dark:text-softgray mb-4 ">Add Expenses</h2>

        <div className=" flex flex-col gap-2">
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
          <button
            className=" border rounded-md w-[100%] dark:border-softgray dark:text-white dark:bg-charcoal
          dark:hover:bg-slate-400 dark:hover:text-black"
          >
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
}
