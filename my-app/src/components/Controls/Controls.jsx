// import { ChartTraser } from './components/ChartTraser/ChartTraser'

function Controls() {
    function handleClick() {
      const {bigBoyData} = useData();
    }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
    
}

export default Controls;