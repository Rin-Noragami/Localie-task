import FormInput from "./components/FormInput";
import List from "./components/List";
import Footer from "./components/Footer";
import { DataProvider } from "./components/DataProvider";
import Title from "../style/Title";
import AppTodostyle from "../style/AppToDo";
import { ThemeProvider } from "styled-components";
import theme from "../style/Color-theme";

function AppTodo() {
  return (
    <DataProvider>
      <ThemeProvider theme={theme}>
        <AppTodostyle>
          <Title>Task list</Title>
          <FormInput />
          <List />
          <Footer />
        </AppTodostyle>
      </ThemeProvider>
    </DataProvider>
  );
}

export default AppTodo;
