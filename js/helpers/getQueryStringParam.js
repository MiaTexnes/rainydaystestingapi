export function getQueryStringParam(param) {
  const queryString = document.location.search;
  const urlParams = new URLSearchParams(queryString);
  const value = param.get(param);
  return value;
}
