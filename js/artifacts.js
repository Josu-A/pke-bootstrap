let retrieveArtifactInfo = (url, sp) => {
    const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
    fetch(corsAnywhereUrl + url, {
        headers: {
            'Origin': window.location.origin
        }
    })
    .then(response => response.text())
    .then(data => {
        let tempDiv = document.createElement('div');
        tempDiv.innerHTML = data;

        let firstArtifactTitle = tempDiv.querySelector('.artifact-title');
        let artifactTitleValue = firstArtifactTitle.textContent.trim();
        let siCardBody = document.getElementById(sp + '-card-body');
        siCardBody.innerHTML = '<em>' + artifactTitleValue + '</em>';
        siCardBody.href = 'https://addi.ehu.es' + firstArtifactTitle.firstElementChild.getAttribute('href');

        let firstArtifactInfo = tempDiv.querySelector('.artifact-info');
        let artifactInfoValue = firstArtifactInfo.textContent.trim();
        let siCardSecondary = document.getElementById(sp + '-card-secondary');
        siCardSecondary.textContent = artifactInfoValue;
    })
    .catch(error => console.error('Error fetching data:', error));
};

retrieveArtifactInfo('https://addi.ehu.es/handle/10810/13140/recent-submissions', 'si');
retrieveArtifactInfo('https://addi.ehu.es/handle/10810/13138/recent-submissions', 'k');
retrieveArtifactInfo('https://addi.ehu.es/handle/10810/13139/recent-submissions', 'ki');
