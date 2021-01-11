import React, { useEffect, useState } from "react";
import DetailTabMaterialOriginContent from "./DetailTabMaterialOriginContent";
import DetailTabCommentContent from "./DetailTabCommentContent";
import DetailTabCommentAdd from "./DetailTabCommentAdd";

function DetailTabContent(props) {
  const { meal, refresh, setRefresh } = props;

  useEffect(() => {
    props.setAnimation(true);
  }, []);

  if (props.tabMenu === "material-origin") {
    return <DetailTabMaterialOriginContent />;
  } else if (props.tabMenu === "comment") {
    return (
      <>
        <DetailTabCommentAdd
          meal={meal}
          refresh={refresh}
          setRefresh={setRefresh}
        />
        <DetailTabCommentContent meal={meal} refresh={refresh} />
      </>
    );
  } else {
    return <div className="m-5">알수 없음</div>;
  }
}

export default DetailTabContent;
