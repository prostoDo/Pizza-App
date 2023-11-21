/* eslint-disable react/prop-types */
import React from 'react';

type SortProps = {
  value: any;
  onChangeSort: any;
};

type SortItem = {
  name: string;
  sortProperty: string;
};

const Sort: React.FC<SortProps> = ({ value, onChangeSort }) => {
  const [open, setOpen] = React.useState(false);

  const sortRef = React.useRef<HTMLDivElement>(null);

  const sortList: SortItem[] = [
    { name: 'популярности', sortProperty: 'rating' },
    { name: 'цене', sortProperty: 'price' },
    { name: 'алфавиту', sortProperty: 'title' },
    
  ];
  function onClickSort(index:any) {
    onChangeSort(index);

    
    setOpen(!open);
  }

  React.useEffect(() => {
    const onCloseSort = (e:any) => {
      if (!e.composedPath().includes(sortRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener('click', onCloseSort);

    return () => {
      document.body.removeEventListener('click', onCloseSort);
    };
  }, []);

  const chosenSort = value.name;

  return (
    <>
      R
      <div ref={sortRef} className="sort">
        <div className="sort__label">
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
          <b>Сортировка по:</b>
          <span onClick={() => setOpen(!open)}>{chosenSort}</span>
        </div>
        <div className="sort__popup">
          <ul>
            {open &&
              sortList.map((obj, i) => (
                <li
                  key={i}
                  className={value.sortProperty == obj.sortProperty ? 'active' : ''}
                  onClick={() => onClickSort(obj)}>
                  {obj.name}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sort;
