# Celebrity Manager

Welcome to the **Celebrity Manager** project! This application allows you to view and edit details of celebrities while hiding their public presence. You will be able to manage a list of celebrities using a user-friendly interface, with features including searching, viewing, editing, and deleting celebrity details.

## Features

1. **User Interface**:
   - The page is designed with a search bar and an accordion list of celebrities.
   - The accordion expands the selected item and collapses others, toggling between open and closed states with `+` and `-` icons.

2. **Search Functionality**:
   - A search bar allows you to search the list by celebrity name.

3. **Accordion Behavior**:
   - Clicking an accordion item will expand it and collapse others.
   - Clicking the same accordion again will collapse it.
   - The `+` and `-` icons indicate whether an accordion is open or closed.

4. **Data Handling**:
   - Fetch and display user data from a JSON file (editing of JSON file is not permitted).
   - Calculate age based on the provided date of birth.
   - Gender is managed via a dropdown menu with options (Male, Female, Transgender, Rather not say, Other).
   - Country is a text field.
   - Description is a text area.

5. **Editing and Deleting**:
   - **Edit Mode**:
     - Edit details directly in the accordion.
     - Editing is only allowed for adult users.
     - Input validation:
       - No text allowed in the age field.
       - No numbers allowed in the nationality field.
       - All fields must be filled.
     - Save button is enabled only when changes are detected.
     - Cancel button reverts changes to the last known state.
     - Accordion cannot be opened while in edit mode.
   - **Delete Mode**:
     - Confirmation alert before deletion.
     - User is deleted upon confirmation or left unchanged otherwise.

6. **TypeScript** (optional but recommended):
   - TypeScript can be used for better code quality and type safety.

## Project Setup

### Step 1: Clone Project and Install Required Packages

1. Install Node.js version **v18.17.0** from the official Node.js website:
   - Visit: [https://nodejs.org](https://nodejs.org)

2. Clone the repository and navigate to the project directory:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

### Step 2: Implement Features

1. **Search Bar**:
   - Create a search bar component to filter the celebrity list.

2. **Accordion Component**:
   - Build an accordion component to display celebrity details.
   - Implement the expand/collapse functionality with `+` and `-` icons.

3. **Data Fetching**:
   - Fetch the JSON file containing celebrity data.
   - Calculate age based on the date of birth.

4. **Edit Mode**:
   - Create forms for editing celebrity details.
   - Implement validation rules and manage save/cancel functionality.

5. **Delete Mode**:
   - Implement delete functionality with a confirmation prompt.

### Step 3: Run the Application

Start the application with:
```bash
npm start
```

## Code Overview

- **CSS Styling**: The provided CSS includes styling for the search bar, accordion, and form elements with shadow effects for enhanced visuals.
- **React Components**: Components for the search bar, accordion, and editing functionality are implemented according to the requirements.

## Screenshots

### HomePage
![image](https://github.com/user-attachments/assets/1d2ce3d6-5081-40df-ae43-a7a6da529737)

### EditView
![image](https://github.com/user-attachments/assets/60f06276-2cd8-4339-ab5f-c7cb210f767f)

### Detailed View
![image](https://github.com/user-attachments/assets/29905d46-8720-4268-8913-2506af4e3e13)

### Deleted View
![image](https://github.com/user-attachments/assets/3cfe8153-e736-4238-913a-ef6a62c3f954)

## Notes

- Ensure the application adheres to the provided design and functionality requirements.
- Test thoroughly to confirm that all features work as expected, especially the validation and edit/delete modes.

Happy coding!
