const { url } = process.env;

export const postImageRequest = async (formData: FormData) => {
    return fetch(`${url}/api/image`, {
        method: "POST",
        body: formData,

    });
}

export const postTagTypeRequest = async (tagName: string) => {
    return fetch(`${url}/api/tagtype`, {
        method: "POST",
        body: JSON.stringify({ tagName: tagName }),
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export const deleteTagTypeRequest = async (tagTypes: any[]) => {
    return fetch(`${url}/api/tagtype`, {
        method: "DELETE",
        body: JSON.stringify({ tagTypes }),
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export const getImageIdsRequest = async (tags: number[]) => {
    return fetch(`${url}/api/images?tags=${tags.join(",")}`)
}

export const getImageRequest = async (imageId: number) => {
    return fetch(`${url}/api/image?imageId=${imageId}`)
}

export const getTagTypesRequest = async () => {
    return fetch(`${url}/api/tagTypes`)
}

export const deleteImageRequest = async (imageId) => {
    return fetch(`${url}/api/image?imageId=${imageId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
}