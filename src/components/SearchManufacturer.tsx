"use client";

import Image from "next/image";
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import CarLogoImageSvg from "@/../public/car-logo.svg";

import { manufacturers } from "@/constants";

export type SearchManufacturerProps = {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
};

export function SearchManufacturer({
  manufacturer,
  setManufacturer,
}: Readonly<SearchManufacturerProps>) {
  const [query, setQuery] = useState<string>("");

  const filterManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        {/* Button for the combobox. Click on the icon to see the dropdown */}
        <Combobox.Button className="absolute top-[14px]">
          <Image
            src={CarLogoImageSvg}
            width={20}
            height={20}
            className="ml-4"
            alt="car logo"
          />
        </Combobox.Button>

        <Combobox.Input
          className="search-manufacturer__input"
          displayValue={(item: string) => item}
          onChange={(event) => setQuery(event.target.value)} // Update the search query when the input changes
        />
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")} // Reset the search query after the transition completes
        >
          <Combobox.Options
            className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg right-1 right-black right-opacity-5 focus:outline-none sm:text-sm"
            static
          >
            {filterManufacturers.length === 0 && query !== "" ? (
              <Combobox.Option
                value={query}
                className="search-manufacturer__option"
              >
                Create &ldquo;{query}&ldquo;
              </Combobox.Option>
            ) : (
              filterManufacturers.map((item) => (
                <Combobox.Option
                  key={item}
                  className={({ active }) =>
                    `relative search-manufacturer__option ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                  value={item}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item}
                      </span>

                      {/* show an active blue background color if the option is selected */}
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-primary-blue"
                          }`}
                        ></span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </Combobox>
    </div>
  );
}
