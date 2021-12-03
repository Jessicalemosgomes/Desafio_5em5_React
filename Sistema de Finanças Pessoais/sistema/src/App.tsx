import { useState, useEffect } from 'react';
import * as C from './App.styles';
import React from 'react';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrenteMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFiltedList] = useState<Item[]>([]);
  const [currentMoth, setCurrentMoth] = useState(getCurrenteMonth());

  useEffect(() => {
    setFiltedList( filterListByMonth(list, currentMoth));
  }, [list, currentMoth]);
  
  return(

  <C.Container>
    <C.Header>
      <C.HeaderText>Sistema Financeiro</C.HeaderText>
    </C.Header>
      <C.Body>
        

        <TableArea list={filteredList}/>

      </C.Body>

  </C.Container>
  );
}

export default App;