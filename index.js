document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os campos de entrada na página
    var inputs = document.querySelectorAll('input');

    // Adiciona um ouvinte de evento a cada campo de entrada
    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            // Se o campo de entrada estiver vazio
            if (this.value.trim() === '') {
                // Muda a cor da borda para vermelho
                this.style.borderColor = 'red';
            } else {
                // Caso contrário, muda a cor da borda para verde
                this.style.borderColor = 'green';
            }
        });
    });
});

// window.onload = function() {
//     var navbar = document.createElement('div');
//     navbar.className = 'navbar';
//     document.body.insertBefore(navbar, document.body.firstChild);

//     var navItems = ['Menu 1', 'Menu 2', 'Menu 3'];
//     var navContents = ['Conteúdo 1', 'Conteúdo 2', 'Conteúdo 3'];

//     for (var i = 0; i < navItems.length; i++) {
//         var navItem = document.createElement('a');
//         navItem.textContent = navItems[i];
//         navItem.href = '#';
//         navItem.className = 'nav-item';
//         navItem.addEventListener('click', (function(i) {
//             return function(event) {
//                 event.preventDefault();
//                 alert(navContents[i]);
//             };
//         })(i));
//         navbar.appendChild(navItem);
//     }
// };
// document.addEventListener('DOMContentLoaded', function() {
//     // Seleciona todos os campos de entrada na página
//     var inputs = document.querySelectorAll('input');

//     // Adiciona um ouvinte de evento a cada campo de entrada
//     inputs.forEach(function(input) {
//         input.addEventListener('input', function() {
//             // Seleciona a mensagem de erro correspondente
//             var errorMessage = this.parentNode.querySelector('.error-message');

//             // Verifica o tipo de dados inseridos
//             switch (this.getAttribute('type')) {
//                 case 'email':
//                     // Se o tipo de dados for 'email', verifica se o valor inserido é um email válido
//                     var re = /\S+@\S+\.\S+/;
//                     if (!re.test(this.value)) {
//                         errorMessage.textContent = 'Não é permitido esse tipo de dado';
//                         errorMessage.style.color = 'red';
//                     } else {
//                         errorMessage.textContent = '';
//                     }
//                     break;
//                 case 'number':
//                     // Se o tipo de dados for 'number', verifica se o valor inserido é um número válido
//                     if (isNaN(this.value)) {
//                         errorMessage.textContent = 'Não é permitido esse tipo de dado';
//                         errorMessage.style.color = 'red';
//                     } else {
//                         errorMessage.textContent = '';
//                     }
//                     break;
//                 // Adicione mais casos conforme necessário
//             }
//         });
//     });
// });

