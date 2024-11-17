module.exports = {
  jwtSecret: process.env.JWT_SECRET || '622AF2AC23EB47E2F257C546EE4B5',
  mongoURI:
    process.env.MONGO_URI ||
    'mongodb+srv://dubeysiddhesh613:NDv0tCvNOWyM8R2a@cluster0.dtfzw.mongodb.net/e-commerce',
};
