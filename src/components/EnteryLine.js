import React from "react";
import { Segment, Grid, Icon } from "semantic-ui-react";

function EnteryLine({ description, value, isExpense }) {
  return (
    <Segment color={isExpense ? "red" : "green"}>
      <Grid columns={3} textAlign="right">
        <Grid.Row>
          <Grid.Column textAlign="left" width={10}>
            {description}
          </Grid.Column>
          <Grid.Column width={3}>{value}</Grid.Column>
          <Grid.Column width={3}>
            <Icon name="edit" bordered></Icon>
            <Icon name="trash" bordered></Icon>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default EnteryLine;
