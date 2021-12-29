function setPlay(/*a*/) {
    var config_plays = Number(localStorage.getItem('plays'))
    if (config_plays==NaN) {
        localStorage.setItem('plays', '1')
    } else {
        config_plays = config_plays + 1
        localStorage.setItem('plays', config_plays)
    }
    /*config_game = ('game_'+a)
    config_plays = Number(localStorage.getItem(config_game))
    if (config_plays==NaN) {
        localStorage.setItem(config_game, '1')
        config_plays = 1
    } else {
        config_new = 
    }*/
}