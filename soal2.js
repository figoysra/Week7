const mtk = 80
const bhsInd = 90
const bhsIngg = 89
const ipa = 80

if (typeof mtk == "number" && typeof bhsInd == "number" && typeof bhsIngg == "number" && typeof ipa == "number" ){
    rata = ( mtk + bhsInd + bhsIngg + ipa ) / 4
    console.log("Rata-rata =" +rata )
    if (rata >= 90 && rata <= 100){
        console.log ("Grade A")
    }else if (rata >= 80 && rata < 90){
        console.log ("Grade B")
    }else if (rata >= 70 && rata < 80){
        console.log ("Grade C")
    }else if (rata >= 60 && rata < 70){
        console.log ("Grade D")
    }else{
        console.log ("Grade E")
    }
}
else{
    console.log("Masukan data yang benar")
}