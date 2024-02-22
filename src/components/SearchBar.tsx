"use client";
import { useState } from "react";
import { SearchManufacturer } from "./";

export function SearchBar({}) {
  const [manufacturer, setManufacture] = useState<string>("");

  function handleSearch() {}

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacture}
        />
      </div>
    </form>
  );
}
