document.addEventListener("DOMContentLoaded", () => {
  const yt_dlp_button = document.getElementById("yt-download-button");
  const gallery_dl_button = document.getElementById("gallery-dlp-button");

  const url_text_field = document.getElementById("url-text-input");

  yt_dlp_button.addEventListener("click", async () => {
    const url_text = url_text_field.value;
    try {
      const response = await fetch("api/download", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ url_text, downloader: "yt" }),
      });
      const res = await response.json();
      // console.log("yt-dlp " + JSON.stringify(res));
    } catch (err) {
      console.error("Error: ", err);
    }
  });

  gallery_dl_button.addEventListener("click", async () => {
    const url_text = url_text_field.value;
    try {
      const response = await fetch("api/download", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ url_text, downloader: "gallery" }),
      });
      const res = await response.json();
      // console.log("gallery-dl" + JSON.stringify(res));
    } catch (err) {
      console.error("Error: ", err);
    }
  });
});
