import { useState } from 'react'

import fs from 'fs'
import path from 'path'



function productPage(props) {
    const [productData, setProductData] = useState()

    async function productPriceHandler(id) {
        const response = await fetch(`/api/${id}`)

        const responseData = await response.json()
        setProductData(responseData.product)
    }

    return (
        <div>
            {productData && <p>{productData.price}</p>}
            <ul>
                {props.productItems.map((item) => (
                    <li key={item.id}>{item.title}
                        {item.title}
                        <button onClick={productPriceHandler.bind(null, item.id)}>Show Price</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export function getStaticProps() {
    const filePath = path.join(process.cwd(), 'data', 'products.json')

    const fileData = fs.readFileSync(filePath)

    const data = JSON.parse(fileData)

    return {
        props: {
            productItems: data
        }
    }
}


export default productPage
