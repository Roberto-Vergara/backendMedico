import sys
import os
import pickle
import warnings
from sklearn.exceptions import InconsistentVersionWarning

# Ignorar warnings
warnings.filterwarnings("ignore", category=UserWarning)
warnings.filterwarnings("ignore", category=FutureWarning)
warnings.filterwarnings("ignore", category=DeprecationWarning)
warnings.filterwarnings("ignore", category=InconsistentVersionWarning)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Cargar modelo y vectorizer
with open(os.path.join(BASE_DIR, "modelo_lgbm.pkl"), "rb") as f:
    best_model = pickle.load(f)

with open(os.path.join(BASE_DIR, "vectorizer_tfidf.pkl"), "rb") as f:
    vectorizer = pickle.load(f)

with open(os.path.join(BASE_DIR, "label_encoder.pkl"), "rb") as f:
    le = pickle.load(f)

# Leer argumentos
args = sys.argv[1:]

if len(args) != 3:
    print("Error: se esperaban 3 síntomas")
    sys.exit(1)

# Concatenar los síntomas en un solo string
# text_input = ' '.join(args)

# Transformar con TF-IDF


def predict_disease(symptoms_list):
    text = ' '.join(symptoms_list)
    X_new = vectorizer.transform([text])
    pred = best_model.predict(X_new)
    return le.inverse_transform(pred)[0]

# Predecir
predict_disease(args)

print(predict_disease(args))
