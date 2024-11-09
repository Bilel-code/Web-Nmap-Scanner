# Use a base image with Python and install Nmap
FROM python:3.9-slim

# Install Nmap
RUN apt-get update && apt-get install -y nmap

# Copy application files to the container
COPY . /app
WORKDIR /app

# Install Python dependencies
RUN pip install -r requirements.txt

# Expose the port your FastAPI app will run on
EXPOSE 5001

# Run the application using Uvicorn
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "5001"]

