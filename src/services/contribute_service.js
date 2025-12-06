/**
 * @license Apache-2.0
 * @copyright 2024 codewithsadee
 */
 
'use strict';


// zamboth_savings.js

const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();

router.post("/zamboth_savings", (req, res) => {
    const { amount } = req.body;

    if (!amount || isNaN(amount)) {
        return res.status(400).send("Invalid amount provided.");
    }

    const dataPath = path.join(__dirname, "..", "data", "zamboth_savings.json");

    fs.readFile(dataPath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return res.status(500).send("Failed to read savings data.");
        }

        let savingsData;
        try {
            savingsData = JSON.parse(data);
        } catch (parseErr) {
            console.error("Error parsing JSON:", parseErr);
            return res.status(500).send("Corrupted savings data.");
        }

        const currentAmount = parseFloat(savingsData.amount) || 0;
        const newAmount = currentAmount + parseFloat(amount);
        savingsData.amount = newAmount.toFixed(2);

        fs.writeFile(dataPath, JSON.stringify(savingsData, null, 2), (writeErr) => {
            if (writeErr) {
                console.error("Error writing file:", writeErr);
                return res.status(500).send("Failed to update savings data.");
            }

            res.redirect("/zamboth/success");
        });
    });
});

module.exports = router;