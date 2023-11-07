import app from "./app";

app.listen(process.env.URL, () => console.log(`Listening on ${process.env.URL}`));