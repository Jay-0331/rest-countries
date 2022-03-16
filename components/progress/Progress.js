import { useNProgress } from "@tanem/react-nprogress";
import { Bar } from "./Bar.js";
import { Container } from "./Container.js";

export const Progress = ({ isAnimating }) => {
    const { animationDuration, isFinished, progress } = useNProgress({
        isAnimating,
    });

    return (
        <Container animationDuration={animationDuration} isFinished={isFinished}>
            <Bar animationDuration={animationDuration} progress={progress} />
        </Container>
    )
};