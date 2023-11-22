const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


prisma.post.create({
    data: {
        title: "il mio primo post",
        slug: "il-mio-primo-post",
        content: "lorem ipsum dolor sit.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK7j1QaIjh0ton62kneBqMBoALoHNpjmRFOFFtzoiqLA&s",
        published: true
    }
}).then((newPost) => {
    console.log("post creato con successo")
    console.log(newPost)
}).catch((error) => {
    console.error(error)
})

prisma.post.findUnique({
    where: {
        slug: "il-mio-primo-post"
    }
}).then((post) => {
    console.log("post trovato con successo")
    console.log(post)
}).catch((error) => {
    console.error(error)
});

prisma.post.findMany().then((posts) => {
    console.log("post trovati con successo")
    console.log(posts)
}).catch((error) => {
    console.error(error)
});;

prisma.post.update({
    where: {
        slug: "il-mio-primo-post"
    },
    data: {
        content: "ti ho modificato"
    }
}).then((post) => {
    console.log("post modificato con successo")
    console.log(post)
}).catch((error) => {
    console.error(error)
});

prisma.post.delete({
    where: {
        slug: "il-mio-primo-post"
    },
}).then((post) => {
    console.log("post cancellato con successo")
    console.log(post)
}).catch((error) => {
    console.error(error)
});

prisma.post.findMany({
    where: {
        published: true
    }
}).then((posts) => {
    console.log("post pubblicati trovati con successo")
    console.log(posts)
}).catch((error) => {
    console.error(error)
});

prisma.post.findMany({
    where: {
        content: {
            contains: "modi"
        }
    }
}).then((posts) => {
    console.log("post che contengono modi trovati con successo")
    console.log(posts)
}).catch((error) => {
    console.error(error)
});


