export const fetchProfile = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
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
