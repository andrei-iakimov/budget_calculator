import { Container, Grid, Icon, Segment, Form } from "semantic-ui-react";
import "./App.css";
import ButtonSaveOrCancel from "./components/ButtonSaveOrCancel";
import DisplayBalance from "./components/DisplayBalance";
import MainHeader from "./components/MainHeader";
import NewEnteryForm from "./components/NewEnteryForm";
import DisplayBalances from "./components/DisplayBalances";
import EnteryLine from "./components/EnteryLine";

function App() {
  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance size="small" title="Your Balance:" value="2,500.53" />
      <DisplayBalances />

      <MainHeader title="History" type="h3" />
      <EnteryLine description="Something" value="$10.00" isExpense={true} />
      <EnteryLine
        description="Something else"
        value="$100.00"
        isExpense={false}
      />
      <EnteryLine description="Something" value="$20.00" isExpense={true} />
      <MainHeader title="Add new transation" type="h3" />
      <Form unstackable>
        <NewEnteryForm />
        <ButtonSaveOrCancel />
      </Form>
    </Container>
  );
}

export default App;
