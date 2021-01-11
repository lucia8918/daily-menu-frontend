import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { createComment, createLike } from "../../api/MealApi";
import { useGlobalLoadingActionsContext } from "../../context/GlobalLoadingContext";

function DetailTabCommentAdd(props) {
  const setLoading = useGlobalLoadingActionsContext();

  const { meal, refresh, setRefresh } = props;
  const [comment, setComment] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setComment(value);
  };

  const validate = () => {
    if (comment.length === 0) {
      alert("후기를 입력해 주세요.");
      return false;
    }

    return true;
  };

  const addComment = () => {
    validate();

    setLoading(true);
    createComment(meal.id, comment)
      .then(() => {
        setComment("");
        setRefresh(!refresh);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="m-lg-5">
      <Form className="">
        <Form.Row>
          <Col xs={11}>
            <Form.Control
              type="text"
              name="comment"
              value={comment}
              onChange={onChange}
              placeholder="후기를 입력해 주세요"
            />
          </Col>
          <Col>
            <Button variant="primary" onClick={addComment}>
              등록
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
}

export default DetailTabCommentAdd;
