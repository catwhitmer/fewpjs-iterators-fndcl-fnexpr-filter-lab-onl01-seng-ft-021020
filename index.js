function findMatching(drivers, name){
  return drivers.filter( find_driver => {
    return (find_driver.toLowerCase() === name.toLowerCase())
   }
  )
}

function fuzzyMatch(drivers, letter){
  return drivers.filter( find_driver => {
    if (letter.charAt(0) === find_driver.charAt(0)){
    return find_name
    }
  })
}

function matchName(drivers, name){
  return drivers.filter( function(find_driver){
    if (find_name.name == name){
      return find_driver
    }
  })
}
    
    