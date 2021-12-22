import * as C from './App.styles';
import { Character } from './components/Character';

const App = () => {
  return (

    
    <C.Container>
      <C.Map>
        <Character x={6} y={4} />
      </C.Map>
    </C.Container>

  );
}

export default App;