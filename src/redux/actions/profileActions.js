export const fetchProfile = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNDk1OWU3MDMzNzAwMTUzMTZkYWMiLCJpYXQiOjE3NDAzOTI3OTMsImV4cCI6MTc0MTYwMjM5M30._fl65S3JCzslkdBZlG2ONYBHywufbwWQ_Q2R2N1WXCY",
        },
      });

      if (!response.ok) throw new Error("Errore nel recupero del profilo");

      const data = await response.json();
      console.log(data);
      dispatch({ type: "SET_PROFILE", payload: data });
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchAside = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNDk1OWU3MDMzNzAwMTUzMTZkYWMiLCJpYXQiOjE3NDAzOTI3OTMsImV4cCI6MTc0MTYwMjM5M30._fl65S3JCzslkdBZlG2ONYBHywufbwWQ_Q2R2N1WXCY",
        },
      });

      if (!response.ok) throw new Error("Errore nel recupero del profilo");

      const data = await response.json();
      const obj = data.slice(0, 10);
      console.log(obj);
      dispatch({ type: "SET_ASIDE", payload: obj });
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchExperience = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/67bc4959e703370015316dac/experiences", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNDk1OWU3MDMzNzAwMTUzMTZkYWMiLCJpYXQiOjE3NDAzOTI3OTMsImV4cCI6MTc0MTYwMjM5M30._fl65S3JCzslkdBZlG2ONYBHywufbwWQ_Q2R2N1WXCY",
        },
      });

      if (!response.ok) throw new Error("Errore nel recupero del profilo");

      const data = await response.json();
      console.log(data);
      dispatch({ type: "SET_EXPERIENCE", payload: data });
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchUtente = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNDk1OWU3MDMzNzAwMTUzMTZkYWMiLCJpYXQiOjE3NDAzOTI3OTMsImV4cCI6MTc0MTYwMjM5M30._fl65S3JCzslkdBZlG2ONYBHywufbwWQ_Q2R2N1WXCY",
        },
      });

      if (!response.ok) throw new Error("Errore nel recupero del profilo");

      const data = await response.json();
      console.log(data);
      dispatch({ type: "SET_UTENTE", payload: data });
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchUtenteExperience = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNDk1OWU3MDMzNzAwMTUzMTZkYWMiLCJpYXQiOjE3NDAzOTI3OTMsImV4cCI6MTc0MTYwMjM5M30._fl65S3JCzslkdBZlG2ONYBHywufbwWQ_Q2R2N1WXCY",
        },
      });

      if (!response.ok) throw new Error("Errore nel recupero del profilo");

      const data = await response.json();
      console.log(data);
      dispatch({ type: "SET_UTENTE_EXPERIENCE", payload: data });
    } catch (error) {
      console.error(error);
    }
  };
};
export const postExperience = (experience) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/67bc4959e703370015316dac/experiences", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNDk1OWU3MDMzNzAwMTUzMTZkYWMiLCJpYXQiOjE3NDAzOTI3OTMsImV4cCI6MTc0MTYwMjM5M30._fl65S3JCzslkdBZlG2ONYBHywufbwWQ_Q2R2N1WXCY",
        },
        body: JSON.stringify(experience),
      });

      if (!response.ok) throw new Error("Errore nel recupero del profilo");
      const data = await response.json();
      dispatch({ type: "ADD_EXPERIENCE", payload: data });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
};

export const putExperience = (expId, experience) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/67bc4959e703370015316dac/experiences/" + expId, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNDk1OWU3MDMzNzAwMTUzMTZkYWMiLCJpYXQiOjE3NDAzOTI3OTMsImV4cCI6MTc0MTYwMjM5M30._fl65S3JCzslkdBZlG2ONYBHywufbwWQ_Q2R2N1WXCY",
        },
        body: JSON.stringify(experience),
      });

      if (!response.ok) throw new Error("Errore nel recupero del profilo");
      const data = await response.json();
      dispatch({ type: "PUT_EXPERIENCE", payload: data });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
};

