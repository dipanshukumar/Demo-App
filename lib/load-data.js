export async function loadData() {

    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json()
    return data
}