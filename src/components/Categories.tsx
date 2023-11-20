/* eslint-disable react/prop-types */
import React from 'react';


type CategoryProps={
  value:number,
  onChangeCategory:(i:number)=>void
}

const Categories:React.FC <CategoryProps> =({ value, onChangeCategory }) =>{
  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <>
      <div className="categories">
        <ul>
          {categories.map((item, i) => (
            <li key={i} onClick={() => onChangeCategory(i)} className={value == i ? 'active' : ''}>
              {' '}
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Categories;
