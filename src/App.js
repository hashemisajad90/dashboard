import './App.css';
import { ActiveUser } from './components/active-user/active-user';
import { Header } from './components/header/header';
import { InitialContextProvider } from './contexts/initialContext';


function App() {
  return (
    <div className="App">
      <InitialContextProvider>
        <div className='orginal'>
          <>
            <Header />
          </>
          <>
            <h4 id='active-h4'>لیست کاربران : </h4>
            <ActiveUser />
          </>
        </div>
      </InitialContextProvider>
    </div>
  );
}

export default App;
