const loadPhone5 = async ()=> {
    const response= await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    const data = await response.json()
    const phn = data.data
    console.log(phn)
}
loadPhone5()