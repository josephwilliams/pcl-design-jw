import classNames from "classnames";

function Card({
  icon,
  anyoneColor,
  hoverBgColor,
}: {
  icon: React.ReactNode;
  anyoneColor: string;
  hoverBgColor: string;
}) {
  return (
    <div
      className={classNames(
        "flex flex-col justify-between items-start border-[1px] border-[#222428] rounded-[8px] p-[15px] text-[14px]",
        hoverBgColor === "#3c3c36" ? "card-hover-1" : "card-hover-1"
      )}
    >
      <div className="flex justify-between items-center">
        <div className="p-[15px]">{icon}</div>
        <h2 className="text-xl font-bold text-white">Points Card</h2>
      </div>
      <div className="text-gray-500 mb-[15px]">
        Lorem ipsum is a default filler test that is used by{" "}
        <span
          style={{
            color: anyoneColor,
          }}
        >
          anyone
        </span>{" "}
        who doesn’t need focus on text.
      </div>
      <div className="flex items-end justify-between w-full">
        <div>
          <span className="text-white">+4 points</span>
          <span className="text-[#9B9C9D]">/ dollar</span>
        </div>
        <div className="italic text-[#9B9C9D]">per day</div>
      </div>
    </div>
  );
}

export default Card;
