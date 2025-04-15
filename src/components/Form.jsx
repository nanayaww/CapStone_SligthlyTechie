import { useState } from "react";
import SelectField from "./SelectField";
import TextField from "./TextField";

export default function Form({
  displayForm,
  setDisplayForm,
  categories,
  expenses,
  setExpenses,
}) {
  const [expense, setExpense] = useState({
    Description: "",
    Category: "",
    Date: "",
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

    // Form validation
    if (!expense.Description || !expense.Category || !expense.Amount) {
      alert("Please fill in all required fields");
      return;
    }

    // Create new expense
    const newExpense = {
      ...expense,
      id: new Date(expense.Date).toDateString(),
    };

    // Add to expenses array
    setExpenses([...expenses, newExpense]);
    console.log(expenses);

    // Clear form
    setExpense({
      Description: "",
      Category: "",
      Date: "",
      Amount: "",
      Comment: "",
    });

    // Close form
    setDisplayForm(false);
  }

  // Close form without saving
  function handleCancel() {
    setDisplayForm(false);
  }

  return (
    <div
      className={`${
        displayForm ? "block" : "hidden"
      } absolute w-full md:w-[20rem] h-auto dark:bg-slate-700 bg-white p-4 flex flex-col rounded-md shadow-lg`}
    >
      <form
        className="w-full border border-gray-200 dark:border-slate-600 rounded p-4"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg dark:text-gray-200">Add Expense</h2>
          <button
            type="button"
            onClick={handleCancel}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <TextField
            type="text"
            name="Description"
            value={expense.Description}
            setExpense={handleExpenseFields}
            required
          />
          <SelectField
            name="Category"
            categories={categories}
            value={expense.Category}
            setExpense={handleExpenseFields}
            required
          />
          <TextField
            type="date"
            name="Date"
            value={expense.Date}
            setExpense={handleExpenseFields}
            required
          />
          <TextField
            type="number"
            name="Amount"
            value={expense.Amount}
            setExpense={handleExpenseFields}
            required
          />

          <TextField
            type="text"
            name="Comment"
            value={expense.Comment}
            setExpense={handleExpenseFields}
          />

          <div className="flex gap-2 mt-2">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md flex-1 transition-colors"
            >
              Add Expense
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="border border-gray-300 dark:border-slate-600 hover:bg-gray-100 dark:hover:bg-slate-600 py-2 px-4 rounded-md dark:text-gray-200"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
