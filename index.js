const express = require('express');
const app= express();
const PORT=8080;

const coinRouter= require("./routes/coin");

const userRouter= require("./routes/users")

app.get("/", (req, res) => {
  res.send("Darek Aljuri Funcionando :)");
});

app.use("/coin",coinRouter);

app.use("/users",userRouter);

app.listen(PORT, () => {
    console.log(`Servidor esta vivito y corriendo en ${PORT}`);
  });