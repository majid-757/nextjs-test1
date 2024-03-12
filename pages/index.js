import { useRef, useState } from "react";

function HomePage() {
  const [productItems, setProductItem] = useState([]);

  const titleInputRef = useRef();
  const priceInputRef = useRef();

  async function addProductHandler(event) {
    event.preventDefault();

    const title = titleInputRef.current.value;
    const price = priceInputRef.current.value;

    const reqBody = { title, price };

    const response = await fetch("/api/product", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();
    console.log(responseData);
  }

  async function showProductHandler() {
    const response = await fetch("/api/product");

    const responseData = await response.json();
    setProductItem(responseData.products);
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
        <button>Add</button>
      </form>
      <div>
        <button onClick={showProductHandler}>Show Product</button>
        <ul>
          {productItems.map((item) => (
            <li key={item.title}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
