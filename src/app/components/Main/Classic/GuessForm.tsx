import { boneList } from "@/app/data/bones";
import { BoneData, BoneKey, BoneList, FormSubmitHandler } from "@/app/types";
import React, { ChangeEvent, FormEvent, useState } from "react";

const GuessForm = ({
  handleGuessSubmit,
}: {
  handleGuessSubmit: FormSubmitHandler;
}) => {
  const [value, setValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<BoneKey[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    setValue(userInput);
    if (userInput.length > 0) {
      const filteredSuggestions = boneList.filter((bone) =>
        (bone as string).toLowerCase().startsWith(userInput.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleGuessSubmit(value);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setValue(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="relative">
      <form onSubmit={handleFormSubmit}>
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
        {suggestions.length > 0 && (
          <ul className="border relative border-gray-300 rounded-md mt-2 max-h-40 overflow-y-auto">
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
      </form>
    </div>
  );
};

export default GuessForm;
