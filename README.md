# React-Django Blog

This is a simple blog application built with React for the frontend (in the `client` folder) and Django for the backend (in the `back-end` folder).

## Prerequisites

- Node.js: Ensure Node.js is installed on your machine. You can download it from [https://nodejs.org/](https://nodejs.org/).

- Python: Make sure Python is installed. You can download it from [https://www.python.org/](https://www.python.org/).

- Git: You need Git for version control. Download it from [https://git-scm.com/](https://git-scm.com/).

## Getting Started

### Frontend (React)

1. Open a terminal and navigate to the frontend directory:

    ```bash
    cd client
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

   This will run the React app locally. Open your browser and visit [http://localhost:3000/](http://localhost:3000/) to see the app.

### Backend (Django)

1. Open another terminal window and navigate to the backend directory:

    ```bash
    cd back-end
    ```

2. Create a virtual environment (optional but recommended):

    ```bash
    python -m venv venv
    ```

3. Activate the virtual environment:

    - On Windows:

      ```bash
      venv\Scripts\activate
      ```

    - On macOS/Linux:

      ```bash
      source venv/bin/activate
      ```

4. Install Django and other dependencies:

    ```bash
    pip install -r requirements.txt
    ```

5. Apply migrations:

    ```bash
    python manage.py migrate
    ```

6. Start the Django development server:

    ```bash
    python manage.py runserver
    ```

   The backend will be running at [http://localhost:8000/](http://localhost:8000/).

## Usage

- Open your browser and go to [http://localhost:3000/](http://localhost:3000/) to interact with the React frontend.

- The Django admin panel is available at [http://localhost:8000/admin/](http://localhost:8000/admin/). You can log in with the admin credentials to manage blog posts.

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
