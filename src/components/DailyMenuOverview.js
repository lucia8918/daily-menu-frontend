import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";

function DailyMenuOverview(props) {
  const { menu } = props;
  return (
    <ListGroup.Item>
      {menu.items.map((item) => {
        return item.focus === true ? (
          <p style={{ color: "red" }}>{item.name}</p>
        ) : (
          <p>{item.name}</p>
        );
      })}
    </ListGroup.Item>
  );
}

export default DailyMenuOverview;
