import React from "react";
import { useRouter } from "next/router";
import css from "styles/search.module.scss";
import SearchOutline from "constant/icon/SearchOutline";

type E = React.ChangeEvent<HTMLSelectElement>;

const SearchBar = () => {
  const onFocus = () => {
    console.log(window.scrollY);
    if (window.scrollY <= 0) {
      window.scrollBy({ behavior: "smooth", top: 300 });
    }
  };

  const router = useRouter();

  const onChangeType = (e: E) => {
    const { value } = e.target;
    if (router.query.path) {
      router.push(`${router.query?.path[0]}/${value}`);
    }
  };
  return (
    <div className={css.container}>
      <div className={css.searchbox}>
        {/* ONE */}
        <div className={css.input}>
          <i>
            <SearchOutline size={20} />
          </i>
          <input
            onFocus={onFocus}
            type="search"
            placeholder="what are you looking for... "
          />
        </div>
        {/* TWO */}
        <div className={css.dropdown}>
          <select onChange={onChangeType} defaultValue="outline">
            {/* @ts-ignore */}
            {selectOptions[router.query?.path[0]]?.map((text, index) => (
              <option key={index} value={text}>
                {text}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
export default SearchBar;

const selectOptions = {
  awesome: ["brands", "duotone", "light", "regular", "solid"],
  bootstrap: ["mixed"],
  fluent: ["filled", "regular"],
  ionic: ["outline", "sharp", "solid"],
  ios: ["fill", "outline"],
};
