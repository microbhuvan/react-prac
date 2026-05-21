async function Products({params}: {params: Promise<{id: string}>}){
    
    const { id } = await params;
    return (
        <h1>this is page {id}</h1>
    )
}

export default Products;