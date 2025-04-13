export default function Summary({ categories, summaryValues }) {
  const listItem = categories.map((category) => (
    <li className=" flex justify-between" key={category}>
      <span>{category}:</span>
      <span>
        {summaryValues[category] ? `$${summaryValues[category]}` : "$0"}
      </span>
    </li>
  ));
  return (
    <div className=" dark:bg-slategray h-[calc(100%-20px)] w-[50%] rounded-md p-2.5 border ">
      <h2 className=" font-bold">Summary</h2>
      <ul>{listItem}</ul>
    </div>
  );
}
