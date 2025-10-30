interface ButtonProps {
  buttonText: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  color?: "red" | "blue" | "green" | "sky";
}

export function Button({ buttonText, onClick, color = "sky" }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full bg-${color}-500 px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-${color}-700`}
    >
      {buttonText}
    </button>
  );
}
