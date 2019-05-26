function solve() {
    let addButton = document.getElementsByTagName('button')[0];
    let liElements = Array.from(document.querySelector('ol[type="A"]').children);
    function clearInput() {
        document.getElementsByTagName('input')[0].value='';
    }
    function getName() {
        let regNames = new RegExp("[,\\s]+");
        let names = document.getElementsByTagName('input')[0].value.split(regNames);
        names.forEach((name)=>{
            name = name.charAt(0).toUpperCase().concat(name.substr(1));
            let index = name.charCodeAt(0) - 65;

            if(liElements[index].textContent){
                liElements[index].textContent += ', '.concat(name);
            }else {
                liElements[index].textContent = name;
            }
        });

        clearInput();
    }

    addButton.addEventListener('click', getName);
}