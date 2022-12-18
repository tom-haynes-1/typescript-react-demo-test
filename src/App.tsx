import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Input from './components/Input';

const App = () => {

  const personName = {
    firstName: 'Tom',
    lastName: 'Haynes',
  };

  const namesList = [
    {
      firstName: 'Boba',
      lastName: 'Fett'
    },

    {
      firstName: 'Fennec',
      lastName: 'Shand'
    },

    {
      firstName: 'Mace',
      lastName: 'Windu'
    }
];

  return (
    <div className="App">
      <Button 
        handleClick={(event) => 
          {console.log('button clicked', event)
        }} 
      />
      <Input 
        value='0'
        handleChange={(event) => 
          {console.log(event)
        }}
      />
    </div>
  );
}

export default App;
