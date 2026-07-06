from data_loader import load_dataset

from preprocessing import (
    remove_duplicates,
    split_features_target,
    encode_target,
    split_dataset,
    scale_features
)

from trainer import train_model

from evaluator import evaluate_model


# Load dataset
df = load_dataset()

# Remove duplicate rows
df = remove_duplicates(df)

# Split features and target
X, y = split_features_target(df)

# Encode target labels
y_encoded, encoder = encode_target(y)

# Split into training and testing sets
X_train, X_test, y_train, y_test = split_dataset(
    X,
    y_encoded
)

# Scale the features
X_train_scaled, X_test_scaled, scaler = scale_features(
    X_train,
    X_test
)

# Train the model
model = train_model(
    X_train_scaled,
    y_train
)

# Evaluate the model
accuracy, report, matrix = evaluate_model(
    model,
    X_test_scaled,
    y_test
)

print("\nAccuracy")
print(accuracy)

print("\nClassification Report")
print(report)

print("\nConfusion Matrix")
print(matrix)