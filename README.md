## E-Commerce-MERN ✨

E-Commerce-MERN is a full-stack e-commerce application built using the MERN stack (MongoDB, Express, React, Node.js) with an integrated admin panel. It offers a comprehensive solution for managing products, orders, users, and payments, while providing a user-friendly interface for customers to browse, search, and purchase products.

🛍️ **Features**
- **Product Management:**
  - Admins can effortlessly add, edit, and delete products, along with their categories and detailed information.
- **Order Management:**
  - Admins have full control over order processing, including viewing and updating order statuses.
- **User Management:**
  - Admins can view and manage registered users, ensuring a secure and reliable user base.
- **Payment Integration:**
  - Secure and seamless payment processing through PayPal, providing a convenient checkout experience for customers.

**User Functionalities**
- **Smart Search:**
  - Users can easily find desired products by searching and filtering based on price, category, and brand.
- **Cart & Favorites:**
  - Users can manage their shopping carts and save favorite items for later purchases.
- **Profile Management:**
  - Users have the flexibility to update their profiles and manage their account information.

🚀 **Technologies**
- **Frontend:**
  - React - A powerful JavaScript library for building dynamic and interactive user interfaces.
- **Backend:**
  - Node.js & Express - A robust combination for building scalable and efficient server-side applications.
- **Database:**
  - MongoDB - A NoSQL database providing flexibility and scalability for data storage.
- **Payment:**
  - PayPal API - A secure and widely used payment gateway for online transactions.

🛠️ **Installation and Setup**
- **Clone the repository:**
Use code with caution.
- **Install dependencies:**
- Navigate to both the client and server directories and run: npm install
- Use code with caution.
- **Environment Variables:**
- Create a `.env` file in the root directory and add the following variables with your specific values:
PORT=5000
MONGO_URI='mongodb://127.0.0.1:27017/yourDatabaseName'
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key
PAYPAL_CLIENT_ID=your_paypal_client_id
Use code with caution.
- *Note*: For initial setup, you need to create two user accounts. Then, access your MongoDB database and set the `isAdmin` field to `true` for the user you want to grant admin privileges.
- **Run the application:**
npm run build

Use code with caution.
- This command will build both the frontend and backend for production.

📑 **Additional Notes**
- The admin panel provides a comprehensive interface for managing the e-commerce platform efficiently.
- User authentication and authorization ensure secure access to user accounts and functionalities.
- The application is designed to be responsive and mobile-friendly, providing a seamless experience across devices.

🤝 **Contributing**
Contributions are welcome! Please feel free to fork the repository, make changes, and submit pull requests.

Feel free to customize and enhance this README according to your project's specific details! 🚀🌟
