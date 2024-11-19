import PropTypes from "prop-types";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

const FakeScrollBar = ({ visible }) => {
  return (
    visible && (
      <div
        className="absolute top-0 right-0 z-10 h-full w-[17px] bg-gray-200 flex flex-col items-center"
        aria-hidden="true"
      >
        <AiFillCaretUp className="text-gray-400 mt-1 text-[10px]" />
        <AiFillCaretDown className="text-gray-400 mt-auto mb-1 text-[10px]" />
      </div>
    )
  );
};

FakeScrollBar.propTypes = {
  visible: PropTypes.bool.isRequired, // `visible` doit être un booléen requis
};

export default FakeScrollBar;