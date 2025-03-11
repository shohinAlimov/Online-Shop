import Intro from "../ui/Intro";

function TodayTop() {
  return (
    <>
      <section className="today-top">
        <div className="container">

          <Intro
            name={"Today's"}
            title={"Flash Sales"}
            showCountDown={true}
            showArrows={true}
          />

        </div>
      </section>
    </>
  )
}

export default TodayTop;