export const putProfile = (profile, profilePicture) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNDk1OWU3MDMzNzAwMTUzMTZkYWMiLCJpYXQiOjE3NDAzOTI3OTMsImV4cCI6MTc0MTYwMjM5M30._fl65S3JCzslkdBZlG2ONYBHywufbwWQ_Q2R2N1WXCY`,
        },
        body: JSON.stringify(profile),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      const updatedProfile = await response.json();
      const profileId = updatedProfile._id;
      dispatch({ type: "PUT_PROFILE", payload: updatedProfile });

      if (profilePicture instanceof File) {
        const formData = new FormData();
        formData.append("profile", profilePicture);

        const uploadProfilePicture = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${profileId}/picture`, {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNDk1OWU3MDMzNzAwMTUzMTZkYWMiLCJpYXQiOjE3NDAzOTI3OTMsImV4cCI6MTc0MTYwMjM5M30._fl65S3JCzslkdBZlG2ONYBHywufbwWQ_Q2R2N1WXCY",
          },
          body: formData,
        });
        if (!uploadProfilePicture.ok) {
          throw new Error("Errore durante il caricamento dell'immagine");
        }
      }

      dispatch({ type: "PUT_PROFILE", payload: updatedProfile });
      dispatch(fetchProfile("https://striveschool-api.herokuapp.com/api/profile/me"));
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };
};

export const fetchPost = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("//striveschool-api.herokuapp.com/api/posts/", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNDk1OWU3MDMzNzAwMTUzMTZkYWMiLCJpYXQiOjE3NDAzOTI3OTMsImV4cCI6MTc0MTYwMjM5M30._fl65S3JCzslkdBZlG2ONYBHywufbwWQ_Q2R2N1WXCY",
        },
      });

      if (!response.ok) throw new Error("Errore nel recupero del profilo");

      const data = await response.json();
      const reversedData = [...data].reverse(); // Inverte l'array senza modificare l'originale
      const obj = reversedData.slice(0, 10); // Prendi i primi 10 post invertiti
      console.log(obj);

      dispatch({ type: "SET_POST", payload: obj });
    } catch (error) {
      console.error(error);
    }
  };
};

