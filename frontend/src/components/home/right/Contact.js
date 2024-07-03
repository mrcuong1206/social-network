export default function Contact({ dataFriend, onlineUsers, openChatWindow }) {
  const onchat = (friend) => {
    openChatWindow(friend);
  };
  return (
    <>
      {dataFriend &&
        dataFriend.friends?.map((friend) => (
          <>
            <div
              className="contact hover3"
              onClick={() => {
                onchat(friend);
              }}
            >
              <div className="contact_img">
                <img src={friend?.picture} alt="" />
              </div>
              {onlineUsers.some((user) => user.userId === friend._id) && (
                <div className="state_active_user" />
              )}

              <span>
                {friend?.first_name} {friend?.last_name}
              </span>
            </div>
          </>
        ))}
    </>
  );
}
