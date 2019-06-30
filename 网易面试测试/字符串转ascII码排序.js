const str = 'hello world';
const array = str.split('').map(letter => {
    return letter.charCodeAt();
}).sort(function()
{ return arguments[1] - arguments[0]})