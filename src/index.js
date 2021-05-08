const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
  response.status(200).json({ message: 'Hello World!' });
})

const port = process.env.PORT || 3333;
app.listen(port, () => console.log(`🚀 Server is running in port: ${port}`));
