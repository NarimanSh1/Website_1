function toggleSection(sectionId) {
    var mainContainer = document.getElementById('mainContainer');
    var mathSection = document.getElementById('math');
    var chemistrySection = document.getElementById('chemistry');

    mainContainer.style.display = (sectionId === 'main') ? 'block' : 'none';
    mathSection.style.display = (sectionId === 'math') ? 'block' : 'none';
    chemistrySection.style.display = (sectionId === 'chemistry') ? 'block' : 'none';
}

function toggleDetails(element) {
    var details = element.getElementsByClassName('problem-details')[0];
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
}
