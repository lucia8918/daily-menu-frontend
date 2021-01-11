import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  ListGroup,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import DailyMenuOverview from "./DailyMenuOverview";
import { Link } from "react-router-dom";
import { countComments, countLikes, createLike } from "../api/MealApi";
import { useGlobalLoadingActionsContext } from "../context/GlobalLoadingContext";

function DailyMenu(props) {
  const { meal } = props;
  const setLoading = useGlobalLoadingActionsContext();
  const [likesCnt, setLikesCnt] = useState(0);
  const [commentsCnt, setCommentsCnt] = useState(0);

  useEffect(() => {
    // 좋아요 개수 조회
    getLikesCount();

    // 후기 개수 조회
    getCommentsCount();
  });

  const getLikesCount = () => {
    setLoading(true);
    countLikes(meal.id)
      .then((response) => {
        setLikesCnt(response);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getCommentsCount = () => {
    setLoading(true);
    countComments(meal.id)
      .then((response) => {
        setCommentsCnt(response);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const addLike = () => {
    setLoading(true);
    createLike(meal.id)
      .then(() => {
        setLikesCnt((prevState) => prevState + 1);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="col-md-4 mt-1" onClick={() => {}}>
      <Card>
        {/*<Card.Img variant="top"*/}
        {/*          src="../images/kong.gif"*/}
        {/*          roundedCircle/>*/}
        <Card.Header as="h3">{meal.displayType}</Card.Header>
        <Card.Body>
          <Card.Title>
            {meal.startTime}~{meal.endTime}
          </Card.Title>
          <ListGroup variant="flush">
            {meal.menus.map((menu) => {
              return (
                <DailyMenuOverview
                  menu={menu}
                  key={meal.id}
                ></DailyMenuOverview>
              );
            })}
          </ListGroup>
          <OverlayTrigger
            overlay={
              <Tooltip>
                맛있게 먹었다면! <strong>좋아요</strong>를 눌러주세요!
              </Tooltip>
            }
          >
            <Button variant="primary" size="sm" onClick={addLike}>
              좋아요 <Badge variant="light">{likesCnt}</Badge>
            </Button>
          </OverlayTrigger>
          <OverlayTrigger overlay={<Tooltip>후기 작성하러 가기!</Tooltip>}>
            <Link to={`/detail/${meal.id}`}>
              <Button variant="secondary" className="ml-1" size="sm">
                후기 작성 <Badge variant="light">{commentsCnt}</Badge>
              </Button>
            </Link>
          </OverlayTrigger>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DailyMenu;
