import { useState, useEffect } from 'react';
import * as C from './App.styles';
import React from 'react';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrenteMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';


const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFiltedList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrenteMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFiltedList( filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);
  
  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);

  }
  
  return(

  <C.Container>
    <C.Header>
      <C.HeaderText>Sistema Financeiro</C.HeaderText>
    </C.Header>
      <C.Body>
        
        <InfoArea
        currentMonth={currentMonth}
        onMonthChange={handleMonthChange}
        income={income}
        expense={expense}
        />

        <TableArea list={filteredList}/>

      </C.Body>

  </C.Container>
  );
}

export default App;