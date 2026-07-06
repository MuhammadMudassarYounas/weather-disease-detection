"""
data_loader.py

Responsible for loading datasets.
"""

from pathlib import Path
import pandas as pd


# Project root directory
BASE_DIR = Path(__file__).resolve().parent.parent

# Dataset path
DATA_PATH = BASE_DIR / "data" / "weather_disease_data.csv"


def load_dataset():
    """
    Load the weather disease dataset.

    Returns:
        pandas.DataFrame
    """

    df = pd.read_csv(DATA_PATH)

    return df