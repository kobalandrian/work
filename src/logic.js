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

    // Cnahges 04.11_edition1
    let p_element = document.createElement('p');
    p_element.textContent = 'changes04.11_1';
    document.querySelector('.main').append(p_element);

})();