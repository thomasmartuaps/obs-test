interface ButtonProps {
  buttonText: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export function Button({ buttonText, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-full bg-sky-500 px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-sky-700"
    >
      {buttonText}
    </button>
  );
}
