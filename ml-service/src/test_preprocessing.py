from data_loader import load_dataset

from preprocessing import (
    remove_duplicates,
    split_features_target,
    encode_target,
    split_dataset,
)

# Load dataset
df = load_dataset()

# Remove duplicates
df = remove_duplicates(df)

# Split features and target
X, y = split_features_target(df)

# Encode target
y_encoded, encoder = encode_target(y)

# Split dataset
X_train, X_test, y_train, y_test = split_dataset(
    X,
    y_encoded
)

print("Training Features :", X_train.shape)
print("Testing Features  :", X_test.shape)

print("Training Labels   :", y_train.shape)
print("Testing Labels    :", y_test.shape)