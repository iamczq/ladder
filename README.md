# Ladder
## Installation
1. [Install docker](https://www.google.com/search?q=install+docker)
2. [Install warp-cli](https://www.google.com/search?q=install+warp-cli). Before warp-cli connect. Make sure the mode is set to proxy(warp-cli set-mode proxy). Otherwise the server won't be accessible if it's running on a vps.
3. git clone repository
4. Edit .env file. Make sure the GOST_PORT listed in .env is accessible.
5. Run ./initialize
6. docker compose up -d
7. Make sure port 433 is accessible and access [https://public_ip_address/](https://public_ip_address/). "not available." is a valid return message.
## Usage
1. [https://public_ip_address/up](https://public_ip_address/up)
2. [https://public_ip_address/down](https://public_ip_address/down)
3. [https://public_ip_address/switch](https://public_ip_address/switch)
