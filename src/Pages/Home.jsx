import Spinner from "./Spinner.jsx";
import { useEffect, useState } from "react";
import Product from "../Component/Product.jsx";

function Home() {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState();
    const [posts, setPosts] = useState([]);

    async function fetchProductData() {
        setLoading(true);
        try {
            const result = await fetch(API_URL);
            const data = await result.json();
            setPosts(data);
        }
        catch (error) {
            console.log(error);
            setPosts([]);
        }
        finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchProductData();
}, [])
   
    return (
        <div>
            {
                loading ? (
                    <Spinner />
                ) :
                    posts.length > 0 ?
                        (
                            <div className="grid  xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] ">
                                {
                                    posts.map((post) => (
                                        <Product key={post.id} post={post} />
                                    ))
                                }
                            </div>
                        ) :
                        <p> no card found</p>
            }
        </div>
    )
}
export default Home;