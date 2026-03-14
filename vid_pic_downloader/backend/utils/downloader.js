const dotenv = require("dotenv");
const { exec } = require("child_process");

dotenv.config(); // using dotenv

var yt_dlp_download_path = process.env.YT_DLP_DOWNLOAD_PATH;
var gallery_dl_download_path = process.env.GALLERY_DL_DOWNLOAD_PATH;

function ytDlpDownloader(url_text) {
  const command =
    "cmd.exe /c yt-dlp " + "--path " + yt_dlp_download_path + " " + url_text;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error.message}`);
      return;
    }

    if (stderr) {
      console.error(`Error output: ${stderr}`);
      return;
    }

    console.log(`Command Output: ${stdout}`);
  });
}

function galleryDlDownloader(url_text) {
  const command =
    "cmd.exe /c gallery-dl " +
    "-D " +
    gallery_dl_download_path +
    " " +
    url_text;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error.message}`);
      return;
    }

    if (stderr) {
      console.error(`Error output: ${stderr}`);
      return;
    }

    console.log(`Command Output: ${stdout}`);
  });
}

module.exports = { ytDlpDownloader, galleryDlDownloader };
