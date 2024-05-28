import pandas as pd


def load_data(file_path="backend/ml_models/user_expenses.csv"):
    return pd.read_csv(file_path)


def recommend_budget(user_id):
    data = load_data()

    # Filter data for the specific user
    user_data = data[data["user_id"] == user_id]

    # Calculate average monthly spending per category
    user_data["date"] = pd.to_datetime(user_data["date"])
    user_data.set_index("date", inplace=True)
    monthly_data = (
        user_data.groupby(["category", pd.Grouper(freq="M")]).sum().reset_index()
    )

    recommendations = monthly_data.groupby("category")["amount"].mean().to_dict()
    return recommendations


if __name__ == "__main__":
    # Test the recommendation function with a sample user_id
    recommendations = recommend_budget(user_id=1)
    print(recommendations)
