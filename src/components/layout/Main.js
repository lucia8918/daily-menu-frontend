import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Route } from "react-router-dom";
import Banner from "../Banner";
import DailyMenu from "../DailyMenu";
import WeeklyMenu from "../WeeklyMenu";
import Detail from "../detail/Detail";
import Switch from "react-bootstrap/Switch";
import { getTodayMeals } from "../../api/MealApi";
import Meals from "../../Meals.json";
import { useGlobalLoadingActionsContext } from "../../context/GlobalLoadingContext";

function Main() {
  const bannerImages = ["../images/banner-2.png"];
  const today = "2021-01-08";

  const [dailyMenuList, setDailyMenuList] = useState([]);

  const setLoading = useGlobalLoadingActionsContext();

  useEffect(() => {
    // 오늘의 식단 조회
    getDailyMenu();
  }, []);

  const getDailyMenu = () => {
    setLoading(true);
    setTimeout(() => {}, 2000);
    getTodayMeals()
      .then((response) => {
        // 오늘의 메뉴 context에 저장
        setDailyMenuList(response);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Switch>
      <Route exact path="/">
        <div className="container">
          <Banner images={bannerImages} />
          <div>
            <Card.Header as="h3">{today}</Card.Header>
          </div>
          <div className="row">
            {dailyMenuList.length === 0 ? (
              <div className="col-md-12 mt-1" onClick={() => {}}>
                <Card>
                  <Card.Header as="h3">
                    오늘은 맛젊식당을 운영하지 않습니다.
                  </Card.Header>
                </Card>
              </div>
            ) : (
              dailyMenuList.map((meal) => {
                return <DailyMenu meal={meal} key={meal.id}></DailyMenu>;
              })
            )}
          </div>
        </div>
      </Route>

      <Route path="/weekly-menu">
        <WeeklyMenu></WeeklyMenu>
      </Route>

      <Route path="/detail/:mealId">
        <Detail meals={Meals} />
      </Route>

      <Route path="/menu-request">
        <div>메뉴 요청</div>
      </Route>
    </Switch>
  );
}

export default Main;
