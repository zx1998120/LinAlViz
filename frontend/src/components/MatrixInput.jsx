export default function MatrixInput({ matrix, setMatrix, onSubmit }) {
  const handleChange = (i, j, val) => {
    const newMatrix = [...matrix];
    newMatrix[i][j] = parseFloat(val);
    setMatrix(newMatrix);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h3>Enter 2×2 Matrix</h3>
      <table>
        {[0, 1].map(i => (
          <tr key={i}>
            {[0, 1].map(j => (
              <td key={j}>
                <input
                  type="number"
                  step="0.1"
                  value={matrix[i][j]}
                  onChange={(e) => handleChange(i, j, e.target.value)}
                />
              </td>
            ))}
          </tr>
        ))}
      </table>
      <button onClick={onSubmit} style={{ marginTop: '10px' }}>Apply Transformation</button>
    </div>
  );
}