(function () {

    function hello1() {
        console.log('hello');
    }
    hello1();
    function hello2() {
        console.log('hello');
    }
    hello2();
    function hello3() {
        console.log('hello');
    }
    hello3();
    hello1();
    hello2();

    // Cnahges 04.11_edition3
    let p_element = document.createElement('p');
    let div_element = document.createElement('div');    
    p_element.textContent = 'changes04.11_1';
    div_element.textContent = 'changes04.11_2';
    document.querySelector('.main').append(p_element, div_element);
})();