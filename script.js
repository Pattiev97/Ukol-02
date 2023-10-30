const pocetKusu = prompt("Zadej počet triček, které si chceš objednat:")

if(pocetKusu < 50) {
    document.body.innerHTML = `Celková cena objednávky za ${pocetKusu} triček je ${pocetKusu * 300} Kč.`
} else if(pocetKusu >= 50 && pocetKusu < 200) {
    document.body.innerHTML = `Celková cena objednávky za ${pocetKusu} triček je ${pocetKusu * 250} Kč.`
} else if(pocetKusu >= 200 && pocetKusu < 500) {
    document.body.innerHTML = `Celková cena objednávky za ${pocetKusu} triček je ${pocetKusu * 200} Kč.`
} else if(pocetKusu >= 500 && pocetKusu < 1000) {
    document.body.innerHTML = `Celková cena objednávky za ${pocetKusu} triček je ${pocetKusu * 150} Kč.`
} else if(pocetKusu >= 1000) {
    document.body.innerHTML = `Celková cena objednávky za ${pocetKusu} triček je ${pocetKusu * 120} Kč.`
}

document.title = "Vyhlídalová - Úkol 2"