# 🧮 LinAlViz – Linear Algebra Visualization Playground

**LinAlViz** is a web-based visualization tool that helps users understand 2D linear transformations through animated vector and grid manipulation. It is designed using a **Python FastAPI backend** and a **React + Plotly.js frontend**, ideal for educational, mathematical, and interactive use cases.

---

## Features

- Input a custom 2×2 matrix
- Visualize the transformation of standard basis vectors and custom vectors
- Animated transitions from original to transformed vectors
- Background grid deformation (optional)
- Built with modern web technologies (FastAPI + Plotly)

---

## Tech Stack

| Layer      | Technology         |
|------------|--------------------|
| Backend    | Python + FastAPI + NumPy |
| Frontend   | React + Plotly.js  |
| Styling    | Inline CSS         |
| Deployment | GitHub (optional: Netlify + Render) |

---

## Getting Started

1. Clone the repository

bash
git clone https://github.com/zx1998120/LinAlViz.git
cd LinAlViz

2. backend
cd backend
python3 -m venv venv
source venv/bin/activate
pip install fastapi uvicorn numpy
uvicorn main:app --reload

3. frontend
cd ../frontend
npm install
npm run dev

---

## Screenshot

<img width="1216" height="735" alt="Screenshot 2025-07-23 at 18 39 52" src="https://github.com/user-attachments/assets/d31c8192-a8fd-4c0c-96b9-909acc9a7f99" />

---

## Example

Input:
[2,0]
[0,1]
- Click “Apply Transformation”
- Observe how the red vectors animate and transform
- Try other matrices like shear, scale, or rotation

---

##  License

This project is based on the MIT License
