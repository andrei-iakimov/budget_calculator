import React from "react";
import { Statistic } from "semantic-ui-react";

function DisplayBalance({ size = "tiny", title, value, color = "black" }) {
  return (
    <Statistic size={size} color={color}>
      <Statistic.Label>{title}</Statistic.Label>
      <Statistic.Value>{value}</Statistic.Value>
    </Statistic>
  );
}

export default DisplayBalance;
