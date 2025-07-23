from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from transform import apply_matrix_transform

app = FastAPI() 


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_methods=["*"],
    allow_headers=["*"],
)


class TransformRequest(BaseModel):
    matrix: List[List[float]]
    vectors: List[List[float]]


@app.post("/transform")
def transform(req: TransformRequest):
    transformed = apply_matrix_transform(req.matrix, req.vectors)
    return {"transformed": transformed}