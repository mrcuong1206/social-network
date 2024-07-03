import React from "react";
import Moment from "react-moment";
import moment from "moment";

const CustomMoment = ({ messageAt }) => {
  // Chuyển đổi đối tượng
  const messageMoment = moment(messageAt);

  return (
    <div className="post_profile_privacy_date">
      {messageMoment.isSame(moment(), "day") ? (
        <Moment format="h:mm A" interval={30}>
          {messageAt}
        </Moment>
      ) : (
        <Moment format="dddd h:mm A" interval={30}>
          {messageAt}
        </Moment>
      )}
    </div>
  );
};

export default CustomMoment;
