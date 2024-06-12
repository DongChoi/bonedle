import { boneList } from "@/app/data/bones";
import { BoneData, BoneKey, BoneList, FormSubmitHandler } from "@/app/types";
import React, { ChangeEvent, FormEvent, useState } from "react";

const GuessForm = ({
  handleGuessSubmit,
  guesses,
}: {
  handleGuessSubmit: FormSubmitHandler;
  guesses: BoneKey[];
}) => {
  const [value, setValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<BoneKey[]>([]);
  const [valueError, setValueError] = useState<Boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    setValue(userInput);
    if (userInput.length > 0) {
      const filteredSuggestions = boneList.filter(
        (bone) =>
          (bone as string).toLowerCase().startsWith(userInput.toLowerCase()) &&
          !guesses.includes(bone)
      );
      setValueError(false);
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!boneList.includes(value)) {
      setValueError(true);
    } else {
      handleGuessSubmit(value);
    }
    setSuggestions([]);
    setValue("");
  };

  const handleSuggestionClick = (suggestion: string) => {
    setValue(suggestion);
    handleGuessSubmit(suggestion);
    setSuggestions([]);
    setValue("");
  };

  return (
    <div className="relative">
      <form className="relative w-auto " onSubmit={handleFormSubmit}>
        <input
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Enter your text here"
          value={value}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="px-4 py-2 ml-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
        {valueError && <div className="text-red-500">Bone not found</div>}
        {suggestions.length > 0 && (
          // do the css later
          <ul className="absolute left-0 right-0 border border-gray-300 rounded-md mt-2 max-h-40 overflow-y-auto w-auto bg-white z-10">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleSuggestionClick(suggestion as string)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
        {value && suggestions.length === 0 && (
          <ul className="absolute left-0 right-0 border border-gray-300 rounded-md mt-2 max-h-40 overflow-y-auto w-auto bg-white z-10">
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-200">
              No bones found.
            </li>
          </ul>
        )}
      </form>
    </div>
  );
};

export default GuessForm;
