import './App.css';
import UserProfiles from './UserProfile';
function App() {
  return (
    <div className="container">
    <div className="box">
      <UserProfiles name="John Doe" age="30" location="New York" image="https://i.pinimg.com/564x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg"/>
    </div>
    <div className="box">
      <UserProfiles name="Jane Doe" age="25" location="San Francisco" image="https://i.pinimg.com/564x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg"/>
    </div>
    <div className="box">
      <UserProfiles name="Josh Guinto" age="21" location="Antipolo" image="https://i.pinimg.com/564x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg"/>
    </div>
  </div>
  );
}
export default App;
