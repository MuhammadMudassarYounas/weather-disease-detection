from sklearn.ensemble import RandomForestClassifier
import joblib


def train_model(X_train, y_train):

    model = RandomForestClassifier(
        n_estimators=300,
        random_state=42,
        max_depth=None,
        min_samples_split=2,
        min_samples_leaf=1
    )

    model.fit(X_train, y_train)

    return model


def save_model(model, model_path):
    joblib.dump(model, model_path)