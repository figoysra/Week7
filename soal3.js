let num = 5
if (typeof num == "number") {
  for( i = num; i >=1; i--){
  temp = ""
  for(j = 1; j <=i ; j++ ) {
    temp += j 
  }
  console.log(temp)
  }
}else{
  console.log("Data Harus Number")
}

