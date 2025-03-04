// {"id":101,
//"category":"Comedy",
// "image":"https://i.ibb.co/0QRxkd5/pexels-jan-kop-iva-3525908.jpg",
// "isActive":true,
// "title":"10 Kids Unaware of Their Costume",
// "author":{"name":"John Doe"},
// "description":"It is one thing to subject yourself to a costume mishap",
// "comment_count":560,
// "view_count":1568,
// "posted_time":5}


const showCard = async (search) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`)
    const data = await res.json()
    const result = data.posts
    // console.log(result.length, search)
    displayCard(result, search)
}


const displayCard = (result, search) => {
    // console.log(result,length)
    const commentContainer = document.getElementById('comment-container')

    commentContainer.innerText = ""
    result.forEach((element) => {
        if (element.category === search) {
            const div = document.createElement("div")
            div.innerHTML = `
                    <div
                        class="h-[350px] lg:h-[250px] w-full flex gap-2 lg:gap-6 flex-1 p-4 lg:p-10 border-2  border-[#797DFC] rounded-3xl flex-col lg:flex-row">
                        <div class="avatar h-[72px] w-[72px] ${element.isActive ? 'online' : 'offline'}">
                            <div class="w-24 rounded-xl">
                                <img src="${element.image}" />
                            </div>
                        </div>
                        <!-- card details section  -->
                        <div>
                            <div class="border-b-2 border-dashed border-[#12132D40] mb-1 lg:mb-3 pb-1 lg:pb-4">
                                <div
                                    class="flex flex-col lg:flex-row gap-1 lg:gap-5 font-inter font-medium text-sm lg:text-base">
                                    <p># ${element.category}</p>
                                    <p>Author : ${element.author.name}</p>
                                </div>
                                <h3 class="text-base lg:text-[20px] font-bold text-[#12132D]">${element.title}</h3>
                                <p class="font-inter text-[#12132D99] text-sm lg:text-base">${element.description}</p>

                            </div>
                            <div class="flex justify-between mb-7 flex-col lg:flex-row gap-2 lg:gap-0 w-[580px]">
                                <div class="flex gap-4">
                                    <!-- comment section  -->
                                    <div class="flex gap-3 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#12132D99]">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                        </svg>
                                        <span class="text-[#12132D99]">${element.comment_count}</span>
                                    </div>
                                    <!-- view section  -->
                                    <div class="flex gap-3 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#12132D99]">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>

                                        <span class="text-[#12132D99]">${element.view_count}</span>
                                        <!-- time section  -->
                                    </div>
                                    <div class="flex gap-3 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#12132D99]">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                        <span class="text-[#12132D99]">${element.posted_time} Min</span>
                                    </div>
                                </div>
                                <div> <button onclick="handleMarkedButton('${element.title}', '${element.view_count}')" class="btn clicker rounded-full bg-[#10B981] w-13 h-13 p-3"><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>                
             `
            // console.log(element)
            commentContainer.appendChild(div)                
            setTimeout(() => {
                loadingSpinner(false)
            }, 2000);

        }
    });
}

const handleSearchButton = () => {
    
    const alartText = document.getElementById('alart-text')
    alartText.classList.add('hidden')
    const searchField = document.getElementById('search-field')
    let searchText = searchField.value
    let searchTextToLower = searchText.toLowerCase()
    if (searchTextToLower === 'comedy' || searchTextToLower === 'music' || searchTextToLower === 'coding') {
        loadingSpinner(true)
        showCard(searchText)
        searchField.value = ""
    }
    else {
        alartText.classList.remove('hidden')
        searchField.value = ""
    }
}




const loadingSpinner = (isLoading) => {
    const loadSpinner = document.getElementById('loading-spinner')
    const commentContainer = document.getElementById('comment-container')
    if (isLoading) {
        commentContainer.classList.add('hidden')
        loadSpinner.classList.remove('hidden')
    }
    else {
        commentContainer.classList.remove('hidden')
        loadSpinner.classList.add('hidden')
    }
}





function setInnerText(id, value) {
    const availableSeat = document.getElementById(id)
    availableSeat.innerText = value
}

const title = "Introduction to Python: A Beginner's Guide"
const view = 780
const tryButton = document.getElementById('try-button')
tryButton.addEventListener('click', function (){
    handleMarkedButton(title, view)
})

function handleMarkedButton(title, view) {
    // const markedCommentContainer = document.getElementById('marked-comment-container');
    const countingClass = document.getElementById('counting-class')

    const div = document.createElement("div");
    div.innerHTML = `
        <div class="flex justify-between px-3">
            <h1 class="text-[#12132D] font-semibold">${title}</h1>
            <div class="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <span>${view}</span>
            </div>
        </div>
    `;
    countingClass.appendChild(div);
    const markedCounter = document.getElementById('Marked-counter');
    markedCounter.innerText = countingClass.children.length;
    // console.log(countingClass.children.length.toString())
   
}



const latestPost = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    const data = await res.json()
    displayLatestPosts(data)

}



const displayLatestPosts = (data) =>{
    // console.log(data.length)

    data.forEach(element => {
        // console.log(element)
        const latestCardContainer = document.getElementById('latest-card-container')
        const div = document.createElement('div')        
        div.innerHTML=`
            <div class="card w-80 lg:w-auto bg-base-100 shadow-xl border-2 border-[#12132D26] p-6">
                <figure><img src="${element.cover_image}" alt="Shoes" class="object-cover object-center" /></figure>
                    <!-- card body  -->
                    <div class=" mt-6 space-y-4">
                        <div class="flex gap-3 items-center">
                            <img src="images/Frame2.svg" alt="">
                            <p class="text-[#12132D99]">${element.author.posted_date? element.author.posted_date: 'No publish date'}</p>
                        </div>
                        <h2 class="font-extrabold text-[18px]">${element.title}</h2>
                        <p class="text-[#12132D99]">${element.description}</p>
                        <div class="flex justify-start items-center mt-2 gap-4">
                            <img src="${element.profile_image}" alt="" class="w-11 h-11 rounded-full object-cover">
                            <div>
                                <h4 class="font-bold">${element.author.name}</h4>
                                <p class="text-[#12132D99]">${element.author.designation? element.author.designation : 'Unknown'}</p>
                            </div>
                        </div>
                    </div>
            </div>
        
        `      
        latestCardContainer.appendChild(div) 
    });
}

latestPost()