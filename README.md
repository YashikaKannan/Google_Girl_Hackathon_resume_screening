# Resume Screening Application

## 📌 Overview
This Resume Screening Application is designed to automate the process of filtering resumes based on predefined eligibility criteria, optimize resumes by detecting grammatical errors and unnecessary spaces, and screen resumes by matching them with job descriptions.

## 🚀 Features
- **Eligibility Check**: Verifies whether a resume meets job requirements.
- **Resume Optimization**: Detects grammatical errors and suggests improvements.
- **Resume Screening**: Matches resumes with job descriptions to filter the best candidates.
- **Frontend**: Built using Streamlit and deployed on Netlify.
- **Backend**: Developed in Python using Flask/FastAPI.

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/resume-screening.git
cd resume-screening
```

### 2️⃣ Create a Virtual Environment
```bash
# For Windows
python -m venv venv
venv\Scripts\activate

# For macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

### 3️⃣ Install Dependencies
```bash
pip install -r requirements.txt
```

### 4️⃣ Set Up Environment Variables
Create a `.env` file in the root directory and add necessary keys (example):
```
OPENAI_API_KEY=your_openai_api_key
OTHER_API_KEY=your_other_api_key
```

---

## ▶️ Running the Application

### 1️⃣ Start the Backend Server
```bash
python app.py
```
By default, the API will be available at `http://127.0.0.1:5000/`

### 2️⃣ Run the Streamlit Frontend
```bash
streamlit run frontend.py
```
This will open the frontend interface in the browser.

---

## 🔄 Connecting Frontend with Backend
Make sure the frontend is configured to interact with the backend API. Update the `frontend.py` file with the correct API URL:
```python
API_URL = "http://127.0.0.1:5000/"
```

---

## 📤 Deployment

### Backend Deployment (Render/Heroku/AWS)
1. Ensure `requirements.txt` includes necessary dependencies.
2. Use a `Procfile` for Heroku (if applicable):
   ```
   web: gunicorn app:app
   ```
3. Deploy using Git or CI/CD pipelines.

### Frontend Deployment (Netlify)
1. Push frontend files to a GitHub repository.
2. Connect the repo with Netlify and deploy.
3. Update the API URL in `frontend.py` to match the deployed backend.

---

## 📌 API Endpoints
### `POST /check_eligibility`
**Request:**
```json
{
  "resume": "resume_text_here",
  "job_description": "job_description_here"
}
```
**Response:**
```json
{
  "eligibility": true,
  "score": 85
}
```

### `POST /optimize_resume`
**Request:**
```json
{
  "resume": "resume_text_here"
}
```
**Response:**
```json
{
  "optimized_resume": "Updated resume text"
}
```

### `POST /screen_resumes`
**Request:**
```json
{
  "resumes": ["resume1_text", "resume2_text"],
  "job_description": "job_description_here"
}
```
**Response:**
```json
{
  "top_candidates": ["Candidate 1", "Candidate 2"]
}
```

---

## ❓ Troubleshooting
- **Module Not Found Error**: Ensure dependencies are installed (`pip install -r requirements.txt`).
- **Backend Not Running**: Check if `app.py` is running (`python app.py`).
- **Frontend Not Loading Data**: Verify API URL in `frontend.py`.

## 🤝 Contribution
Feel free to fork the repository, raise issues, or submit pull requests.

### ✨ Developed By
Yashika K | [LinkedIn](www.linkedin.com/in/yashika-kannan)
