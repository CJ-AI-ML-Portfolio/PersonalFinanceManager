import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import joblib

# Load the dataset
data = pd.read_csv('backend/ml_models/expenses.csv')

# Preprocess the data
data['category'] = data['category'].astype('category').cat.codes

# Define features (X) and labels (y)
X = data[['amount', 'user_id']]  # Features
y = data['category']  # Labels

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train a RandomForestClassifier
clf = RandomForestClassifier(n_estimators=100, random_state=42)
clf.fit(X_train, y_train)

# Evaluate the model (optional)
accuracy = clf.score(X_test, y_test)
print(f'Model accuracy: {accuracy:.2f}')

# Save the trained model
joblib.dump(clf, 'backend/ml_models/expense_classifier.pkl')
