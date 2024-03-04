"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//src/app/component/use-cases/postBlog.ts
const data_access_1 = require("../data-access");
function createPostBlog({ logger }) {
    return Object.freeze({ postBlog });
    function postBlog({ params, dbConfig }) {
        return __awaiter(this, void 0, void 0, function* () {
            logger.info("[POSTBLOG][USE-CASE] Posting a blog - START!");
            // Validera inkommande parametrar
            const validatedParams = validateBlogPost(params);
            if (!validatedParams) {
                throw new Error("Ogiltiga parametrar för blogginlägg");
            }
            // Infoga blogginlägg i databasen
            try {
                const savedPost = yield (0, data_access_1.insertBlogPost)({
                    post: validatedParams,
                    dbConfig,
                });
                logger.info(`Blogginlägg skapat med ID: ${savedPost.insertedId}`);
                return savedPost;
            }
            catch (error) {
                logger.error(`Kunde inte skapa blogginlägg: ${error.message}`);
                throw error; // Kasta vidare felet så att det kan hanteras uppströms
            }
        });
    }
    function validateBlogPost(params) {
        // Kontrollera att nödvändiga fält finns
        const { title, content, author } = params;
        if (!title || typeof title !== "string" || title.trim() === "") {
            throw new Error("Titel är obligatoriskt och måste vara en sträng");
        }
        if (!content || typeof content !== "string" || content.trim() === "") {
            throw new Error("Innehåll är obligatoriskt och måste vara en sträng");
        }
        if (!author || typeof author !== "string" || author.trim() === "") {
            throw new Error("Författare är obligatoriskt och måste vara en sträng");
        }
        // Här kan du lägga till ytterligare valideringar om nödvändigt
        return { title, content, author }; // Returnera validerade parametrar
    }
}
exports.default = createPostBlog;
