import { useEffect, useState } from "react";
import Balance from "./components/Balance";
import Form from "./components/Form";
import Header from "./components/Header";
import Table from "./components/Table";
import Summary from "./components/Summary";
import SpendingInsights from "./components/SpendingInsights";
import Filter from "./components/Filter";
import { IoMdAddCircleOutline } from "react-icons/io";

export default function Expensetracker() {
  const [expenses, setExpenses] = useState([]);
  const [totalspent, setTotalSpent] = useState(0);
  const [totalBalance, setTotalBalance] = useState(1500.0);
  const [summaryValues, setSummaryValues] = useState({});
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  const [displayForm, setDisplayForm] = useState(false);

  const showAddExpenseForm = () => {
    setDisplayForm(!displayForm);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const initialBalance = 1500.0;

  const categories = [
    "Transport",
    "Groceries",
    "Utilities",
    "Entertainment",
    "Others",
  ];
  useEffect(() => {
    const stored = localStorage.getItem("expenses");
    if (stored) setExpenses(JSON.parse(stored));
  }, []);

  useEffect(() => {
    if (expenses.length != 0) {
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }

    // Calculate total spent whenever expenses change
    if (expenses.length > 0) {
      const amountArray = expenses.map((expense) => Number(expense.Amount));
      const calculatedTotal = amountArray.reduce((a, b) => a + b, 0);
      setTotalSpent(calculatedTotal);

      // Update balance based on initial balance and current total spent
      setTotalBalance(initialBalance - calculatedTotal);
    } else {
      // If no expenses, reset values
      setTotalSpent(0);
      setTotalBalance(initialBalance);
    }

    // Calculate summary values for categories
    const summaryTotal = expenses.reduce((total, item) => {
      if (!total[item.Category]) {
        total[item.Category] = 0;
      }
      total[item.Category] += Number(item.Amount);
      return total;
    }, {});
    setSummaryValues(summaryTotal);
  }, [expenses]);

  // Export CSV
  const exportCSV = () => {
    const rows = [
      "Amount,Description,Category,Date,Comments",
      ...expenses.map(
        (expense) =>
          `${expense.Amount},${expense.Description},${expense.Category},${expense.Date},${expense.Comment}`
      ),
    ];
    const blob = new Blob([rows.join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "expenses.csv";
    a.click();
  };

  return (
    <div
      className={` ${
        !darkMode ? "dark" : ""
      } relative flex flex-col dark:bg-charcoal`}
    >
      <Header dark={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className=" w-full gap-4">
        {/* Add expense form */}
        <Form
          displayForm={displayForm}
          setDisplayForm={setDisplayForm}
          categories={categories}
          expenses={expenses}
          setExpenses={setExpenses}
        />
        {/* Shows total balances */}
        <div className="w-full min-md:max-w-[80%] grid-cols-1 grid-rows-[7rem_1fr_1fr] items-center min-md:m-auto p-6">
          <div className="flex gap-2.5 max-h-25 mb-4">
            <Balance name="Balance" amount={totalBalance.toFixed(2)} />
            <Balance name="Spent" amount={totalspent.toFixed(2)} />
          </div>
          {/* This shows list of expenses */}
          <div>
            <div className="h-[20%] flex justify-between items-center flex-wrap dark:bg-charcoal dark:text-white mb-4 ">
              <h2>
                Expenses{" "}
                <span className=" inline-block">
                  <IoMdAddCircleOutline onClick={showAddExpenseForm} />
                </span>
              </h2>
              <span className=" flex">
                <Filter
                  categories={categories}
                  filteredExpenses={filteredExpenses}
                  setFilteredExpenses={setFilteredExpenses}
                  expenses={expenses}
                  setExpenses={setExpenses}
                />
                <button
                  className="border rounded-md ml-5 dark:bg-slategray dark:hover:bg-slate-400
                  dark:hover:text-black  px-2.5 py-1"
                  onClick={exportCSV}
                >
                  Export csv
                </button>
              </span>
            </div>
            {/* Display table */}
            <div className="border-lightgrey dark:bg-slategray border dark:border-softgray p-2.5 rounded-md h-40 overflow-y-scroll">
              <Table expenses={expenses} setExpenses={setExpenses} />
            </div>
          </div>
          {/* Summary of Expense */}
          <div className=" flex max-sm:flex-col  gap-8 mt-5">
            <Summary categories={categories} summaryValues={summaryValues} />
            <SpendingInsights
              summaryValues={summaryValues}
              categories={categories}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
