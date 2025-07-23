import Plot from 'react-plotly.js';

export default function VectorPlot({ original, transformed }) {
  const traceOriginal = {
    x: original.map(v => 0).concat(original.map(v => v[0])),
    y: original.map(v => 0).concat(original.map(v => v[1])),
    type: 'scatter',
    mode: 'lines+markers',
    name: 'Original',
    line: { color: 'blue' }
  };

  const traceTransformed = {
    x: transformed.map(v => 0).concat(transformed.map(v => v[0])),
    y: transformed.map(v => 0).concat(transformed.map(v => v[1])),
    type: 'scatter',
    mode: 'lines+markers',
    name: 'Transformed',
    line: { color: 'red' }
  };

  return (
    <Plot
      data={[traceOriginal, traceTransformed]}
      layout={{
        title: 'Vector Transformation',
        xaxis: { range: [-5, 5] },
        yaxis: { range: [-5, 5] },
        showlegend: true
      }}
      style={{ width: '600px', height: '500px' }}
    />
  );
}