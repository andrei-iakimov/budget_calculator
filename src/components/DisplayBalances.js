import React from "react";
import { Segment, Grid } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

function DisplayBalances({ title, type = "h1" }) {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance
              size="tiny"
              color="green"
              title="Income"
              value="1,045.50"
            />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance
              size="tiny"
              color="red"
              title="Expenses"
              value="623.50"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default DisplayBalances;
