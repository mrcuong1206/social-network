export default function NotifiBirth({ dataByBirthday }) {
  return (
    <>
      {dataByBirthday.upcomingBirthdays?.length > 0 && (
        <div className="contact hover3">
          <i className="birth_icon"></i>
          <p>
            {dataByBirthday.upcomingBirthdays[0]?.first_name}{" "}
            {dataByBirthday.upcomingBirthdays[0]?.last_name}{" "}
            {dataByBirthday.upcomingBirthdays[0]?.daysToBirthdayMessage}.
          </p>
        </div>
      )}
    </>
  );
}
