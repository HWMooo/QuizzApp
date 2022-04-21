FROM node:12.18.4

EXPOSE 10371

RUN mkdir /code
WORKDIR /code
COPY . ./
RUN ["chmod","+x", "/code/entrypoint.sh"]
ENTRYPOINT ["/code/entrypoint.sh"]

CMD if [ "$NODE_ENV" = "development" ]; \
  then npm start;  \
  fi
