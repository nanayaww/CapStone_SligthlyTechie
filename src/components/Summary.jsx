export default function Summary({ categories, summaryValues }) {
  const listItem = categories.map((category) => (
    <li className=" flex justify-between" key={category}>
      <span>{category}:</span>
      <span>
        {summaryValues[category] ? `$${summaryValues[category]}` : "-"}
      </span>
    </li>
  ));
  return (
    <div className=" border-lightgrey dark:bg-slategray dark:border-softgray dark:text-white h-[calc(100%-20px)] w-[50%] rounded-md p-2.5 border ">
      <h2 className=" font-bold">Summary</h2>
      <ul>{listItem}</ul>
    </div>
  );
}
