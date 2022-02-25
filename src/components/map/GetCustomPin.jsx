import CustomSchoolMarker from "./CustomSchoolMarker";
import CustomOSPMarker from "./CustomOSPMarker";
import CustomKindergartenMarker from "./CustomKindergartenMarker";
import CustomMarker from "./CustomMaker";

const GetCustomPin = (props) => {
  switch (props.type) {
    case 1:
      return <CustomKindergartenMarker {...props} />;
    case 2:
      return <CustomSchoolMarker {...props} />;
    case 3:
      return <CustomOSPMarker {...props} />;
    default:
      return <CustomMarker {...props} />;
  }
};

export default GetCustomPin;
