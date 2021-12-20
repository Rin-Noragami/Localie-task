import FormInput from "./components/FormInput";
import List from "./components/List";
import Footer from "./components/Footer";
import { DataProvider } from "./components/DataProvider";

function AppTodo() {
  return (
    <DataProvider>
      <div className="AppTodo">
        <h1>Task list</h1>
        <FormInput />
        <List />
        <Footer />
      </div>
    </DataProvider>
  );
}

export default AppTodo;
