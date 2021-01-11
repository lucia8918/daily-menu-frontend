import React, { useEffect, useState } from "react";
import { Badge, Nav } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import DetailTabContent from "./DetailTabContent";
import { countComments } from "../../api/MealApi";
import { useGlobalLoadingActionsContext } from "../../context/GlobalLoadingContext";

/**
 * 메뉴 상세 페이지 - Tab 메뉴 Component
 * @returns {JSX.Element}
 * @constructor
 */
function DetailNav(props) {
  let [tabMenu, setTabMenu] = useState("comment");
  let [animation, setAnimation] = useState(false);
  const setLoading = useGlobalLoadingActionsContext();
  const { meal } = props;
  const [commentsCnt, setCommentsCnt] = useState(0);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    // 후기 개수 조회
    getCommentsCount();
  }, [refresh]);

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

  return (
    <div className="container">
      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item className="col-6">
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              setAnimation(false);
              setTabMenu("comment");
            }}
          >
            후기<Badge variant="primary">{commentsCnt}</Badge>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="col-6">
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              setAnimation(false);
              setTabMenu("material-origin");
            }}
          >
            원산지 정보
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <CSSTransition in={animation} classNames="wow" timeout={500}>
        <DetailTabContent
          tabMenu={tabMenu}
          setAnimation={setAnimation}
          meal={meal}
          refresh={refresh}
          setRefresh={setRefresh}
        />
      </CSSTransition>
    </div>
  );
}

export default DetailNav;
