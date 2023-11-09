
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

const JobDetails = () => {
    return (
        <div>
             <ProgressBar
        percent={75}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      />
        </div>
    );
};

export default JobDetails;