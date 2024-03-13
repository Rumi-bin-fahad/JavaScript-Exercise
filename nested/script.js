

let shopping = prompt('Enter Your Product want to buy')

if (shopping == 'Glasses' || shopping == 'caps' || shopping == 'Jeans' || shopping == 'Shirt' || shopping == 'Shorts') {
    document.write('<h1 class="cool">Your Choice is Cool 👌👍</h1>')
    if (shopping == 'Glasses') {
        let Lenspower = prompt('Enter Your Lens Power and Glasses Type');
        alert("Your Lens Power is", Lenspower)
        document.write('<p class="cool">The Parcel will deliver to you from 3 to 4 days</p>');
    }
    else if (shopping == 'caps') {
        let caps = prompt('Enter Cap Color Want to Buy')
        // alert('You Looks Gorgeous in ', caps, 'color');
        let CapsChoice = prompt('Tell us which type of Caps does you want\nIslamic-Caps\nFormal-Caps');
        document.write('<p class="cool"> You Select ' , CapsChoice , caps , ' color ' , ' Which Looks Great to your personality </p> ')
        document.write('<p class="cool">The Parcel will deliver to you from 3 to 4 days</p>')
    }
    else if (shopping == 'Jeans') {
        let jeans = prompt('Enter Brand of Jeans\nLike Denim, AmericanEalge')
        alert('You Choce Great Brand')
        document.write('<p class="cool">You Choose', jeans, 'Brand Jeans</p>')
        document.write('<p class="cool">The Parcel will deliver to you from 3 to 4 days</p>')
    }
    else if (shopping == 'Shirt') {
        let Shirt = prompt('Please Tell us Shirt size');
        let ShirtColor = prompt('Which Color Do you Want to Buy');
        // alert('You Chosse', Shirts, 'Your Artilce is New')
        document.write('<p class="cool">You Select ', Shirt, ShirtColor, ' Shirt</p>');
        document.write('<p class="cool">The Parcel will deliver to you from 3 to 4 days</p>')
    }
    else {
        let Shorts = prompt('Medium\nLarge\nShort\nVeryShort')
        // alert('You Chosse', Shorts)
        document.write('<p class="cool">You Choose ', Shorts, ' Size Short</p>')
        document.write('<p class="cool">The Parcel will deliver to you from 3 to 4 days</p>')
        alert('Thank You For Shopping')
    }
}
else {
    document.write('<h1 class="Sorry">Sorry Stock are Limited  👀</h1>')
}

