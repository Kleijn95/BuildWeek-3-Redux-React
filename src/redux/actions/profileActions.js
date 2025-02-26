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
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/67bc4959e703370015316dac/experiences",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNDk1OWU3MDMzNzAwMTUzMTZkYWMiLCJpYXQiOjE3NDAzOTI3OTMsImV4cCI6MTc0MTYwMjM5M30._fl65S3JCzslkdBZlG2ONYBHywufbwWQ_Q2R2N1WXCY",
          },
        }
      );

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
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/67bc4959e703370015316dac/experiences",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNDk1OWU3MDMzNzAwMTUzMTZkYWMiLCJpYXQiOjE3NDAzOTI3OTMsImV4cCI6MTc0MTYwMjM5M30._fl65S3JCzslkdBZlG2ONYBHywufbwWQ_Q2R2N1WXCY",
          },
          body: JSON.stringify(experience),
        }
      );

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
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/67bc4959e703370015316dac/experiences/" + expId,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNDk1OWU3MDMzNzAwMTUzMTZkYWMiLCJpYXQiOjE3NDAzOTI3OTMsImV4cCI6MTc0MTYwMjM5M30._fl65S3JCzslkdBZlG2ONYBHywufbwWQ_Q2R2N1WXCY",
          },
          body: JSON.stringify(experience),
        }
      );

      if (!response.ok) throw new Error("Errore nel recupero del profilo");
      const data = await response.json();
      dispatch({ type: "PUT_EXPERIENCE", payload: data });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
};

export const putProfile = (profile) => {
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

      if (!response.ok) throw new Error("Failed to update profile");

      const updatedProfile = await response.json();
      dispatch({ type: "PUT_PROFILE", payload: updatedProfile });
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };
};
