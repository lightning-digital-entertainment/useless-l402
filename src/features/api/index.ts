import { Request, Response, Router } from "express";
import { lsatMiddleware } from "l402ify-middleware";
import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";

dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

const apiRoutes = Router();

apiRoutes.post(
    "/",
    lsatMiddleware(21, {
        lnAddress: process.env.LIGHTNING_ADDRESS,
        rootKey: process.env.SIGNING_KEY,
        location: process.env.LOCATION,
    }),
    async (req: Request, res: Response) => {
        const message = req.body.message;
        console.log(message);

        // Calling the OpenAI API to complete the message
        const chat_completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{role: "system", content: "Reply with a useless answer to the users prompt"},{ role: "user", content: message }],
        });
        console.log(chat_completion.data.choices[0].message?.content)
        res.send(chat_completion.data.choices[0].message?.content);
    }
);

export default apiRoutes;
