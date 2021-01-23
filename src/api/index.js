export const searchSkills = async (search) => {
    const params = new URLSearchParams({q: search});
    const response = await fetch(`${process.env.REACT_APP_SEARCH_URL}?${params}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}


export const getServices = async () => {
    const response = await fetch(`${process.env.REACT_APP_SERVICES_URL}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}


export const getItemService = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_SERVICES_URL}/${id}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}