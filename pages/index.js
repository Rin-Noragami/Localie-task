import theme from "../style/Color-theme";
import Title from "../style/Title";
import AppTodostyle from "../style/AppToDo";
import { ThemeProvider } from "styled-components";
import { DataProvider } from "./components/DataProvider";
import FormInput from "./components/FormInput";
import List from "./components/List";
import Footer from "./components/Footer";
//imports styles for components
//context data to be passed to all components
//imports components

//building the page structure from components
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
