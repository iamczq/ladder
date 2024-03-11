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
## Setup Client
### Android
1. Install shadowsocks client.
2. Install [shadowsocks gost plugin](https://github.com/segfault-bilibili/ShadowsocksGostPlugin)
   Configuration: -L ss://none@#SS_LOCAL_HOST:#SS_LOCAL_PORT -F https://user:password@ip:port?dns=8.8.8.8
### iPhone/iPad
1. Install shadowrocket.
### Windows
1. Use Clash for a global proxy. Below is for web browser only.
2. Download [Gost](https://github.com/ginuerzh/gost)
3. Setup a local shadowsocks server: gost -L ss://aes-128-gcm:local_password@:local_port -F https://user:password@remote_ip:remote_port
4. Use a shdowsocks client to connect the local server.
### Mac
