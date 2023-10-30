const pocetKusu = prompt("Zadej počet kusů, které si chceš objednat:")

if(pocetKusu < 50) {
    document.body.innerHTML = `Celková cena objednávky je ${pocetKusu * 300} Kč.`
    if(pocetKusu >= 50 && pocetKusu < 200) {
        document.body.innerHTML = `Celková cena objednávky je ${pocetKusu * 250} Kč.`
        if(pocetKusu >= 200 && pocetKusu < 500) {
            document.body.innerHTML = `Celková cena objednávky je ${pocetKusu * 200} Kč.`
            if(pocetKusu >= 500 && pocetKusu < 1000) {
                document.body.innerHTML = `Celková cena objednávky je ${pocetKusu * 150} Kč.`
                if(pocetKusu >= 1000) {
                    document.body.innerHTML = `Celková cena objednávky je ${pocetKusu * 120} Kč.`
                }
            }
        }
    }
}