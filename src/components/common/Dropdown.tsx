import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

interface DropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: number; label: string }[];
  error?: string;
  placeholder?: string;
}
export const Dropdown = ({
  value,
  onChange,
  error,
  options,
  placeholder,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<{ value: number; label: string }>();

  useEffect(() => {
    console.log('VALUE', value);
    console.log('options', options);
    const optionFInded = options.find((opt) => opt.label === value);
    console.log('OPTION FINDED', optionFInded)
    setSelectedOption(options.find((opt) => opt.label === value));
  }, [onChange]);
  return (
    <>
      <div className="dropdown">
        <button
          type="button"
          className="dropdown__trigger"
          onClick={() => setIsOpen(!isOpen)}
        >
          <label>
            {selectedOption
              ? selectedOption.label
              : placeholder || "Seleccione una opcion"}
          </label>
          <span>{isOpen ? <ChevronDown /> : <ChevronUp />}</span>
        </button>
        {isOpen && (
          <ul className="dropdown__menu">
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => {
                  onChange(option.label);
                  setIsOpen(false);
                }}
                className="dropdown__item"
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
      {error && <label>{error}</label>}
    </>
  );
};
