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
    },
    {
        id: "5a93cbde88ac9a0a3ccbedd4",
        title: "aaaaaaaaaaaaa",
        author: "aaaaaaaaaaaa",
        url: "aaaaaaaaaaaaaaaaaaaaaa",
        likes: 3,
        user: {
            _id: "5a92c1c8cff8f73918781f3c",
            username: "rasd",
            name: "Superuser"
        }
    },
    {
        id: "5a93cd9688ac9a0a3ccbedd6",
        title: "asd",
        author: "asd",
        url: "sssssssssss",
        likes: 9,
        user: {
            _id: "5a92c1c8cff8f73918781f3c",
            username: "rasd",
            name: "Superuser"
        }
    },
    {
        id: "5a945fca75bb3b077c129d0c",
        title: "a",
        author: "asss",
        url: "",
        likes: 2,
        user: {
            _id: "5a92c1c8cff8f73918781f3c",
            username: "rasd",
            name: "Superuser"
        }
    },
    {
        id: "5a9795c2bb19251594aa2080",
        title: "mock title",
        author: "john hemminway",
        url: "www.tererererere.com",
        likes: 8,
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