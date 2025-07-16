from http.server import SimpleHTTPRequestHandler, HTTPServer
import os

class CORSRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Cache-Control', 'no-cache')  # Отключение кэширования
        SimpleHTTPRequestHandler.end_headers(self)

if __name__ == '__main__':
    os.chdir('../hls')  # корневая папка с HLS файлами
    server_address = ('', 8000)
    httpd = HTTPServer(server_address, CORSRequestHandler)
    print("Serving HLS on port 8000 with CORS...")
    httpd.serve_forever()