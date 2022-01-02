// Write your solution here!

const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(){
cats.push('Ralph');
}

function destructivelyPrependCat(){
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat()
{
    cats.shift()
}


function appendCat(){
    const gato = [...cats, 'Broom'];
    return gato;
}

function prependCat(){

    const gato = ['Arnold', ...cats]
    return gato;
}

function removeLastCat(){
    const gato = cats.slice(0,2)
    return gato;

}

function removeFirstCat(){
    const gato = cats.slice(1)
    return gato;
}
