import express from "express";
const app = express();

const port = process.env.PORT || 8080;

// --- Allow Caddy to issue TLS for all domains ---
app.get("/allow", (req, res) => {
  res.sendStatus(200); // allow all domains
});

app.use(
  express.static("public", {
    index: "index.html",
    extensions: ["html"],
  }),
);

app.listen(port, () => {
  console.log("░██████╗░░█████╗░██╗░░░░░░█████╗░██╗░░██╗██╗░░░██╗");
  console.log("██╔════╝░██╔══██╗██║░░░░░██╔══██╗╚██╗██╔╝╚██╗░██╔╝");
  console.log("██║░░╚██╗██╔══██║██║░░░░░██╔══██║░██╔██╗░░░╚██╔╝░░");
  console.log("╚██████╔╝██║░░██║███████╗██║░░██║██╔╝╚██╗░░░██║░░░");
  console.log("░╚═════╝░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░");
  console.log("is listening on:");
  console.log(`http://localhost:${port}`);
});
