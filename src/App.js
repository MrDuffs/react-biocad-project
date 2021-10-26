import './App.css'
import FilterDevices from './components/FilterDevices'
import  Device  from './components/Device/Device'
import Report from './components/Report'

function App() {
  return (
    <div className="App">
      <FilterDevices />
      <Device />
      <Report />
    </div>
  );
}

export default App;
