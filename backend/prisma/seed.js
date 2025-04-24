const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.post.createMany({
    data: [
      { nombre: 'Primer Post', descripcion: 'Descripción del primer post' },
      { nombre: 'Segundo Post', descripcion: 'Descripción del segundo post' },
      { nombre: 'Tercer Post', descripcion: 'Descripción del tercer post' },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
