# Multi-Step Form with Validation

This project implements a multi-step form using **Next.js** (App Router), **React Hook Form**, **Zod** for validation, and **TailwindCSS** for styling. The form collects personal information, address details, and account setup information, with validation on each step.

## Features

- Multi-step form with 3 steps: 
  1. Personal Information
  2. Address Details
  3. Account Setup
- Form Validation using **Zod**
- Display error messages under each field if validation fails
- Navigation through steps using "Next" and "Previous" buttons
- Final step shows a summary of entered data
- Data is stored in the local state using **useState** (or **useReducer**)
- Console logs the submitted data
- **Optional**: Simulated API submission using **React Query** or **RTK Query**
- Dark mode support using **TailwindCSS**
- Mobile responsive design

## Tech Stack

- **Next.js** (App Router)
- **React Hook Form** for form handling
- **Zod** for form validation
- **TailwindCSS** for styling
- **React Query** or **RTK Query** (optional for API simulation)

## Installation

### Prerequisites

Ensure you have the following installed:

- **Node.js** (version >= 14)
- **npm** (or **yarn**)

### Steps to Set Up

1. Clone the repository to your local machine:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd <project-directory>
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

    Or if you're using yarn:

    ```bash
    yarn install
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

    Or if you're using yarn:

    ```bash
    yarn dev
    ```

5. Open your browser and visit `http://localhost:3000` to see the app in action.

## Usage

- **Step 1: Personal Information**  
  Fill in your full name, email, and phone number. Validation will ensure the email format is correct and the phone number is at least 10 digits.

- **Step 2: Address Details**  
  Enter your street address, city, and zip code. The zip code must contain only numbers and be at least 5 digits long.

- **Step 3: Account Setup**  
  Create a username and password. The password must be at least 6 characters, and the confirmation password must match the original password.

- **Final Step**:  
  Review the data entered in all steps, and if correct, submit the form. The data will be logged to the console.

## Bonus Features (Optional)

- **React Query/RTK Query**: Simulate an API submission of the form data.
- **Dark Mode**: The app supports dark mode styling using **TailwindCSS**.
- **Responsive Design**: The form layout is responsive and optimized for mobile users.

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/feature-name`).
3. Commit your changes (`git commit -am 'Add feature'`).
4. Push to the branch (`git push origin feature/feature-name`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License.

## Demo (Optional)

[Link to demo video (if any)](https://example.com)

## Acknowledgements

- **Next.js** - Framework for React
- **React Hook Form** - Simplifies form handling
- **Zod** - Type-safe validation
- **TailwindCSS** - Utility-first CSS framework
