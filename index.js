const people = [
    {
      name: "Sanjana",
      profilePic: "https://plus.unsplash.com/premium_photo-1682089810582-f7b200217b67?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "https://plus.unsplash.com/premium_photo-1664298807846-b7989767c04e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Palak",
      profilePic: "https://plus.unsplash.com/premium_photo-1664379519953-87c1bff73852?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "https://images.unsplash.com/photo-1576473400082-558482402c47?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Sawati",
      profilePic: "https://media.istockphoto.com/id/483934084/photo/outdoors-portrait-of-beautiful-young-brunette-girl.jpg?s=1024x1024&w=is&k=20&c=73ABFDX1reWMjU6seTg7ZhmrQ6eZL6CoeZx3XSelDvw=",
      story: "https://images.unsplash.com/photo-1491013516836-7db643ee125a?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Trisha",
      profilePic: "https://images.unsplash.com/photo-1441123694162-e54a981ceba5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "https://images.unsplash.com/photo-1546015720-b8b30df5aa27?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Vamika",
      profilePic: "https://images.unsplash.com/photo-1618175769858-a45f37f152cc?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "https://images.unsplash.com/photo-1526231671662-69e722798ee2?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Sara",
      profilePic: "https://plus.unsplash.com/premium_photo-1691030256047-2e77a72f7f63?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "https://images.unsplash.com/photo-1503408024948-0a3e1b2b519c?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Nidhi",
      profilePic: "https://plus.unsplash.com/premium_photo-1682096128630-c5ec99af10f3?q=80&w=978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "https://images.unsplash.com/photo-1506795660198-e95c77602129?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Sambhavi",
      profilePic: "https://plus.unsplash.com/premium_photo-1682096065017-ab3d3a162b33?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "https://plus.unsplash.com/premium_photo-1668896122554-2a4456667f65?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Soni",
      profilePic: "https://plus.unsplash.com/premium_photo-1663099368265-cb85a42c1f0f?q=80&w=1120&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "https://images.unsplash.com/photo-1505200063777-4a0b90b007c8?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Khushboo",
      profilePic: "https://images.unsplash.com/photo-1606814893907-c2e42943c91f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "https://plus.unsplash.com/premium_photo-1671717724630-aaf787310041?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];
  var sum=" "
people.forEach(function(elem,idx){
   sum +=`<div class="storyContainer">
            <div class="story">
                <img id="${idx}" src="${elem.profilePic}" alt="">
            </div>
            <div class="name">
                <h4>${elem.name}</h4>
            </div>
           </div>`
})

var storiyan=document.querySelector('.storiyan')
storiyan.innerHTML=sum

var full=document.querySelector('.full')
storiyan.addEventListener('click',function(elem){
   var story=people[elem.target.id].story
  full.style.display='block'
  full.style.backgroundImage=`url(${story})`
  setTimeout(function(){
    full.style.display='none'
  },3000)
  
})
