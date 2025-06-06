"use client"

export const LikeButton = () => {
    console.log("Client Like Button")
    const handleClick = () => {
        console.log("Like Button Clicked")
    }

    return (
        <div className="flex justify-center">
            <button
                className="px-5 py-3 text-gray-700 hover:text-gray-800 cursor-pointer"
                onClick={handleClick}>Like Button
            </button>
        </div>

    )
}