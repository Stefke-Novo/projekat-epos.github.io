//Spisak elemenata 
const forma =document.getElementById('forma1');
const prezime =document.getElementById('prezimep');
const ime =document.getElementById('imep');
const kampovi =document.getElementsByClassName('kampd');
const datum = document.getElementById('datum');
const dugme = document.getElementById('potvrdi');
const letnjiKamp = document.getElementById('kampovi');
const zimskiKamp = document.getElementById('zkampovi');
const slike = document.getElementsByClassName('slike');
//Submit funkcija
forma.addEventListener('submit',(e)=>{
    e.preventDefault();
    proveriUneseneVrednosti();

    //Opomena ako nešto od CheckBox-ova nije check-irano a trebalo bi 

    if(cekiraj(document.getElementsByClassName('pold')));
    else alert ('Niste odabrali polje za pol.');
    if(cekiraj(document.getElementsByClassName('kampd')));
    else alert ('Niste odabrali kamp.');
    if(cekiraj(document.getElementsByClassName('opremad')));
    else alert ('Niste se odlučili da li vam je potrebna oprema.');
    if((letnjiKamp.checked&&cekiraj(document.getElementsByClassName('ltermin')))||zimskiKamp.checked);
    else alert ('Niste se preijavili u kom letnjem terminu želite da učestvujete.');
    if((zimskiKamp.checked&&cekiraj(document.getElementsByClassName('ztermin')))||letnjiKamp.checked);
    else alert ('Niste se preijavili u kom zimskom terminu želite da učestvujete.');

    //Da li je sve lepo zapisano ?

    function proveriUneseneVrednosti(){
        const vrednostIme=ime.value;
        const vrednostPrezime=prezime.value;
            if(vrednostIme === ""){
            ispisiGresku(ime , 'Ime ne sme biti prazno.');
        }else{
    
            ispisiUspesno(ime, 'Ime je dobro zapisano');
        }
        if (vrednostPrezime===""){
            ispisiGresku(prezime , 'Prezime ne sme biti prazno.');
        }else{
            ispisiUspesno(prezime,'Prezime je dobro zapisano');
        }
        if(datum.value===null||datum.value===""){
            ispisiGresku(datum,'Datum nije upisan.');
        }else if(validatedate(datum)){
            ispisiGresku(datum,'Datum ne odgovara rasponu godina koji je predviđen za kamp');
        }else{
            ispisiUspesno(datum , 'Datum je pravilno upisan');
        }
        var slucaj=validatedate(datum);
        if(vrednostIme != "" && vrednostPrezime !=""&&slucaj===false&&cekiraj(document.getElementsByClassName('pold'))
           &&cekiraj(document.getElementsByClassName('opremad'))&&cekiraj(document.getElementsByClassName('kampd'))&&
           ((letnjiKamp.checked&&cekiraj(document.getElementsByClassName('ltermin')))||zimskiKamp.checked)&&
           ((zimskiKamp.checked&&cekiraj(document.getElementsByClassName('ztermin')))||letnjiKamp.checked)
           ){
            setTimeout('ucitavanje()', 3000);
        }
    }
});

    //Definisane funkcije

    function ucitavanje(){
        forma.submit();
    }
    function ispisiGresku(unos , poruka)
    {
        const roditeljElement = unos.parentElement;
        const prethodnaPoruka = roditeljElement.querySelector('small');
        prethodnaPoruka.innerText=poruka;
        prethodnaPoruka.className='greska';
        prethodnaPoruka.style.visibility='visible';
    }
    function ispisiUspesno(unos,poruka)
    {
        const roditeljElement=unos.parentElement;
        const zapis = roditeljElement.querySelector('small');
        zapis.innerText=poruka;
        zapis.className='tacno';
        zapis.style.visibility='visible';
    }
    function validatedate(inputText)
    {
        if(inputText.value==="")
        return true;
        else{
            var opera1 = inputText.value.split('/');
            var opera2 = inputText.value.split('-');
            lopera1 = opera1.length;
            lopera2 = opera2.length;
            // Extract the string into month, date and year
            if (lopera1==3)
            {
                var pdate = inputText.value.split('/');
            }
            if (lopera2==3)
            {
                var pdate = inputText.value.split('-');
            }
            var yy = parseInt(pdate[0]);
            var mm  = parseInt(pdate[1]);
            var dd = parseInt(pdate[2]);
            var trDatum=new Date();
            var trGodina=trDatum.getFullYear();
            if((dd<=31&&dd>=1)&&(mm<=12&&mm>=1)&&(yy>=trGodina-14&&yy<= trGodina-7))
            return false;
            else
            return true;
        }
    }
    function cekiraj(klasa) {
        var vest=false;
        for(var i=0;i<klasa.length;i++){
            console.log(klasa[i].checked);
            vest=klasa[i].checked;
            if(vest===true)
            return vest;
        }
        console.log('vest : '+vest);
        return vest;
    }
    var i=1;
    function funkcijaSlike(){
        if(i>=slike.length)
        i=0;
        console.log(i);
        console.log(slike[i].src);
        document.body.style.backgroundImage='url('+slike[i].src+')';
        i=i+1;
    }
