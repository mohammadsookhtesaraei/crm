import Link from 'next/link';

import { FormDataType } from '@/components/templates/AddCustomerPage';

const Card = ({ name, lastName, email, _id }: FormDataType) => {
  return (
    <div className="card">
      <div className="card__details">
        <p>
          {name} {lastName}
        </p>
        <p>{email}</p>
      </div>
      <div className="card__buttons">
        <button>delete</button>
        <Link href={`/edit/${_id}`}>Edit</Link>
        <Link href={`/customer/${_id}`}>Details</Link>
      </div>
    </div>
  );
};

export default Card;
