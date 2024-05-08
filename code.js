function tsp_hk(distance_matrix) {
    let minPath = Infinity;
    let n = distance_matrix.length;
    let cityList = Array.from(Array(n).keys());
    let newCities = [];
    if(distance_matrix.length < 3) return 0;
    function heldKarp(cities, start){
        if(cities.length == 2){
            // console.log("start", start, "city", cities[0]);
            // console.log(distance_matrix[start][cities[0]], "end");
            console.log(start);
            console.log(cities);
            cities.splice(cities.indexOf(start),1);
            return distance_matrix[start][cities[0]];
        }
        else {
            for(let i = 0; i < cities.length; i++){
                if(cities[i] != start){
                    newStart = cities[i];
                    newCities = [...cities];
                    console.log(cities[i]);
                    newCities.splice(cities.indexOf(start),1);
                    console.log(newCities);
                    //console.log(newCities);
                    path = heldKarp(newCities, newStart) + distance_matrix[start][newStart];
                    console.log(path, "finished route");
                    // if(path < minPath){
                    //     minPath = path;
                    // }
                    minPath = Math.min(minPath, path);
                }
            }
        }
    }

    heldKarp(cityList, cityList[0]);
    console.log(minPath);
    return minPath;
}

dm = [[0,3,4,2,7],
      [3,0,4,6,3],
      [4,4,0,5,8],
      [2,6,5,0,6],
      [7,3,8,6,0]];

tsp_hk(dm);
