interface ButtonProps {
  buttonText: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  color?: "red" | "blue" | "green" | "sky";
  isLoading?: boolean;
}

export function Button({
  buttonText,
  onClick,
  color = "sky",
  isLoading,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full bg-${color}-500 px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-${color}-700`}
    >
      {isLoading ? (
        <svg className="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24">
          {" "}
        </svg>
      ) : (
        buttonText
      )}
    </button>
  );
}
