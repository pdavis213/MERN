import User from './components/User';

function App() {
  return (
    <div className="text">
      <User firstName="Jane" lastName="Doe" age={45} hairColor="Black"/>
      <User firstName="John" lastName="Smith" age={88} hairColor="Brown"/>
      <User firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown"/>
      <User firstName="Maria" lastName="Smith" age={62} hairColor="Brown"/>
    </div>
  );
}

export default App;
