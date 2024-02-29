const loadPhone = async (searchText = 'i',isShowAll) =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await response.json();
    const phones = data.data;
     console.log(phones);
    displayPhones(phones,isShowAll)
}



const displayPhones = (phones,isShowAll) => {
    console.log(phones);

    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerText = '';
    // phoneContainer.textContent= '';
    const showAllContainer = document.getElementById('show-all-container')
    if(phones.length > 9 && !isShowAll){
      showAllContainer.classList.remove('hidden')
    }else{
      showAllContainer.classList.add('hidden')
    }
    if(!isShowAll){
    phones = phones.slice(0,9)

    }

    // console.log(phones.length)
        phones.forEach(phone => {
        // console.log(phone);
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
                <button onclick="handleShowDetail('${phone.slug}')" class="btn btn-primary text-white">Show Details</button>
              </div>
            </div>
        `;
        phoneContainer.appendChild(phoneCard)

    })
    toggleLoadingSpinner(false)
}
// 

 const handleShowDetail =async (id) =>{
// console.log('handle show details' ,id);

 const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
 const data = await res.json();
//  console.log(data);

 const phone = data.data
 showPhoneDetails(phone)
 }


//  show phn details

const showPhoneDetails = (phone) =>{
  console.log(phone);

  const phoneName  = document.getElementById('phone-name');
  phoneName.innerText = phone.name;

  const show_details_Container = document.getElementById('show-details-container');
  show_details_Container.innerHTML = `
  <img src="${phone.image}">
  <p><span class="text-2xl font-bold">Storage :</span>${phone.mainFeatures?.storage}</p>
  <p><span class="text-2xl font-bold">Details :</span>${phone.mainFeatures?.displaySize}</p>
  <p><span class="text-2xl font-bold">Memory :</span>${phone.mainFeatures?.memory}</p>
  <p><span class="text-2xl font-bold">Slug :</span>${phone.slug}</p>
  <p><span class="text-2xl font-bold">ReleaseDate
  :</span>${phone?.releaseDate
  }</p>
  <p><span class="text-2xl font-bold">Brand :</span>${phone?.brand}</p>
  <p><span class="text-2xl font-bold">GPS :</span>${phone?.others?.GPS}</p>
  `
// show the modal
show_details_modal.showModal()

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

loadPhone();