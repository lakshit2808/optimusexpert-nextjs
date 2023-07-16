import "@/app/styles/loading.css"

const Loading = async () => {

  return (
    <section>
<div className="scene">
  <div className="shadow"></div>
  <div className="jumper">
    <div className="spinner">
      <div className="scaler">
        <div className="loader">
          <div className="cuboid">
            <div className="cuboid__side"></div>
            <div className="cuboid__side"></div>
            <div className="cuboid__side"></div>
            <div className="cuboid__side"></div>
            <div className="cuboid__side"></div>
            <div className="cuboid__side"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
  )
}

export default Loading;