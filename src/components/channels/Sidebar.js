import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

const SortOption = (props) => {
  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={<Radio color="success" />}
          value={props.text}
          label={props.text}
        />
      </FormGroup>
    </div>
  );
};

const Tag = (props) => {
  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox color="success" />}
          label={props.text}
        />
      </FormGroup>
    </>
  );
};

const Sidebar = () => {
  const sortOptions = [
    { text: "Maximum ROI" },
    { text: "Maximum Profits" },
    { text: "Minimum Drawdowns" },
    { text: "Highest Hit-rate" },
    { text: "Minimum Capital Required" },
  ];

  const tags = [
    { text: "Futures (NFO)", borderClass: "border-green-600", alt: "" },
    {
      text: "Options (NFO)",
      borderClass: "border-sky-500",
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3efba4d90286ef0f803a40c8f7a87195f63c0f1dc79739ca3305a729ddefd6f1?apiKey=3daa1173557043d6a167c459539faf4e&",
      alt: "",
    },
    { text: "Stocks (NSE)", borderClass: "border-green-600", alt: "" },
    { text: "Crypto", borderClass: "border-green-600", alt: "" },
  ];

  return (
    <>
      <div className="flex flex-col m-5 p-4 bg-white rounded-xl border border-solid border-slate-300 max-w-[480px]">
        <header className="self-start ml-4 text-2xl font-bold tracking-normal leading-8 text-center text-slate-800">
          Filters
        </header>
        <section className="flex flex-col px-6 py-8 mt-4 bg-white rounded-xl shadow-sm">
          <form className="flex flex-col justify-center w-full text-sm tracking-wide leading-7 whitespace-nowrap rounded-xl border border-gray-200 border-solid bg-slate-100 text-neutral-500">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="flex gap-4 px-6 py-4 rounded-xl border border-solid bg-stone-50 border-neutral-200">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcf8e7f40464d593903d7a6d63801e20d63eeabf5826128ece7bc7f8c0110c6c?apiKey=3daa1173557043d6a167c459539faf4e&"
                alt=""
                className="shrink-0 w-5 aspect-square"
              />
              <input
                type="search"
                id="search"
                placeholder="Search"
                aria-label="Search"
                className="flex-auto my-auto bg-transparent border-none focus:outline-none"
              />
            </div>
          </form>
        </section>
        <section className="flex flex-col px-9 py-8 mt-4 w-full rounded-xl border border-solid bg-slate-100 border-slate-100">
          <header className="text-base font-bold tracking-normal leading-6 text-slate-800">
            Sort By
          </header>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            {sortOptions.map((option, index) => (
              <SortOption
                key={index}
                text={option.text}
                isActive={option.isActive}
              />
            ))}
          </RadioGroup>
        </section>
        <section className="flex flex-col px-9 py-8 mt-4 w-full text-sm font-semibold tracking-wide leading-6 rounded-xl border border-solid bg-slate-100 border-slate-100 text-neutral-600">
          <header className="text-base font-bold tracking-normal leading-6 text-slate-800">
            Tags
          </header>
          {tags.map((tag, index) => (
            <Tag
              key={index}
              text={tag.text}
              borderClass={tag.borderClass}
              imgSrc={tag.imgSrc}
              alt={tag.alt}
            />
          ))}
        </section>
        <div tabindex="0" className="mt-4 ml-1">
          <Button variant="outlined">Reset</Button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
