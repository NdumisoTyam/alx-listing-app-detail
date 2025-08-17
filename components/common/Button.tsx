import { ButtonProps } from '../../interfaces';

const Button = ({ label, onClick }: ButtonProps) => (
  <button
    onClick={onClick}
    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
  >
    {label}
  </button>
);

export default Button;