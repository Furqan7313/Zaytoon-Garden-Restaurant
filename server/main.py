# pyrefly: ignore [missing-import]
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Allows all origins, adjust in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Reservation(BaseModel):
    name: str
    email: str
    date: str
    time: str
    guests: int

@app.get("/")
def read_root():
    return {"message": "Welcome to Zaytoon Garden API"}

@app.post("/api/reservations")
def create_reservation(reservation: Reservation):
    # For prototype, just print and return success
    print(f"Reservation received: {reservation}")
    return {"status": "success", "message": "Reservation created", "data": reservation.model_dump()}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
