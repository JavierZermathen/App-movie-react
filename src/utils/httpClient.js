const API = "https://api.themoviedb.org/3";
const lenguaje =  "&language=ES";

export function get(path) {
  return fetch(API + path  , {

    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTg5NjFmMDA0NjJhMDZkNmVjZWMzMDhjODJhYTMxMyIsInN1YiI6IjYwZGJiOWFhZWY5ZDcyMDA3ZTA0Y2Q5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rCi6kTFR0QCJF9rKFoQ8uKeveHsZ0bBwe7p6z42b5Tk",
      "Content-Type": "application/json;charset=utf-8",
      
    
    },

    

  }).then((result) => result.json());
}
