import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPizzas } from '../redux/slices/pizzaSlice';

import { SearchContext } from '../App';
import { setCategoryId, setSort } from '../redux/slices/filterSlice';

const Home = () => {
  const dispatch = useDispatch();

  const category = useSelector((state) => state.filter.categoryId);
  const sort = useSelector((state) => state.filter.sort);

  const { pizzas, status } = useSelector((state) => state.pizza);

  const { searchValue } = React.useContext(SearchContext);

  const getPizzas = async () => {
    const categoryId = category ? `category=${category}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';
    const sorted = sort.sortProperty;

    dispatch(fetchPizzas({ categoryId, search, sorted }));
  };

  React.useEffect(() => {
    getPizzas();
  }, [category, sort, searchValue]);

  return (
    <div>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories value={category} onChangeCategory={(id) => dispatch(setCategoryId(id))} />
            <Sort value={sort} onChangeSort={(i) => dispatch(setSort(i))} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {status == 'loading'
              ? [...new Array(10)].map((_, i) => <Skeleton key={i} />)
              : pizzas.map((pizza, i) => <PizzaBlock key={i} {...pizza} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
