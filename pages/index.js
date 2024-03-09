import { useRef } from "react"

function HomePage() {
    const titleInputRef = useRef()
    const priceInputRef = useRef()

    function addProductHandler(event) {
        event.preventDefault()

        const title = titleInputRef.current.value
        const price = priceInputRef.current.value

        console.log(title)
        console.log(price)
    }

    return (
        <div>
            <h2>Home Page</h2>
            <form onSubmit={addProductHandler}>
                <div>
                    <input type="text" placeholder="Title" ref={titleInputRef} />
                </div>
                <div>
                    <input type="text" placeholder="Price" ref={priceInputRef} />
                </div>
                <button >Add</button>
            </form>
        </div>
    )
}


export default HomePage


