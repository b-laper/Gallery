import picturesApi from "../../apis/picturesApi";

export const submitSearchInput = (term) => async (dispatch) => {
  const response = await picturesApi.get(`search/photos/`, {
    params: { query: term },
  });
  dispatch({ type: "FETCH_PICS", payload: response.data });
};

export const onInputChange = (value) => (dispatch) => {
  dispatch({ type: "INPUT_FIELD", payload: value });
};
