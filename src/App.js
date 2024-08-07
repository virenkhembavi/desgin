import Dashboard from "./Component/Dashboard";
import Navbar from "./Component/Navbar";
import Sidebar from "./Component/Sidebar";

export default function App() {
  return (
    <div className="Container">
      <Navbar />
      <div className="main-wapper">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  )
}
