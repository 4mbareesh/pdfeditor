# PDF Editor :page_facing_up:

PDF Editor is a robust web application designed to streamline the way users manage PDF files. It provides a secure platform for users to upload, edit, reorder pages, and seamlessly share their documents with a community. Empower your PDF handling experience with PDF Manager today!

## Live Link :link:

 **[pdf-editor-online.pages.dev](https://pdf-editor-online.pages.dev)**

## Features :sparkles:

- **PDF Management:** Upload and access your collection of PDFs.
- **Edit Your PDFs:**  Select specific pages and edit the order to your preference.
- **Easy Downloads:** Download your PDFs effortlessly.
- **Open Source:** Code is always open source.
- **...and more!**

## Technologies Used :technologist:

PDF Editor is built using the following technologies:

### Frontend :computer:
- **Vite:** The React framework for production.
- **Tailwind CSS:** For beautiful, responsive UIs.
- **`axios`:** - For handling api's.
- **`react-pdf`, `pdfjs-dist`:** - For rendering and manipulating PDFs in the browser.
- **`react-icons`:** - To enhance the user interface with meaningful icons.
- **`react-hot-toast`:** - For beautiful toast alerts.

### Backend :gear:
- **Express.js on Node.js:** For a minimalist and flexible server.
- **MongoDB with `mongoose`:** A lightweight web application framework for the backend.
- **`pdf-lib`:** - For comprehensive PDF manipulations.
- **`morgan`:** - HTTP request logger middleware for node.js.
- **`express-fileupload`:** - Simple express middleware for uploading files.

## Getting Started :rocket:

### Prerequisites :hammer_and_wrench:

- Make sure you have Node.js installed. If not, you can download it from [nodejs.org](https://nodejs.org/).
- Rename .env.example to .env and add the corresponding values after cloning the repo.

### Running the Application :bar_chart:

1. Clone the repository:
   
   ```bash
   git clone https://github.com/4mbareesh/pdfeditor.git
   ```
   
2. Navigate to the project directory:
   
   ```bash
   cd pdfeditor
   ```
   
3. Run the Backend
   
- ```bash
  cd server
  ```
  
- ```bash
  yarn
  ```
  
- ```bash
  yarn dev
  ```
  
- Open browser and go to [http://localhost:8080](http://localhost:8080). Default port is 8080. Change the port to what you need by configuring the .env file.

4. Run the Backend

- ```bash
  cd client
  ```

- ```bash
  yarn
  ```

- ```bash
  yarn dev
  ```

- Open browser and go to [http://localhost:5173](http://localhost:5173).

## Contributing :people_holding_hands:

We welcome contributions from the community. If you have ideas for new features, find a bug, or want to improve the documentation, please open an issue or submit a pull request.

## License :balance_scale:

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments :handshake:

Thanks for viewing the PDF Manager documentation. If you have any questions or feedback, please feel free to reach out .
