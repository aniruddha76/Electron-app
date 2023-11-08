const video = document.getElementById("camera");
const captureButton = document.getElementById("capture");
const imageTag = document.getElementById("image");

captureButton.addEventListener("click", () => {
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    canvas.getContext('2d')
        .drawImage(video, 0, 0, canvas.width, canvas.height);

    const dataURL = canvas.toDataURL();
    window.electronAPI.sendImage(dataURL);
    new Notification("Image Captured", {body: "image is succesfully captured from live video"})
});

navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
    video.srcObject = stream;
    video.style.width = '400px';
    video.style.height = '300px';
});