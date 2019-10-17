


jQuery(document).ready( ()=>{
  jQuery("#searchBlock").on('keyup',(e) =>{
    var searchMovies=jQuery('#search').val();
    e.preventDefault();
    GetMovies(searchMovies);

})
});

function GetMovies(searchMovies){
    var arr=[];
    window.fetch(`http://www.omdbapi.com/?s=${searchMovies}&apikey=34696847`)
    .then(data => {
        data.json().then(res =>{
             //create array for response objects
             var suggestions = [];
             //process response
           const movies = res.Search;
           for(let m of movies)
           {
               suggestions.push(m.Title);
           }
           
           $( "#search" ).autocomplete({
            source: suggestions
          });
           var output = '';
           for(let movie of movies){
               output += `
                <div class="card" >
                    <img class="card-img-top" height="300" src="${movie.Poster}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                                         
                    </div>
                </div>
               `
               document.getElementById('movieInfo').innerHTML = output;
           }
        }).catch(err => console.log(err))
    }).catch(err => console.log(err))
}