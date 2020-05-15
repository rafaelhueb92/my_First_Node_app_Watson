require("dotenv/config");

const express = require("express");
const cors = require("cors");

const watson = require("./watson");

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());

app.post("/mensagem/", async (req, res) => {
  try {
    const { text } = req.body;

    console.log(process.env.SKILL_ID)

    const session = await watson.createSession({
      assistantId: process.env.ASSISTENT_ID,
    });

    console.log("session", session);

    const resp = await watson.message({
      assistantId: process.env.ASSISTENT_ID,
      sessionId: session.result.session_id,
      input: {
        message_type: "text",
        text,
      },
    });

    res.json(resp);
  } catch (ex) {
    console.log("err", ex);
    res.sendStatus(501);
  }
});

app.listen(PORT, () =>
  console.log(`Watson running on http://localhost:${PORT}`)
);
