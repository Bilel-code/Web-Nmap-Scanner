# web-nmap-scanner
This project is a web-based application for performing Nmap network scans.

## Features

- Perform Nmap scans for various IP addresses or ranges.
- Scan all ports or specify port ranges.
- Multiple scan options (e.g., Aggressive scan, OS detection, etc.).
- Ability to choose between different scan types (TCP SYN, UDP, ACK, etc.).
- View scan results in real-time.

## Setup Instructions

### Prerequisites

- **Docker** must be installed on your machine to run this application

### Steps to pull and run the container

1. **Pull the Docker image from Docker Hub**:
   ```bash
   docker pull miloudibilel/web-nmap-scanner:latest

2. **Run the container**:
docker run -d -p 5001:5001 miloudibilel/web-nmap-scanner