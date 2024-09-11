import './App.css';
import UserProfiles from './UserProfile';
function App() {
  return (
    <div className="container">
    <div className="box">
      <UserProfiles name="John Doe" age="30" location="New York" />
    </div>
    <div className="box">
      <UserProfiles name="Jane Smith" age="25" location="San Francisco" />
    </div>
    <div className="box">
      <UserProfiles name="Josh Guinto" age="21" location="Antipolo" />
    </div>
  </div>
  );
}
export default App;
