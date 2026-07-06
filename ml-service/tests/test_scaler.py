from data_loader import load_dataset
from preprocessing import (
    remove_duplicates,
    split_features_target,
    encode_target,
    split_dataset,
    scale_features,
)

df = load_dataset()

df = remove_duplicates(df)

X, y = split_features_target(df)

y_encoded, encoder = encode_target(y)

X_train, X_test, y_train, y_test = split_dataset(X, y_encoded)

X_train_scaled, X_test_scaled, scaler = scale_features(
    X_train,
    X_test,
)

print("Before Scaling:")
print(X_train.head())

print("\nAfter Scaling:")
print(X_train_scaled[:5])