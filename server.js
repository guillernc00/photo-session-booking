const express = require('express');
const connectDB = require('./config/database');

const app = express();
connectDB();

//init middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 8520;

app.get('/', (req, res) => res.send('API Running'));

//define routes
app.use('/admin/sessions', require('./routes/admin/sessions'));
// app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/profile', require('./routes/api/profile'));
// app.use('/api/posts', require('./routes/api/posts'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
