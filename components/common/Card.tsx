import { CardProps } from '../../interfaces';

const Card = ({ title, description, imageUrl, price }: CardProps) => (
  <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
    <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded" />
    <h2 className="text-lg font-semibold mt-2">{title}</h2>
    <p className="text-sm text-gray-600">{description}</p>
    <p className="text-md font-bold mt-2">${price} / night</p>
  </div>
);

export default Card;