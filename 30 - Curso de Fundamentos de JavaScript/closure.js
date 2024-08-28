function outerFunction(){
    let outerVariable = 'I am from outer function'

    function innterFunction(){
        console.log(outerVariable);
    }
    return innterFunction
}

const closureExample = outerFunction()
closureExample()