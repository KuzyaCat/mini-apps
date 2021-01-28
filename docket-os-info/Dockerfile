FROM ubuntu:latest
LABEL maintainer="Gavruk Alexander <sanganious@gmail.com>"
COPY cmd_script.sh /cmd_script.sh
RUN chmod +x cmd_script.sh
WORKDIR /system_info
CMD ["bash", "./cmd_script.sh"]