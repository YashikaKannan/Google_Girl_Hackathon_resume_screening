document.addEventListener('DOMContentLoaded', function() {
    // Data for job seekers and employers lists
    const jobSeekersData = [
        'Get instant feedback on your resume',
        'Improve your chances of landing interviews',
        'Track your application progress',
        'Receive personalized optimization tips'
    ];

    const employersData = [
        'Screen resumes efficiently with AI',
        'Find the best-matched candidates',
        'Reduce hiring time and costs',
        'Make data-driven hiring decisions'
    ];

    // Function to create list items with check icon
    function createListItem(text) {
        return `
            <li class="list-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-green-500">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                </svg>
                <span class="text-gray-700">${text}</span>
            </li>
        `;
    }

    // Populate job seekers list
    const jobSeekersList = document.getElementById('jobSeekersList');
    jobSeekersData.forEach(item => {
        jobSeekersList.innerHTML += createListItem(item);
    });

    // Populate employers list
    const employersList = document.getElementById('employersList');
    employersData.forEach(item => {
        employersList.innerHTML += createListItem(item);
    });

    // Add click event listener to the "Get Started" button
    const getStartedBtn = document.querySelector('button');
    getStartedBtn.addEventListener('click', () => {
        // Add your click handler here
        console.log('Get Started clicked');
    });
});