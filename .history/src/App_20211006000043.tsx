import { useEffect, useState } from 'react';
import * as C from './App.style';
import { Item } from "./types/Item";
import { Category } from "./types/Category";
import { categories } from "./data/categories"
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './helpers/dataFilter';
import { TableArea } from './components/TableArea';

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList( filterListByMonth(list, currentMonth) );
  }, [list, currentMonth]);
  return (

    <C.Container>
      <C.Header>
      <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <TableArea />
      </C.Body>
    </C.Container>

  );
}

export default App; 
