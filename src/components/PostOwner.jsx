export const PostOwner = (props) => {
  return (
  <div className="vstack gap-3">
    <div className="d-flex align-items-center gap-3">
      <img
        src="/profileImages/IMG_0675.JPG"
        width="48"
        height="48"
        className="rounded-circle"
        style={{ objectFit: "cover" }}
      />
      <span className="fw-semibold fs-5 text-white">
        {props.name} {props.id}
      </span>
    </div>

    <span className="text-white">
      {props.text}
    </span>
    
    {props.like > 0 &&
    <div className="d-flex align-items-center gap-1">
      <img src="/like.svg" width={20}></img>
      <span style={{ color: "#B0B3B8" }}>
        {props.like}
      </span>
    </div>
    }
  <hr className="m-0 border" />
</div>);
};
