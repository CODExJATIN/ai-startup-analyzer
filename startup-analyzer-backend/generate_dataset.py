# generate_dataset.py
import pandas as pd
import numpy as np

# Generate a synthetic startup dataset
np.random.seed(42)
num_samples = 1000

data = {
    "startup_name": [f"Startup_{i}" for i in range(num_samples)],
    "industry": np.random.choice(["Tech", "Health", "Finance", "Retail"], num_samples),
    "revenue": np.random.randint(5000, 100000, num_samples),
    "expenses": np.random.randint(2000, 80000, num_samples),
    "churn_rate": np.random.uniform(0.01, 0.5, num_samples),
    "user_growth_rate": np.random.uniform(0.05, 0.5, num_samples),
    "funding_received": np.random.randint(10000, 500000, num_samples),
    "profit_margin": np.random.uniform(-0.2, 0.5, num_samples),
    "customer_satisfaction_score": np.random.uniform(1, 10, num_samples),
    "success": np.random.choice([0, 1], num_samples)
}

df = pd.DataFrame(data)
df.to_csv('data/startup_dataset.csv', index=False)
print("Dataset generated successfully!")
