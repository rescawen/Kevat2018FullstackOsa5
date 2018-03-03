let token = null

const blogs = [
    {
        id: "5a93cba388ac9a0a3ccbedd3",
        title: "asd",
        author: "asdasdsa",
        url: "asd",
        likes: 5,
        user: {
            _id: "5a92c1c8cff8f73918781f3c",
            username: "rasd",
            name: "Superuser"
        }
    }
]

const getAll = () => {
    return Promise.resolve(blogs)
}

export default { getAll, blogs }