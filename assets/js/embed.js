var i, frames;
frames = document.getElementsByTagName("iframe");
for (i = 0; i < frames.length; ++i) {
    if (frames[i].getAttribute("src").includes('youtu')) {
        frames[i].closest('.kg-embed-card').classList.add('kg-embed-youtube-card');
    }
}