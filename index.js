
let guestList = ('putin biden zeleskiy erdogan kimchenin Mirziyoyev')
let guestName = prompt('Добро пожаловать как вас зовут?')

if(guestList.includes(guestName)) {
    console.log('Добро пожаловать призидент ' +  guestName )
} else {
    console.log('poshol von ' +  guestName)
}