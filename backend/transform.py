import numpy as np

def apply_matrix_transform(matrix, vectors):
    A = np.array(matrix)  
    V = np.array(vectors)  
    transformed = (A @ V.T).T
    return transformed.tolist()