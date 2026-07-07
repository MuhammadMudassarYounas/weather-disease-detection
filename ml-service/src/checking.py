import pandas as pd

df = pd.read_csv("data/weather_disease_data.csv")

for col in df.columns:
    print(col)