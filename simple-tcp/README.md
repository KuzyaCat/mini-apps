`brew install netcat`
`brew install --cask wireshark`

For server: `nc -i 0.0.0.0 8080`
For client: `nc localhost 8080`
Write messages

`tshark -i lo0 -f "tcp port 8080" -w dump.pcap`
For server: `nc -i 0.0.0.0 8080`
For client: `nc localhost 8080`
