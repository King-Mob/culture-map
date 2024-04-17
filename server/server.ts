import express from "express";

export const startServer = () => {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static("dist-web"));

    app.get("/", (req, res) => {
        res.send("hi there");
    })

    app.listen(8383);
}