let s = 'foo(bar[baz]){qux}'
let s1 = '(()';
let s11 = '()';
let s2 = '()[]{}';
let s3 = '(]';
let s4 = '{[]}';
let s5 = '([)]';
let s6 = '({[[]{}]}()())';

function isBalanced(str) {
    // пары открывающих-закрывающих скобок
    const br = "(){}[]";
    // создаем стек
    const st = [];
    // итерируем по всей строке
    for (let i = 0; i < str.length; ++i) {
        // текущий символ
        const ch = str[i];
        // ищем символ в скобках
        const ind = br.indexOf(ch);
        // если скобка найдена
        if (ind >= 0) {
            // проверяем, какая это скобка
            if (ind & 1) {
                // если закрывающая скобка, проверяем стек
                // стек пуст - плохо
                if (!st.length) return false;
                // извлекаем последнюю открытую скобку из стека
                const last_br = st.pop();
                // если она не соответствует закрывающей скобке - тоже плохо
                if (last_br != br[ind - 1]) return false;
            } else {
                // открывающую скобку просто пихаем в стек
                st.push(ch);
            }
        }
    }
    // если после обхода всей строки стек пуст - всё ок
    return !st.length;
}

console.log(s, isBalanced(s))
console.log(s1, isBalanced(s1));
console.log(s11, isBalanced(s11));
console.log(s2, isBalanced(s2));
console.log(s3, isBalanced(s3));
console.log(s4, isBalanced(s4));
console.log(s5, isBalanced(s5));
console.log(s6, isBalanced(s6));