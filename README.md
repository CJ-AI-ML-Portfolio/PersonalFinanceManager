# PersonalFinanceManager

![Main Screenshot](link-to-screenshot.png) *(optional)*

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Testing](#testing)
7. [Contributing](#contributing)
8. [License](#license)
9. [Contact](#contact)

## Introduction
**PersonalFinanceManager** is a comprehensive web application designed to help users manage their personal finances efficiently. Featuring an interactive dashboard, expense tracker, budget planning, AI-driven budget recommendations, and detailed financial reports, this application aims to simplify financial management.

## Features
- **Dashboard**: View an overview of your financial status.
- **Expense Tracker**: Add, edit, and delete expenses easily.
- **Budget Planning**: Create and monitor your budgets.
- **Budget Recommendations**: Get AI-driven budget recommendations based on your spending patterns.
- **Financial Reports**: Generate detailed reports based on categories and time periods.
- **Expense Categorization**: AI-based categorization of expenses based on description.
- **User Authentication**: Secure user registration and login.
- **Responsive Design**: Fully responsive UI for all devices.

## Tech Stack
- **Frontend**: React.js, Redux, Material-UI
- **Backend**: Django, GraphQL, PostgreSQL
- **Machine Learning**: scikit-learn, pandas, joblib
- **Deployment**: Docker, AWS ECS, AWS RDS

## Installation
### Prerequisites
- Node.js
- Python 3.x
- PostgreSQL
- Docker

### Backend Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/CJ-AI-ML-Portfolio/PersonalFinanceManager.git
    cd PersonalFinanceManager/backend
    ```

2. Create a virtual environment and install dependencies:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    pip install -r requirements.txt
    ```

3. Set up the PostgreSQL database and update `settings.py` with your database information.

4. Prepare training data for ML models (optional but recommended):
    ```bash
    cd ml_models
    python train_model.py
    ```

5. Run migrations and start the server:
    ```bash
    python manage.py migrate
    python manage.py runserver
    ```

### Frontend Setup
1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```

2. Install the dependencies and start the development server:
    ```bash
    npm install
    npm start
    ```

## Usage
1. Open your browser and navigate to `http://localhost:3000` to view the frontend.
2. Access the backend at `http://localhost:8000`.

### API Endpoints
- **Categorize Expense**: `/api/categorize_expense/?amount=<amount>&description=<description>`
- **Budget Recommendations**: `/api/recommend_budget/?user_id=<user_id>`

## Testing
### Running Backend Tests
Navigate to the project's root directory and use:
```bash
python manage.py test expenses
```

### Running Frontend Tests
Navigate to the `frontend` directory and use:
```bash
npm test
```

## Contributing
Contributions are welcome! Please fork this repository and submit a pull request.

## License
Distributed under the MIT License. See `LICENSE` for more information.

## Contact
CJ   
Project Link: https://github.com/CJ-AI-ML-Portfolio/PersonalFinanceManager