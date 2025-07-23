import { useState } from 'react';
import MatrixInput from './components/MatrixInput';
import VectorPlot from './components/VectorPlot';

export default function App() {
  
  const [matrix, setMatrix] = useState([
    [1, 0],
    [0, 1]
  ]);

 
  const [original, setOriginal] = useState([
    [1, 0],
    [0, 1],
    [1, 1],
    [-1, 1]
  ]);

  const [transformed, setTransformed] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8000/transform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ matrix, vectors: original })
      });

      const json = await response.json();
      setTransformed(json.transformed);
    } catch (err) {
      console.error("Failed to fetch transformation result:", err);
      alert("Error occurred during transformation.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🧮 LinAlViz: Linear Transformation Visualizer</h1>
      <MatrixInput matrix={matrix} setMatrix={setMatrix} onSubmit={handleSubmit} />
      {transformed && <VectorPlot original={original} transformed={transformed} />}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "30px"
  },
  title: {
    textAlign: "center",
    color: "#333",
    marginBottom: "30px"
  }
};