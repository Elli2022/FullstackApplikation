"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//src/app/component/entities/make-output-object.ts
function makeOutputObj() {
    return Object.freeze({ outputObj });
    function outputObj({ params }) {
        const { username, email, created, modified } = params;
        return Object.freeze({
            username: () => username,
            email: () => email,
            created: () => new Date(created),
            modified: () => new Date(modified),
        });
    }
}
exports.default = makeOutputObj;
