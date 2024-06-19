import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function main(Name:string,Email:string){
  try {
    const user = await prisma.user.create({
        data:{
         name:Name,
         email:Email
        },
     });
     console.log(user)
     await prisma.$disconnect()
    
  } catch (error) {
    console.log(error),
    await prisma.$disconnect()
  }
}

main("Vishwa","rakesh@gmail.com")