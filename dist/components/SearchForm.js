import getImagesByName from ;
export const createSearchForm = () => {
    const searchForm = document.createElement('form');
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'userInputSearch';
    input.placeholder = 'Search';
    const searchButton = document.createElement('button');
    searchButton.type = 'button';
    searchButton.textContent = 'Search';
    searchButton.addEventListener('click', getImagesByName);
    searchForm.appendChild(searchInput);
    searchForm.appendChild(searchButton);
};
