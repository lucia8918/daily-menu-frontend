import React, { useEffect, useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { getComments } from "../../api/MealApi";
import { useGlobalLoadingActionsContext } from "../../context/GlobalLoadingContext";
import moment from "moment";

function DetailTabCommentContent(props) {
  const { meal, refresh } = props;
  const [comments, setComments] = useState([]);
  const setLoading = useGlobalLoadingActionsContext();

  useEffect(() => {
    // 후기 목록 조회
    getCommentsList();

    console.log("refresh:::", refresh);
  }, [refresh]);

  const getCommentsList = () => {
    setLoading(true);
    getComments(meal.id)
      .then((response) => {
        console.log(response);
        setComments(response);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (comments.length === 0)
    return (
      <div className="m-lg-5">현재 후기가 없습니다. 후기를 남겨 주세요!</div>
    );

  return (
    <div className="m-lg-5">
      <ListGroup variant="flush" className="text-left">
        {comments.map((comment) => {
          return (
            <ListGroup.Item>
              <div className="row">
                <div className="col-10 text-left">{comment.comment}</div>
                <div className="col-2  text-right text-secondary">
                  <div className="row-cols-2">
                    {moment(comment.createdAt).format("YYYY-MM-DD")}
                  </div>
                  <div className="row-cols-2 font-italic">
                    {comment.nickName}
                  </div>
                </div>
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      <Button variant="info">더보기</Button>
    </div>
  );
}

export default DetailTabCommentContent;
