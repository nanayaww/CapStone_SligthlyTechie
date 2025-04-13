export default function Summary({ categories, summaryValues }) {
  const listItem = categories.map((category) => (
    <li key={category}>
      {category}:
      <span>
        {summaryValues[category] ? `$${summaryValues[category]}` : "$0"}
      </span>
    </li>
  ));
  return (
    <div className=" dark:bg-slategray h-[calc(100%-20px)] w-[50%] rounded-md p-2.5 border ">
      <h2>Summary</h2>
      <ul>{listItem}</ul>
    </div>
  );
}
