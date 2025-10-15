# python/img.py
import os
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "2"  # Oculta logs INFO/WARNING de TensorFlow

import sys
import json
import base64
import io
import numpy as np
import cv2
from PIL import Image
from tensorflow.keras.models import load_model

# Ruta absoluta al modelo
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
modelo_path = os.path.join(BASE_DIR, "modelo_diagCancer.h5")
modelo = load_model(modelo_path)

# Leer JSON desde stdin
raw_input = sys.stdin.read()
if not raw_input:
    print(json.dumps({"error": "No se recibió ningún dato"}))
    sys.stdout.flush()
    sys.exit(1)

data = json.loads(raw_input)
img_bytes = base64.b64decode(data["img_buffer"])
img = Image.open(io.BytesIO(img_bytes))
pixels = np.array(img)

# Preprocesamiento
pi_gray = cv2.cvtColor(pixels, cv2.COLOR_BGR2GRAY)
pi_gray = pi_gray / 255.0
pi_resized = cv2.resize(pi_gray, (128, 128))
img_inp = np.expand_dims(pi_resized, axis=(0, -1))

meta = data["metadata"]
meta_input = np.array([[meta["sex"], meta["melanocytic"], meta["anatom_site_general"], meta["age_approx"]]], dtype=np.float32)

# Predicción
pred_prob = modelo.predict([img_inp, meta_input])[0][0]
pred_label = 1 if pred_prob > 0.5 else 0
la = "Maligno" if pred_label == 1 else "Benigno"

# Respuesta JSON
print(json.dumps({"tipo": la, "pred": float(pred_prob)}))
sys.stdout.flush()