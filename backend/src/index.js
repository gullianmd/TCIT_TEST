const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get('/posts', async (req, res) => {
  const posts = await prisma.post.findMany();
  res.json(posts);
});

app.post('/posts', async (req, res) => {
  const { nombre, descripcion } = req.body;
  const newPost = await prisma.post.create({
    data: { nombre, descripcion },
  });
  res.status(201).json(newPost);
});

app.delete('/posts/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.post.delete({ where: { id: Number(id) } });
    res.status(200).send();
  } catch (error) {
    res.status(404).json({ error: 'Post no encontrado' });
  }
});

const PORT = process.env.PORT || 3250;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
