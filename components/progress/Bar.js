
export const Bar = ({animationDuration, progress}) => {
    return (
        <div className="fixed top-0 left-0 z-50 bg-current h-1 w-full rounded-md shadow-[0_0_20px_2px_rgba(0,0,0,0.7)] dark:shadow-[0_0_20px_2px_rgba(255,255,255,0.7)]" style={{
            marginLeft: `${(-1 + progress) * 100}%`, 
            transition: `margin-left ${animationDuration}ms linear`,
            }}
        ></div>
    )
}