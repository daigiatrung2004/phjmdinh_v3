FROM node:16

WORKDIR /

COPY package*.json ./

RUN npm install

COPY . .

# set variable environment
ENV PORT=5000

ENV REACT_APP_API_URL_TEST = http://localhost:8080/phjmdinh
ENV REACT_APP_BASE_IMAGE_URL_500 = http://image.tmdb.org/t/p/w500
ENV REACT_APP_API_URL_ORIGIN = https://api.themoviedb.org/3
ENV REACT_APP_API_KEY = 53ae16d555ba0f93862d360f383c196a
ENV REACT_APP_API_URL = https://api.themoviedb.org/3/movie/
ENV REACT_APP_API_URL_SEARCH = https://api.themoviedb.org/3/search/movie
ENV REACT_APP_API_TOKEN = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2FlMTZkNTU1YmEwZjkzODYyZDM2MGYzODNjMTk2YSIsInN1YiI6IjYxNDQzN2U4NTZiOWY3MDA0NTAyZDU1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.muShooLqMHR4qn1Hn1HBSiQML8BuGWpKS6AMy4LA-xQ

EXPOSE 3000

CMD ["npm", "start"]