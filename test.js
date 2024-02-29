const loadPhone5 = async ()=> {
    const response= await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    const data = await response.json()
    const phn = data.data
    console.log(phn)
}
loadPhone5()

// "apple_iphone_xs-9318')" class="btn btn-primary text-white">Show Details</button>
