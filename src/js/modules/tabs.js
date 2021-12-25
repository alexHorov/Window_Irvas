const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    function hideTabconten() {
        content.forEach(item => {
            item.style.display = 'none';
        });
        tab.forEach(item => {
            item.classList.remove(activeClass)
        })
    };

    function showTabconten(i = 0) {
        content[i].style.display = 'block';
        tab[i].classList.add(activeClass);
    };
    hideTabconten();
    showTabconten();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target && (target.classList.contains(tabSelector.replace(/\./, "")) ||
                target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {

            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabconten();
                    showTabconten(i);

                }

            });
        }

    });
};

export default tabs;