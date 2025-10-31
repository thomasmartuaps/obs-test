interface ButtonProps {
  buttonText: string;
  type?: "submit" | "button";
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  color?: "red" | "blue" | "indigo" | "sky";
  isLoading?: boolean;
}

export function Button({
  buttonText,
  onClick,
  color = "sky",
  isLoading,
  type = "button",
}: ButtonProps) {
  const className =
    color === "indigo"
      ? `rounded-full bg-indigo-500 px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-indigo-700 min-w-25`
      : color === "red"
        ? `rounded-full bg-red-500 px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-red-700 min-w-25`
        : `rounded-full bg-sky-500 px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-sky-700 min-w-25`;
  return (
    <button onClick={onClick} type={type} className={className}>
      {isLoading ? (
        <span className="mr-3 size-5 loader animate-spin"> </span>
      ) : (
        buttonText
      )}
    </button>
  );
}
