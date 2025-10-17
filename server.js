import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import songRoutes from "./routes/songRoutes.js";
import cloudinary from "./config/cloudinary.js";
import uploadRoutes from "./routes/uploadRoutes.js";

dotenv.config();
var app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/songs", songRoutes);
app.use("/api/upload", uploadRoutes);

var PORT=process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))
console.log("cloudinary configured successfully");

