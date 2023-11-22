const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const postData = {
    title: "Il mio primo post",
    slug: "il-mio-primo-post",
    content: "Lorem ipsum dolor sit.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK7j1QaIjh0ton62kneBqMBoALoHNpjmRFOFFtzoiqLA&s",
    published: true
};

const createPost = async (postData) => {
    try {
         const result = await prisma.post.create({
            data: postData
        });

        console.log("Post creato con successo");
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};


async function createPost2(postData)  {
    try {
         const result = await prisma.post.create({
            data: postData
        });

        console.log("Post creato con successo");
        console.log(result); // posso usare return
    }
    catch (error) {
        console.error(error);
    }
};

async function findUniquePost(slugToFind) {
    try {
        const result = await prisma.post.findUnique({
            where: {
                slug: slugToFind
            }
       });

       console.log("Post trovato con successo");
       console.log(result); 
    }
   catch (error) {
        console.error(error);
   }
}

async function findAllPosts(){
    try {
        const result = await prisma.post.findMany();
        console.log("Post trovati con successo");
        console.log(result); 
    } 
    catch (error) {
       console.error(error);
    }
}

async function updatePost(postSlug, newContent){
    try {
        const result = await prisma.post.update({
            where: {
                slug: postSlug
            },
            data: {
                content: newContent
            }
        });
        console.log("Post modificato con successo");
        console.log(result); 
    } catch (error) {
       console.error(error);
    }
}

async function deletePost(slugToFind) {
    try {
        const result = await prisma.post.delete({
            where: {
                slug: slugToFind
            }
       });

       console.log("Post cancellato con successo");
       console.log(result); 
    }
   catch (error) {
        console.error(error);
   }
}

async function filterPosts(inputKey, inputValue) {
    try {
        const where = {};
        where[inputKey] = inputValue;
        const result = await prisma.post.findMany({
            where
        })

        if (result.length === 0){ //guard
            throw new Error(`Non ci sono post che alla chiave ${inputKey} hanno come valore ${inputValue}`)
            
        } 

        console.log(`Post trovati che alla chiave ${inputKey} hanno come valore ${inputValue}`);
        console.log(result); 
        
        
    } catch (error) {
        console.error(error);
    }
}

async function filterIfPostsContentContain(inputValue) {
    try {
        
        const result = await prisma.post.findMany({
            where: {
                content: {
                    contains: inputValue
                }
            }
        })

        if (result.length === 0){ //guard
            throw new Error(`Non ci sono post che alla chiave content hanno come valore ${inputValue}`)
            
        } 

        console.log(`Post trovati che alla chiave content hanno come valore ${inputValue}`);
        console.log(result); 
        
    } catch (error) {
        console.error(error);
    }
}

//createPost2(postData)

//filterPosts("slug", "il-mio-primo-post");

filterIfPostsContentContain("Lorem")



