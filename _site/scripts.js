function showContent(celestial) {
    const allContents = document.querySelectorAll('.celestial-content');
    allContents.forEach(content => content.classList.remove('active'));

    const selectedContent = document.getElementById(`${celestial}-content`);
    selectedContent.classList.add('active');
}
