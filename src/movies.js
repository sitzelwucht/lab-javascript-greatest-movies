// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (movies) => {

    let allDirs = movies.map((el) => {
        return el.director
    })
    return allDirs
} 


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (movies) => {
    let spielbergDramas = movies.filter(el => {
        if (el.director == "Steven Spielberg" && el.genre.includes('Drama')) {
            return true;
        }
    })
    return spielbergDramas.length;
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (movies) => {
    if(movies.length == 0) {
        return 0
    }
    let sum = movies.reduce((acc, el) => {
        if('rate' in el) return acc + el.rate
        else return acc
    }, 0)

    return JSON.parse((sum / movies.length).toFixed(2))

}


// Iteration 4: Drama movies - Get the average of Drama Movies

 const dramaMoviesRate = (movies) => {
    let dramas = movies.filter(el => {
        if(el.genre.includes('Drama') && el.genre.length == 1) {
            return true
        }
    })
    if(dramas.length == 0) {
        return 0
    }
    let sum = dramas.reduce((acc, el) => {
      if('rate' in el) return acc + el.rate
      else return acc
    }, 0)

    return JSON.parse((sum / dramas.length).toFixed(2))

 }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (movies) => {
    
    let sorted = JSON.parse(JSON.stringify(movies))
    
    sorted.sort((a, b) => {
        if (a.year > b.year) {
            return 1
        } else if (a.year < b.year) { 
            return -1
        } else {

            if (a.title[0] > b.title[0]) {
                return 1
            } else if (a.title[0] < b.title[0]) {
                return -1
            } else 
            return 0
        }
    })

    return sorted;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (movies) => {
   
    let sorted = JSON.parse(JSON.stringify(movies)) 

    sorted.sort((a, b) => {
        if (a.title[0] > b.title[0])
            return 1
        else if (a.title[0] < b.title[0])
            return -1
        else
            if (a.title[1] > b.title[1])
                return 1
            else if (a.title[1] < b.title[1])
                return -1
            else 
                if (a.title[2] > b.title[2])
                    return 1
                else if (a.title[2] < b.title[2])
                    return -1
                else return 0
    })

    let twenty = sorted.filter((el, i) => {
        if (i < 20) return true
    })

    let titles = twenty.map((el) => {
      return el.title
    })
    return titles
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = (movies) => {

    let matches = []
    function getNums(str) { 
      matches = str.match(/\d+/g); 
      return matches
    }
    
    let clone = JSON.parse(JSON.stringify(movies))
  
    let durInMinutes = clone.map((el) => {
      let duration = getNums(el.duration)

      switch(duration[0]){
        case "0":
            el.duration = parseInt(duration[1], 10)
            break
        case "1":
            if (!duration[1]) el.duration = 60
            else el.duration = 60 + parseInt(duration[1], 10) 
            break
        case "2":
            if (!duration[1]) el.duration = 120
            else el.duration = 120 + parseInt(duration[1], 10)
            break;
        case "3":
            if (!duration[1]) el.duration = 180
            else el.duration = 180 + parseInt(duration[1], 10)
            break;
        case "4":
            if (!duration[1]) el.duration = 240
            else el.duration = 240 + parseInt(duration[1], 10)
            break;
        case "5":
            if (!duration[1]) el.duration = 240
            else el.duration = 300 + parseInt(duration[1], 10)
      }
 
      return el
    })

    return durInMinutes
  }
  

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
