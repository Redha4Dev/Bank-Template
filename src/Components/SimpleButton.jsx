

const SimpleButton = ({text}) => {
    return (
        <div className="font-semibold px-10 py-4 rounded-lg bg-green-500 text-black cursor-pointer w-fit">
            {text}
        </div>
    )
}

export default SimpleButton;