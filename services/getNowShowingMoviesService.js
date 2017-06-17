angular.module('bookmyshowApp').service('nowShowingMoviesListService',function(){
    var facmovies = [];
    var nowShowingMoviesLst = [
        {
            movieName: 'Saving Private Rayn',
            language:'English',
            categories:['Action'],
            cbfcRating:'UA',
            userRating:'88',
            userVotes:'6220',
            movieImage: 'images/saving-private-ryan.jpg'
        },
        {
            movieName: 'How to Train Your Dragon',
            language:'English',
            categories:['Action','Comdey', 'Adventure'],
            cbfcRating:'U',
            userRating:'90',
            userVotes:'8000',
            movieImage: 'images/train-dragon-1.jpg'
            
        },
        {
            movieName: 'Mohenjadaro',
            language:'Hindi',
            categories:['Action'],
            cbfcRating:'U',
            userRating:'90',
            userVotes:'8000',
            movieImage: 'images/md-01.jpg'
        },
        {
            movieName: 'How to Train Your Dragon',
            language:'English',
            categories:['Action','Comdey', 'Adventure'],
            cbfcRating:'U',
            userRating:'90',
            userVotes:'8000',
            movieImage: 'images/train-dragon-1.jpg'
        },
        {
            movieName: 'How to Train Your Dragon',
            language:'English',
            categories:['Action','Comdey', 'Adventure'],
            cbfcRating:'U',
            userRating:'90',
            userVotes:'8000',
            movieImage: 'images/train-dragon-2.jpg'
        }
    ];
    var facmovies = nowShowingMoviesLst;
    return facmovies;
});