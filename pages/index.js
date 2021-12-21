import FormInput from "./components/FormInput";
import List from "./components/List";
import Footer from "./components/Footer";
import { DataProvider } from "./components/DataProvider";
import Title from "../style/Title"
import AppTodostyle from "../style/AppToDo"


function AppTodo() {
  return (
    <DataProvider>
      <AppTodostyle>
        <Title>Task list</Title>
        <FormInput />
        <List />
        <Footer />
      </AppTodostyle>
    </DataProvider>
  );
}



export default AppTodo;
