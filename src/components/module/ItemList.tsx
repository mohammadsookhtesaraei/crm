import { Dispatch, SetStateAction } from 'react';

import FormInput from '@/components/module/FormInput';
import type { FormDataType } from '@/components/templates/AddCustomerPage';

interface ItemListProps {
  form: FormDataType;
  setForm: Dispatch<SetStateAction<FormDataType>>;
}

const ItemList = ({ form, setForm }: ItemListProps) => {
  const { products } = form;
  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;

    setForm((prev) => {
      const newProducts = [...prev.products];
      newProducts[index] = { ...newProducts[index], [name]: value };
      return { ...prev, products: newProducts };
    });
  };

  const deleteHandler = (index: number) => {
    setForm((prev) => ({
      ...prev,
      products: prev.products.filter((_, i) => i !== index),
    }));
  };
  const addHandler = () => {
    setForm((prev) => ({
      ...prev,
      products: [...products, { name: '', price: '', qty: '' }],
    }));
  };
  return (
    <div className="item-list">
      <p>Purchased Products</p>
      {products.map((product, index) => (
        <div className="form-input__list" key={index}>
          <div>
            <FormInput
              name="name"
              label="product name"
              type="text"
              value={product.name}
              onChange={(e) => changeHandler(e, index)}
            />
            <FormInput
              name="price"
              label="price"
              type="text"
              value={product.price}
              onChange={(e) => changeHandler(e, index)}
            />
            <FormInput
              name="qty"
              label="qty"
              type="number"
              value={product.qty}
              onChange={(e) => changeHandler(e, index)}
            />
          </div>
          <button onClick={() => deleteHandler(index)}>remove Item</button>
        </div>
      ))}
      <button onClick={addHandler}>Add Item</button>
    </div>
  );
};

export default ItemList;
