import { BsPlusCircleFill } from "react-icons/bs";

export default function Button(props) {
  return (
    <div>
      <button
        style={{ backgroundColor: "transparent" }}
        id="appendingButton"
        type="submit"
        onClick={props.onClick}
      >
        <BsPlusCircleFill />
      </button>
    </div>
  );
}
