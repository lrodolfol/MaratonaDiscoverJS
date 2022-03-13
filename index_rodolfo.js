
const arr = [
    {
    nome: "rodolfo"
    },
    {
        nome: "Kelly"
    },
    {
        nome: "Mizael"
    }, 
    {
        nome: "Manuela"
    }
]


for(let i = 0; i <= arr.length; i++) {
    console.log(arr);
    arr.splice(0);
}

const Modal = {
    open() {
        //ABRIR MODAL
        //ADICIONA CLASSE ACTIVE AO Modal
        const modal = document.querySelector('.modal-overlay');
        modal.classList.add('active');

    },
    close() {
        const btnCancelModal = document.querySelector('[data-btnCancel]');
        const modal = document.querySelector('.modal-overlay');
        modal.classList.remove('active');
    }
}

function insereValores(valor) {
    let entradas = document.getElementById('card-income');
    let saidas = document.getElementById('card-expense');
    let total = document.getElementById('card-total');
    valor = parseFloat(valor);

    //ENTRADAS
    if (valor > 0) {
        let valorEntrada = entradas.innerHTML;
        console.log(valorEntrada);
        if (!valorEntrada || valorEntrada === '') {
            valorEntrada = 0;
        } else {
            valorEntrada = parseFloat(valorEntrada);
        }

        entradas.innerHTML = valorEntrada + valor;

    } else {
        //SAIDAS
        let valorSaida = saidas.innerHTML;
        console.log(saidas);

        if (!valorSaida || valorSaida === '') {
            valorSaida = 0;
        } else {
            valorSaida = parseFloat(valorSaida);
        }

        saidas.innerHTML = valorSaida - valor;
    }

    let valorTotal = total.innerHTML;
    if (!valorTotal || valorTotal === '') {
        valorTotal = 0;
    }
    valorTotal = parseFloat(valorTotal);
    total.innerHTML = Number(Number(valor) + Number(valorTotal)).toLocaleString();
}

const form = document.querySelector('[data-form]');
form.addEventListener('submit', function(event) {
    event.preventDefault();
   
    //PEGA OS VALORES DIGITADOS NO MODAL 
    const descricao = document.querySelector('[data-description]').value;
    let valor = document.querySelector('[data-amount]').value;
    const data = document.querySelector('[data-date]').value;

    const tbody = document.querySelector('[data-tbody]');

    //CRIA TR
    const newTr = document.createElement('tr');

    //CRIA TD
    const newTdDesc = document.createElement('td');
    const newTdValue = document.createElement('td');
    const newTdDate = document.createElement('td');
    const newTdImg = document.createElement('td');

    // CRIA IMG
    const newImg = document.createElement('img');
    newImg.src = './assets/minus.svg';

    // ADICIONA CLASSE AOS TD 
    const classCss = valor > 0 ? "income" : "expense";
    newTdDesc.classList.add("description");
    newTdValue.classList.add(classCss);
    newTdDate.classList.add("date");

    //ADICIONA O IMG DENTRO DO TDIMG 
    newTdImg.appendChild(newImg);

    //ADICIONA VALORES AOS TD
    newTdDesc.innerHTML = descricao;
    valor = Number(valor);
    newTdValue.innerHTML = valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
    newTdDate.innerHTML = data;

    //ADICIONA TD AO TR
    newTr.appendChild(newTdDesc);
    newTr.appendChild(newTdValue);
    newTr.appendChild(newTdDate);
    newTr.appendChild(newTdImg);

    //ADICIONA TR AO TBODY
    tbody.appendChild(newTr);

    insereValores(valor);
})

/*
const btnSubmitForm = document.querySelector('[data-formSubit]');
btnSubmitForm.addEventListener('click', (event) => {
    event.preventDefault();
   
    //PEGA OS VALORES DIGITADOS NO MODAL 
    const descricao = document.querySelector('[data-description]').value;
    let valor = document.querySelector('[data-amount]').value;
    const data = document.querySelector('[data-date]').value;

    const tbody = document.querySelector('[data-tbody]');

    //CRIA TR
    const newTr = document.createElement('tr');

    //CRIA TD
    const newTdDesc = document.createElement('td');
    const newTdValue = document.createElement('td');
    const newTdDate = document.createElement('td');
    const newTdImg = document.createElement('td');

    // CRIA IMG
    const newImg = document.createElement('img');
    newImg.src = './assets/minus.svg';

    // ADICIONA CLASSE AOS TD 
    const classCss = valor > 0 ? "income" : "expense";
    newTdDesc.classList.add("description");
    newTdValue.classList.add(classCss);
    newTdDate.classList.add("date");

    //ADICIONA O IMG DENTRO DO TDIMG 
    newTdImg.appendChild(newImg);

    //ADICIONA VALORES AOS TD
    newTdDesc.innerHTML = descricao;
    valor = Number(valor);
    newTdValue.innerHTML = valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
    newTdDate.innerHTML = data;

    //ADICIONA TD AO TR
    newTr.appendChild(newTdDesc);
    newTr.appendChild(newTdValue);
    newTr.appendChild(newTdDate);
    newTr.appendChild(newTdImg);

    //ADICIONA TR AO TBODY
    tbody.appendChild(newTr);

    insereValores(valor);
})*/


