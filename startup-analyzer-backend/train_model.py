# train_model.py
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import joblib

# Load Dataset
df = pd.read_csv('data/startup_dataset.csv')

# Features and Target Variable
X = df[['revenue', 'expenses', 'churn_rate', 'user_growth_rate', 'funding_received', 'profit_margin', 'customer_satisfaction_score']]
y = df['success']

# Split Data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train Model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Evaluate Model
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"Model Accuracy: {accuracy * 100:.2f}%")

# Save Model
joblib.dump(model, 'models/startup_success_model.pkl')
print("Model saved successfully!")
