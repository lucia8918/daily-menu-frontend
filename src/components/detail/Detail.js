import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import DetailNav from "./DetailNav";
import DailyMenuOverview from "../DailyMenuOverview";
import {
  Badge,
  Button,
  Card,
  ListGroup,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { countLikes, createLike } from "../../api/MealApi";
import { useGlobalLoadingActionsContext } from "../../context/GlobalLoadingContext";

function Detail(props) {
  let { mealId } = useParams();
  let history = useHistory();
  let { meals } = props;
  const [likesCnt, setLikesCnt] = useState(0);
  const setLoading = useGlobalLoadingActionsContext();

  let meal = meals.find((meal) => meal.id == mealId);

  useEffect(() => {
    // 좋아요 개수 조회
    getLikesCount();
  }, []);

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

  if (meal == null) return <div>없는 식단입니다.</div>;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="../images/kong.gif" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <Card.Header as="h3">{meal.date}</Card.Header>
          <Card.Text as="h4">{meal.displayType}</Card.Text>
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
            <Button variant="primary" onClick={addLike}>
              좋아요 <Badge variant="light">{likesCnt}</Badge>
            </Button>
          </OverlayTrigger>
          <button
            className="btn btn-info ml-1"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>

      {/*하단 Tab 영역*/}
      <DetailNav meal={meal} />
    </div>
  );
}

export default Detail;
