import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

interface DropdownProps {
  value: string;
  onChange: (value: number) => void;
  options: { value: number; label: string }[];
  placeholder?: string;
}
export const Dropdown = ({
  value,
  onChange,
  options,
  placeholder,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<{ value: number; label: string }>();

  useEffect(() => {
    setSelectedOption(options.find((opt) => opt.value === value));
  }, [onChange]);
  return (
    <>
      <div className="dropdown">
        <button
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
                  onChange(option.value);
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
    </>
  );
};
