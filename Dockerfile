FROM tiangolo/uwsgi-nginx:python2.7

COPY . /app

RUN pip install -r /app/requirements.txt


# By default, allow unlimited file sizes, modify it to limit the file sizes
# To have a maximum of 1 MB (Nginx's default) change the line to:
# ENV NGINX_MAX_UPLOAD 1m
ENV NGINX_MAX_UPLOAD 0

# By default, Nginx listens on port 80.
# To modify this, change LISTEN_PORT environment variable.
# (in a Dockerfile or with an option for `docker run`)
ENV LISTEN_PORT 80

# make app nginx conf customizeable by food, deprecated later because server_name useless
# COPY ./docker-deploy/custom.conf /etc/nginx/conf.d/

COPY ./docker-deploy/uwsgi.ini /uwsgi.ini
# Which uWSGI .ini file should be used, to make it customizable
ENV UWSGI_INI /uwsgi.ini

ENV UWSGI_CHEAPER 0

ENV UWSGI_PROCESSES 1

# URL under which static (not modified by Python) files will be requested
# They will be served by Nginx directly, without being handled by uWSGI
ENV STATIC_URL /static
# Absolute path in where the static files wil be
ENV STATIC_PATH /app/static

# If STATIC_INDEX is 1, serve / with /static/index.html directly (or the static URL configured)
# ENV STATIC_INDEX 1
ENV STATIC_INDEX 0

#set timezone
ENV TZ=Asia/Hong_Kong

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
# Add demo app
WORKDIR /app

# Make /app/* available to be imported by Python globally to better support several use cases like Alembic migrations.
ENV PYTHONPATH=/app

#COPY supervisord.conf
COPY ./docker-deploy/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Copy start.sh script that will check for a /app/prestart.sh script and run it before starting the app
COPY ./docker-deploy/start.sh /start.sh
RUN chmod +x /start.sh

# Copy the entrypoint that will generate Nginx additional configs
COPY ./docker-deploy/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]

# Run the start script, it will check for an /app/prestart.sh script (e.g. for migrations)
# And then will start Supervisor, which in turn will start Nginx and uWSGI
CMD ["/start.sh"]

