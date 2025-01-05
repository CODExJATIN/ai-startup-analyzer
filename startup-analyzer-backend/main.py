# main.py
from fastapi import FastAPI
from pydantic import BaseModel
import joblib
from fastapi.middleware.cors import CORSMiddleware



# Load Model
model = joblib.load('models/startup_success_model.pkl')

# Initialize FastAPI
app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)


# Input Schema
class StartupInput(BaseModel):
    revenue: float
    expenses: float
    churn_rate: float
    user_growth_rate: float
    funding_received: float
    profit_margin: float
    customer_satisfaction_score: float

@app.post("/analyze")
async def analyze_startup(startup: StartupInput):
    input_data = [[
        startup.revenue,
        startup.expenses,
        startup.churn_rate,
        startup.user_growth_rate,
        startup.funding_received,
        startup.profit_margin,
        startup.customer_satisfaction_score
    ]]
    
    prediction = model.predict(input_data)[0]
    probability = model.predict_proba(input_data)[0][1] * 100
    
    return {
        "success_prediction": "Likely to Succeed" if prediction == 1 else "Likely to Fail",
        "success_probability": f"{probability:.2f}%"
    }
