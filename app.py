from fastapi import FastAPI, Form
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
import subprocess

app = FastAPI()

# Mount the static directory
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/", response_class=HTMLResponse)
def home():
    with open("templates/index.html") as f:
        html_content = f.read()
    return HTMLResponse(content=html_content)

@app.post("/scan", response_class=HTMLResponse)
def scan(ip_range: str = Form(...),port_range: str = Form(None),all_ports: str = Form(None), scan_options: list[str] = Form(None), scan_type: str = Form("-sS")):
    # Start with the base Nmap command
    command = ["nmap", scan_type]
    
    # Add any additional selected scan options
    if scan_options:
        command.extend(scan_options)
    
    # Check if "All Ports" is selected; otherwise, use the specified port range
    if all_ports == "on":
        command.append("-p-")  # Scan all ports
    elif port_range:
        command.extend(["-p", port_range])

    # Add the target IP range
    command.append(ip_range)
    
    
    

    # Run Nmap with the built command
    result = subprocess.run(command, capture_output=True, text=True)

    # Display results on the webpage
    return HTMLResponse(content=f"<pre>{result.stdout}</pre>")

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5001)
