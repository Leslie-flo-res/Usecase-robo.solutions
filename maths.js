function sortsArray(){
    for(var i = 0 ;i<array.length-1; i++){
        for (var j = i + 1 ; j <array.length;j++){
            if (array[i]>array[j]){
                var temp= array[j])
                    array[i]=array[j];
                    array[j]=temp;
                }
            }
        
    }
return array;

}