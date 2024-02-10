// useFormProgress.ts
import { useEffect, useState } from "react";

interface FormProgressProps {
    currentStepIndex: number;
    totalSteps: number;
}

const useFormProgress = ({
    currentStepIndex,
    totalSteps,
}: FormProgressProps) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const calculatedProgress = (currentStepIndex / (totalSteps - 1)) * 100;
        setProgress(calculatedProgress);
    }, [currentStepIndex, totalSteps]);

    return progress;
};

export default useFormProgress;
