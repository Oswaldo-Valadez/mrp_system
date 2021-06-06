$(() => {
  const path =
    "/" +
    window.location.pathname.split("/")[1] +
    "/" +
    (window.location.pathname.split("/")[2] || "");

  $(`a[href="${path}"][class="nav-link"]`).addClass("active");
});
