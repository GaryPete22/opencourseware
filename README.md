# 🎓 OpenCourseware Clone

A full-stack open courseware website inspired by MIT OCW. Built using React (frontend) and Django REST API (backend).

---

## 🚀 Tech Stack

**Frontend:**
- React
- Axios
- Tailwind CSS (optional)

**Backend:**
- Django
- Django REST Framework
- SQLite (default)

---

## 🛠️ Local Setup Instructions

### Backend (Django)

```bash
cd backend
python -m venv venv
venv\Scripts\activate       # or source venv/bin/activate on Mac/Linux
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
