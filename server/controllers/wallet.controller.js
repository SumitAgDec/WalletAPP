const Wallet = require('../models/wallet.model');

// Add amount to wallet
const addAmount = async (req, res) => {
    const { userId, amount } = req.body;

    if (!userId || !amount || amount <= 0) {
        return res.status(400).json({ message: "Please provide a valid userId and amount greater than 0." });
    }

    try {
        // Find wallet by userId
        let wallet = await Wallet.findOne({ userId });

        if (!wallet) {
            // Create a new wallet if it doesn't exist
            wallet = new Wallet({ userId, amount });
            await wallet.save();
            return res.status(201).json({ message: "Wallet created and amount added", wallet });
        }

        // Add amount to the existing wallet
        wallet.amount += amount;
        await wallet.save();
        return res.status(200).json({ message: "Amount added successfully", wallet });
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
};

// Deduct amount from wallet
const deductAmount = async (req, res) => {
    const { userId, amount } = req.body;

    if (!userId || !amount || amount <= 0) {
        return res.status(400).json({ message: "Please provide a valid userId and amount greater than 0." });
    }

    try {
        // Find wallet by userId
        const wallet = await Wallet.findOne({ userId });

        if (!wallet) {
            return res.status(404).json({ message: "Wallet not found" });
        }

        if (wallet.amount < amount) {
            return res.status(400).json({ message: "Insufficient funds" });
        }

        // Deduct amount from wallet
        wallet.amount -= amount;
        await wallet.save();
        return res.status(200).json({ message: "Amount deducted successfully", wallet });
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
};

module.exports = { addAmount, deductAmount };
