const express = require("express");
const router = express.Router();
const { methods } = require("../controllers/rpc");

router.post("/rpc", async (req, res) => {
    const { jsonrpc, method, params, id } = req.body;

    if (jsonrpc !== "2.0" || typeof method !== "string") {
        return res.json({
            jsonrpc: "2.0",
            error: { code: -32600, message: "Invalid Request" },
            id: id ?? null,
        });
    }

    const fn = methods[method];
    if (!fn) {
        return res.json({
            jsonrpc: "2.0",
            error: { code: -32601, message: `Method not found: ${method}` },
            id,
        });
    }

    try {
        const result = await fn(params ?? {});
        res.json({ jsonrpc: "2.0", result, id });
    } catch (err) {
        res.json({
            jsonrpc: "2.0",
            error: err.code ? err : { code: -32000, message: String(err.message || err) },
            id,
        });
    }
});

module.exports = router;