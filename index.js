const loadPhone = async (searchText,isShowAll) =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await response.json();
    const phones = data.data;
     console.log(phones);
    displayPhones(phones,isShowAll)
}



const displayPhones = (phones,isShowAll) => {
    // console.log(phones);

    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerText = '';
    // phoneContainer.textContent= '';
    const showAllContainer = document.getElementById('show-all-container')
    if(phones.length > 9){
      showAllContainer.classList.remove('hidden')
    }else{
      showAllContainer.classList.add('hidden')
    }
    if(!isShowAll){
    phones = phones.slice(0,9)

    }

    // console.log(phones.length)
        phones.forEach(phone => {
        console.log(phone);
        // 1 create a div 
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-base-100 shadow-xl` ;
        phoneCard.innerHTML = `
        <figure class="px-10 pt-10">
              <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title text-4xl">${phone.phone_name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions">
                <button class="btn btn-primary">Show Details</button>
              </div>
            </div>
        `;
        phoneContainer.appendChild(phoneCard)

    })
    toggleLoadingSpinner(false)
}


// Handle search button;
const handleSearch = (isShowAll) =>{
  toggleLoadingSpinner(true);
  const searchFelid = document.getElementById('search-filed');
  const searchText = searchFelid.value;
  console.log(searchText)
  loadPhone(searchText,isShowAll)
}



// const handleSearch2 = () => {
//   toggleLoadingSpinner(true);
//   const searchFelid = document.getElementById('search-filed2');
//   const searchText = searchFelid.value;
//   loadPhone(searchText)
// }


const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById('loading-spinner');
  if(isLoading){
    loadingSpinner.classList.remove('hidden')
  }
  else {
    loadingSpinner.classList.add('hidden')
  }
}

// handle show all

const handleShowAll =() => {
  handleSearch(true)
  console.log('hello')
}