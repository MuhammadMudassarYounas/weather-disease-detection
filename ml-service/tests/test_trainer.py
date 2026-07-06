from data_loader import load_dataset
from preprocessing import (
    remove_duplicates,
    split_features_target,
    encode_target,
    split_dataset,
)

from trainer import train_model

# Load data
df = load_dataset()

# Preprocess
df = remove_duplicates(df)

X, y = split_features_target(df)

y_encoded, encoder = encode_target(y)

X_train, X_test, y_train, y_test = split_dataset(
    X,
    y_encoded
)

# Train model
model = train_model(X_train, y_train)

print(model)