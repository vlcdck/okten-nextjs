export const getData = async <T, >(endpoint: string): Promise<T> => {
    return await fetch(`https://jsonplaceholder.typicode.com${endpoint}`)
        .then(res => res.json())
}

export const getDataById = async <T, >(endpoint: string, id: string): Promise<T> => {
    return await fetch(`https://jsonplaceholder.typicode.com${endpoint}/${id}`)
        .then(res => res.json())
}