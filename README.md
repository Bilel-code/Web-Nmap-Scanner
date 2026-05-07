# Web Nmap Scanner

A lightweight **web-based Nmap scanner** built with FastAPI and Docker. Enter a target IP/range, select scan options from a web interface, and get Nmap results displayed directly in your browser.

![Python](https://img.shields.io/badge/Python-3.9-3776AB?logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-Web%20App-009688?logo=fastapi&logoColor=white)
![Nmap](https://img.shields.io/badge/Nmap-Scanner-4B0082)
![Docker](https://img.shields.io/badge/Docker-Containerised-2496ED?logo=docker&logoColor=white)

---

## 📌 Overview

This tool wraps **Nmap** inside a **FastAPI** web application, giving you a clean browser-based UI to run network scans without touching the command line. It supports multiple scan types, port range selection, and all-ports scanning — all containerised with Docker for easy deployment.

---

## ⚙️ Features

- **Web UI** — browser-based form to input target IP or IP range
- **Scan type selection** — supports SYN scan (`-sS`) and other Nmap scan types
- **Port range** — specify a custom port range or scan **all ports** (`-p-`)
- **Additional scan options** — checkboxes for extra Nmap flags (e.g. OS detection, version scan)
- **Live results** — Nmap output displayed directly in the browser as formatted text
- **Dockerised** — runs fully containerised, no local Nmap install needed

---

## 📁 Project Structure

```
Web-Nmap-Scanner/
├── app.py               # FastAPI application — routes and Nmap subprocess logic
├── Dockerfile           # Docker build: Python 3.9-slim + Nmap + FastAPI
├── requirements.txt     # Python dependencies (FastAPI, uvicorn)
├── templates/
│   └── index.html       # Web UI form
└── static/              # Static assets (CSS/JS)
```

---

## 🚀 How to Run

### Option 1 — Docker (Recommended)

```bash
# Build the image
docker build -t web-nmap-scanner .

# Run the container
docker run -p 5001:5001 web-nmap-scanner
```

Then open your browser at: **http://localhost:5001**

### Option 2 — Run Locally

```bash
# Install dependencies
pip install -r requirements.txt

# Make sure Nmap is installed on your system
# Linux: sudo apt install nmap
# Mac:   brew install nmap

# Start the app
python app.py
```

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|------------|
| Backend | Python + FastAPI |
| Web Server | Uvicorn |
| Scanner | Nmap |
| Containerisation | Docker (python:3.9-slim) |
| Frontend | HTML form + Jinja2 templates |

---

## ⚠️ Disclaimer

This tool is intended for **educational and authorised testing purposes only**. Always ensure you have explicit permission before scanning any network or system. Unauthorised scanning may be illegal.
