1 
const numbers = [1, -1, 2, 3];
function sum(numbers){
    var sum = 0;
    for (var i = 0; i < numbers.length; i++)
    sum += numbers[i]
    return sum;    
}
console.log(sum(numbers));

4.1
let movies = [
    {title: 'a', year: 2019, rating: 4.7},
    {title: 'b', year: 2018, rating: 4.4},
    {title: 'c', year: 2019, rating: 4.3},
    {title: 'd', year: 2019, rating: 3.9},
]
let bestMovies = movies.filter(function(movies) {
     return (movies.year == 2019 && movies.rating > 4)
 });
console.log(bestMovies);

4.2
movies.sort((a, b) => (b.rating - a.rating));
console.log("descending", movies);




