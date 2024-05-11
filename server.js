const app = require("./app");
const { connectDatabase } = require("./config/database");
const cloudinary = require("cloudinary");
connectDatabase();

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
