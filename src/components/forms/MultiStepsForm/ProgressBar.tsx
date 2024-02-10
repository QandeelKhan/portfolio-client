// import React, { ReactElement, useCallback, useEffect } from "react";
// import { useMultistepForm } from "./useMultistepForm";
// import FormButton from "../FormButton";
// import "./progress-bar.css";

// interface ProgressBarProps {
//     stepsTitle?: string[];
//     steps: ReactElement[];
//     nextDisabled?: boolean;
// }

// const ProgressBar: React.FC<ProgressBarProps> = ({
//     stepsTitle,
//     steps,
//     nextDisabled,
// }) => {
//     const {
//         currentStepIndex,
//         progress,
//         step,
//         isFirstStep,
//         isLastStep,
//         next,
//         back,
//     } = useMultistepForm(steps);
//     useEffect(() => {
//         console.log(currentStepIndex);
//     }, [currentStepIndex]);

//     return (
//         <div className="bar-container">
//             <div className="progress-bar-container">
//                 {[...Array(steps.length)].map((_, index) => (
//                     <div
//                         key={index}
//                         className={`round-steps ${
//                             index <= currentStepIndex
//                                 ? "round-un-muted"
//                                 : "round-muted"
//                         }`}
//                     >
//                         <span style={{ paddingBottom: "15%" }}>
//                             {index + 1}
//                         </span>
//                     </div>
//                 ))}
//                 <div
//                     className="bar-fill-container"
//                     style={{ width: `${progress}%` }}
//                 ></div>
//             </div>
//             <div className="mt-4">{step}</div>
//             <div className="buttons-container">
//                 {!isFirstStep && (
//                     <FormButton
//                         variant="MultiStepsForm"
//                         type="button"
//                         onClick={back}
//                     >
//                         Back
//                     </FormButton>
//                 )}
//                 <FormButton
//                     variant="MultiStepsForm"
//                     type={isLastStep ? "submit" : "button"}
//                     onClick={next}
//                     disabled={nextDisabled || false}
//                 >
//                     {isLastStep ? "Finish" : "Next"}
//                 </FormButton>
//             </div>
//         </div>
//     );
// };

// export default ProgressBar;

// // inspiration design
// {
//     /* <div className="flex items-center justify-between w-full h-8 bg-gray-200 rounded-full">
//     <div className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center">
//         1
//     </div>
//     <div className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center">
//         2
//     </div>
//     <div className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center">
//         3
//     </div>
// </div>; */
// }
// // inspiration design

export {};
