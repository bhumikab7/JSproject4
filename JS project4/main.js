
let form = document.getElementById('form');

let arr = JSON.parse(localStorage.getItem('Data')) || [];

window.addEventListener('load', () => print(arr));

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let TaskName = document.getElementById('task').value;
    let PriorityName = document.getElementById('priority').value;

    let data = {
        TaskName,
        PriorityName
    };

    arr.push(data);

    document.getElementById('task').value = "";
    document.getElementById('priority').value = "";

    print(arr);

    localStorage.setItem('Data', JSON.stringify(arr));
});


function print(arr) {

    document.querySelector('tbody').innerText = "";

    arr.forEach((el, index) => {

        let row = document.createElement('tr');

        let col1 = document.createElement('td');
        col1.innerText = el.TaskName;

        let col2 = document.createElement('td');
        col2.innerText = el.PriorityName;

        let col3 = document.createElement('td');

        col3.innerText = "DELETE";

        col3.addEventListener('click', () => {

            console.log(index);

            arr.splice(index, 1);

            print(arr);

            localStorage.setItem('Data', JSON.stringify(arr));
        });

        row.append(col1, col2, col3);

        document.querySelector('tbody').append(row);
    });
}

