import Pagination from "./Pagination";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Pagination totalPage={15} />
    </div>
  );
}
