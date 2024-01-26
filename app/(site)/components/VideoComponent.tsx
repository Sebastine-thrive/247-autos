export default function VideoBackground() {
  return (
    <div className="video-overlay">
      <video
        poster="/assets/images/vid1.png"
        src={require("./../../../public/assets/video/247_video_bg.mp4")}
        className="video"
        autoPlay
        muted
      />
      <h3 className="video-title uppercase hidden lg:block">
        {" "}
        <span> 24//7 </span> <span>Autos </span>{" "}
      </h3>
    </div>
  );
}
