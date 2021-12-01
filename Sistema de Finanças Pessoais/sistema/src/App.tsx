import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';

const App = () => {
  const [list, setList] = useState(items);
  
  return(

  <C.Container>
    <C.Header>
      <C.HeaderText>Sistema Financeiro</C.HeaderText>
    </C.Header>
      <C.Body>
        ...
      </C.Body>

  </C.Container>
  );
}

export default App;