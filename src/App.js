import './App.css';
import { ActiveUser } from './components/active-user/active-user';
import { Header } from './components/header/header';


function App() {
  return (
    <div className="App">
      <div className='orginal'>
        <>
          <h1>داشبورد</h1>
          <Header />
        </>
        <>
          <h4 id='active-h4'>لیست کاربران : </h4>
          <ActiveUser />
        </>
      </div>
    </div>
  );
}

export default App;
