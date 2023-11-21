import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPizzas } from '../redux/slices/pizzaSlice';

// import { SearchContext } from '../App';
import { setCategoryId, setSort } from '../redux/slices/filterSlice';
import { RootState, useAppDispatch } from '../redux/store';

const Home = () => {
  const dispatch = useAppDispatch();
  const searchValue = useSelector((state: any) => state.filter.searchValue);
  const category = useSelector((state: any) => state.filter.categoryId);
  const sort = useSelector((state: any) => state.filter.sort);

  const { pizzas, status } = useSelector((state: RootState) => state.pizza);

  // const { searchValue } = React.useContext(SearchContext);

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
            <Categories
              value={category}
              onChangeCategory={(id: number) => dispatch(setCategoryId(id))}
            />
            <Sort value={sort} onChangeSort={(i: any) => dispatch(setSort(i))} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {status == 'loading'
              ? [...new Array(10)].map((_, i) => <Skeleton key={i} />)
              : pizzas.map((pizza: any) => <PizzaBlock key={pizza.id} {...pizza} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
