# 🐾 Animal-SOS

Animal-SOS is a web-based application built to report and track injured, abandoned, or endangered animals in real-time. Users can report animal sightings with details like condition, type, and location, enabling quick rescue actions by volunteers and animal welfare authorities.

---

## 🚀 Tech Stack

### Frontend:
- **HTML5**
- **CSS3**
- **JavaScript**

### Backend:
- **Spring Boot (Java)**

### Database:
- **MySQL**

---

## 📌 Features

- 🐶 **Report Animal in Need**: Users can submit information like animal type, count, condition (injured, unconscious, etc.).
- 🌍 **Live Location Tracking**: Report location captured with live coordinates.
- 📦 **Data Storage**: All reports are stored securely in a MySQL database.
- 🔐 **Admin Dashboard** (optional future feature): Manage reports and update statuses.

---

## 📁 Project Structure

```plaintext
Animal-SOS/
├── backend/
│   └── src/
│       └── main/
│           ├── java/com/animalsos/
│           ├── resources/
│           │   ├── application.properties
│           └── ...
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── README.md
└── ...
⚙️ Setup Instructions
✅ Prerequisites
Java 17+

Maven

MySQL

Any IDE (like IntelliJ IDEA, Eclipse)

Web Browser (Chrome, Firefox)

🔧 Backend Setup (Spring Boot)
Clone the repository

bash
Copy
Edit
git clone https://github.com/yourusername/Animal-SOS.git
cd Animal-SOS/backend
Configure Database
Edit src/main/resources/application.properties:

properties
Copy
Edit
spring.datasource.url=jdbc:mysql://localhost:3306/animalsos_db
spring.datasource.username=your_db_user
spring.datasource.password=your_db_password
spring.jpa.hibernate.ddl-auto=update
Run the Application

bash
Copy
Edit
mvn spring-boot:run
🌐 Frontend Setup
Open frontend/index.html in your browser.

Ensure backend is running to enable API communication.

🛠️ API Endpoints (Sample)
Method	Endpoint	Description
POST	/api/report	Submit new animal report
GET	/api/reports	Fetch all reports
GET	/api/report/{id}	Fetch report by ID



👨‍💻 Contributors
Kunal Prajapati – Full Stack Developer

📝 License
This project is open-source and available under the KIET License.

🙏 Acknowledgments
Animal Rescue NGOs and organizations for the inspiration.

Community feedback and user suggestions.