export const uploadPhoto = (expId, formData) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/67bc4959e703370015316dac/experiences/${expId}/picture`, {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNDk1OWU3MDMzNzAwMTUzMTZkYWMiLCJpYXQiOjE3NDAzOTI3OTMsImV4cCI6MTc0MTYwMjM5M30._fl65S3JCzslkdBZlG2ONYBHywufbwWQ_Q2R2N1WXCY",
        },
        body: formData,
      });

      if (!response.ok) throw new Error("Errore nel recupero del profilo");
      const data = await response.json();
      dispatch({ type: "PUT_EXPERIENCE", payload: data });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteExperience = (expId) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/67bc4959e703370015316dac/experiences/" + expId, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNDk1OWU3MDMzNzAwMTUzMTZkYWMiLCJpYXQiOjE3NDAzOTI3OTMsImV4cCI6MTc0MTYwMjM5M30._fl65S3JCzslkdBZlG2ONYBHywufbwWQ_Q2R2N1WXCY",
        },
      });
      if (!response.ok) throw new Error("Errore nel recupero del profilo");
      dispatch({ type: "DELETE_EXPERIENCE", payload: expId });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createPost = (newPost, imageFile) => {
  return async (dispatch) => {
    try {
      // Primo step: Creazione del post con solo testo
      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNDk1OWU3MDMzNzAwMTUzMTZkYWMiLCJpYXQiOjE3NDAzOTI3OTMsImV4cCI6MTc0MTYwMjM5M30._fl65S3JCzslkdBZlG2ONYBHywufbwWQ_Q2R2N1WXCY",
        },
        body: JSON.stringify({ text: newPost.text }),
      });

      if (!response.ok) {
        throw new Error("Errore durante la creazione del post");
      }

      const result = await response.json();
      const postId = result._id; // Recupera l'ID del post creato

      // Se c'è un'immagine, caricala
      if (imageFile) {
        const formData = new FormData();
        formData.append("post", imageFile);

        const uploadResponse = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNDk1OWU3MDMzNzAwMTUzMTZkYWMiLCJpYXQiOjE3NDAzOTI3OTMsImV4cCI6MTc0MTYwMjM5M30._fl65S3JCzslkdBZlG2ONYBHywufbwWQ_Q2R2N1WXCY",
          },
          body: formData,
        });

        if (!uploadResponse.ok) {
          throw new Error("Errore durante il caricamento dell'immagine");
        }
      }

      dispatch({
        type: "CREATE_POST",
        payload: result,
      });

      dispatch(fetchPost("https://striveschool-api.herokuapp.com/api/posts/"));
    } catch (error) {
      console.error("Errore nella creazione del post:", error);
    }
  };
};

// actions/profileActions.js

export const updatePost = (postId, updatedText, imageFile) => {
  return async (dispatch) => {
    try {
      // Primo step: Aggiornamento del testo del post
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNDk1OWU3MDMzNzAwMTUzMTZkYWMiLCJpYXQiOjE3NDAzOTI3OTMsImV4cCI6MTc0MTYwMjM5M30._fl65S3JCzslkdBZlG2ONYBHywufbwWQ_Q2R2N1WXCY",
        },
        body: JSON.stringify({ text: updatedText }),
      });

      if (!response.ok) {
        throw new Error("Errore durante l'aggiornamento del post");
      }

      const result = await response.json();

      // Se c'è un'immagine, aggiorna anche l'immagine
      if (imageFile) {
        const formData = new FormData();
        formData.append("post", imageFile);

        const uploadResponse = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNDk1OWU3MDMzNzAwMTUzMTZkYWMiLCJpYXQiOjE3NDAzOTI3OTMsImV4cCI6MTc0MTYwMjM5M30._fl65S3JCzslkdBZlG2ONYBHywufbwWQ_Q2R2N1WXCY",
          },
          body: formData,
        });

        if (!uploadResponse.ok) {
          throw new Error("Errore durante il caricamento dell'immagine");
        }
      }

      dispatch({
        type: "UPDATE_POST",
        payload: result,
      });

      dispatch(fetchPost("https://striveschool-api.herokuapp.com/api/posts/"));
    } catch (error) {
      console.error("Errore nell'aggiornamento del post:", error);
    }
  };
};

export const deletePost = (postId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNDk1OWU3MDMzNzAwMTUzMTZkYWMiLCJpYXQiOjE3NDAzOTI3OTMsImV4cCI6MTc0MTYwMjM5M30._fl65S3JCzslkdBZlG2ONYBHywufbwWQ_Q2R2N1WXCY",
        },
      });

      if (!response.ok) {
        throw new Error("Errore durante la cancellazione del post");
      }

      dispatch({
        type: "DELETE_POST",
        payload: postId,
      });

      dispatch(fetchPost("https://striveschool-api.herokuapp.com/api/posts/"));
    } catch (error) {
      console.error("Errore nella cancellazione del post:", error);
    }
  };
};

export const fetchJobs = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_JOBS_LOADING" });
    try {
      const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs");
      if (!response.ok) {
        throw new Error("Errore nel recupero degli annunci di lavoro");
      }

      const data = await response.json();
      console.log(data); // Verifica la struttura dei dati

      // Assumiamo che la risposta abbia una proprietà "data" che contiene gli annunci di lavoro
      if (data && Array.isArray(data.data)) {
        dispatch({
          type: "FETCH_JOBS_SUCCESS",
          payload: data.data, // Estrai l'array di lavori
        });
      } else {
        dispatch({
          type: "FETCH_JOBS_ERROR",
          payload: "I dati ricevuti non sono nel formato corretto",
        });
      }
    } catch (error) {
      console.error("Errore nella chiamata API per gli annunci di lavoro:", error);
      dispatch({
        type: "FETCH_JOBS_ERROR",
        payload: error.message,
      });
    }
  };
};

export const fetchCompany = (companyName) => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_COMPANY_LOADING" });

    try {
      const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?company=${companyName}`);
      if (!response.ok) {
        throw new Error("Errore nel recupero degli annunci di lavoro");
      }

      const data = await response.json();
      if (data && Array.isArray(data.data)) {
        dispatch({
          type: "FETCH_COMPANY_SUCCESS",
          payload: data.data,
        });
      } else {
        dispatch({
          type: "FETCH_COMPANY_ERROR",
          payload: "I dati ricevuti non sono nel formato corretto",
        });
      }
    } catch (error) {
      console.error("Errore nella chiamata API per gli annunci di lavoro:", error);
      dispatch({
        type: "FETCH_COMPANY_ERROR",
        payload: error.message,
      });
    }
  };
};

export const searchJobs = (query) => async (dispatch) => {
  try {
    dispatch({ type: "SEARCH_JOBS_REQUEST" });

    const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}`);

    if (!response.ok) {
      throw new Error("Errore nella ricerca dei lavori");
    }

    const data = await response.json();
    console.log("Data received from API:", data); // Controlla la risposta dell'API

    if (data && Array.isArray(data.data)) {
      dispatch({
        type: "SEARCH_JOBS_SUCCESS",
        payload: data.data,
      });
    }
  } catch (error) {
    dispatch({
      type: "SEARCH_JOBS_FAIL",
      payload: error.message,
    });
  }
};
