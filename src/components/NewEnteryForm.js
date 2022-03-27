import React from "react";
import { Form } from "semantic-ui-react";

function NewEnteryForm({ title, type = "h1" }) {
  return (
    <Form.Group>
      <Form.Input
        icon="tags"
        width={12}
        label="Description"
        placeholder="New thing"
      />
      <Form.Input
        width={4}
        label="value"
        placeholder="100.00"
        icon="dollar"
        iconPosition="left"
      />
    </Form.Group>
  );
}

export default NewEnteryForm;
