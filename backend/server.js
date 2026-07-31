const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check endpoint (essential for Kubernetes / AWS Load Balancers!)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', message: 'Backend is healthy!' });
});

// Financial metrics sample API
app.get('/api/finance', (req, res) => {
  res.json({
    safeToSpend: 28500,
    runwayMonths: 3.5,
    lifescore: 82,
    savingsRate: '15%',
    debtLoad: '12%'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});