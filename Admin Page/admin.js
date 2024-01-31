// document.addEventListener('DOMContentLoaded', function() {
//     const contentForm = document.getElementById('contentForm');

//     contentForm.addEventListener('submit', function(event) {
//         event.preventDefault();

//         const headerContent = document.getElementById('headerContent').value;
//         const sliderContent = document.getElementById('sliderContent').value;
//         const aboutContent = document.getElementById('aboutContent').value;

//         const data = {
//             headerContent,
//             sliderContent,
//             aboutContent
//         };

//         fetch('/content', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(data)
//             })
//             .then(response => response.json())
//             .then(data => {
//                 alert(data.message);
//             });
//     });

//     // Load the saved content from the server when the page loads
//     fetch('/content')
//         .then(response => response.json())
//         .then(data => {
//             document.getElementById('headerContent').value = data.headerContent || '';
//             document.getElementById('sliderContent').value = data.sliderContent || '';
//             document.getElementById('aboutContent').value = data.aboutContent || '';
//         });
// });

document.addEventListener('DOMContentLoaded', function() {
    const contentForm = document.getElementById('contentForm');

    contentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const homeContent = document.getElementById('homeContent').value;
        const aboutContent = document.getElementById('aboutContent').value;
        const servicesContent = document.getElementById('servicesContent').value;
        const contactContent = document.getElementById('contactContent').value;

        // Save the content to local storage
        localStorage.setItem('homeContent', homeContent);
        localStorage.setItem('aboutContent', aboutContent);
        localStorage.setItem('servicesContent', servicesContent);
        localStorage.setItem('contactContent', contactContent);

        alert('Changes saved successfully');
    });

    // Load the saved content from local storage when the page loads
    document.getElementById('homeContent').value = localStorage.getItem('homeContent') || '';
    document.getElementById('aboutContent').value = localStorage.getItem('aboutContent') || '';
    document.getElementById('servicesContent').value = localStorage.getItem('servicesContent') || '';
    document.getElementById('contactContent').value = localStorage.getItem('contactContent') || '';
});