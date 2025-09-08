import Header from "./components/Header";
import Footer from "./components/footer";
import EmployeeList from "./components/EmployeeList";

export default function App() {
  return (
    <>
      <Header />
      <main id="main">
        <h2>Employee Directory</h2>
        <EmployeeList />
      </main>
      <Footer />
    </>
  );
}
