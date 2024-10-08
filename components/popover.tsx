import { Popover } from "@headlessui/react";
import classNames from "classnames";

export default function ResultsHistoryPopover({
  className,
  align = "right",
  verticalAlign = "bottom",
}: {
  className?: string;
  align?: "left" | "right";
  verticalAlign?: "top" | "bottom";
}): JSX.Element | null {
  const mappedItems: { title: string; date: string }[] = [];
  return mappedItems.length > 0 ? (
    <div className={className ?? ""}>
      <Popover className="relative flex items-center">
        {() => (
          <>
            <Popover.Button className="outline-none relative focus:outline-none inline-flex justify-start items-center text-sm font-medium gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3 relative top-[1px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </Popover.Button>

            <Popover.Panel
              className={classNames(
                "z-20 outline-none absolute bg-gray-11 p-2 shadow-lg rounded-[4px] border-[1px] border-gray-2 w-[170px] max-h-[calc(100vh-100px)] overflow-auto",
                align === "left" ? "left-0" : "right-0",
                verticalAlign === "top" ? "bottom-[26px]" : "top-[26px]"
              )}
            >
              <ul
                className="flex flex-col text-sm gap-[2px]"
                aria-labelledby="dropdownDefaultButton"
              >
                {mappedItems.map(
                  ({
                    title,
                    date,
                  }: // uploadId,
                  {
                    title: string;
                    date: string;
                    // uploadId: string;
                  }) => {
                    return (
                      <li
                        key={date}
                        onClick={() => {
                          // router.push(`/analysis/${date}`);
                        }}
                        className={classNames(
                          "font-bold flex text-xs cursor-pointer items-center justify-start p-2 px-3 rounded-[4px]"
                        )}
                      >
                        {title}
                      </li>
                    );
                  }
                )}
              </ul>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </div>
  ) : null;
}
