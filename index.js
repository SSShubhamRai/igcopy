const people = [
    {
      name: "Sanjana",
      profilePic: "https://plus.unsplash.com/premium_photo-1682089810582-f7b200217b67?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "Alice loves traveling and exploring new cultures."
    },
    {
      name: "Palak",
      profilePic: "https://plus.unsplash.com/premium_photo-1664379519953-87c1bff73852?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "Bob is passionate about technology and coding."
    },
    {
      name: "Sawati",
      profilePic: "https://media.istockphoto.com/id/483934084/photo/outdoors-portrait-of-beautiful-young-brunette-girl.jpg?s=1024x1024&w=is&k=20&c=73ABFDX1reWMjU6seTg7ZhmrQ6eZL6CoeZx3XSelDvw=",
      story: "Charlie enjoys playing video games and has a deep interest in history."
    },
    {
      name: "Trisha",
      profilePic: "https://images.unsplash.com/photo-1441123694162-e54a981ceba5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "Dana is an avid reader and loves hiking in the mountains."
    },
    {
      name: "Vamika",
      profilePic: "https://images.unsplash.com/photo-1618175769858-a45f37f152cc?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "Eve is a foodie who loves experimenting with new recipes."
    },
    {
      name: "Sara",
      profilePic: "https://plus.unsplash.com/premium_photo-1691030256047-2e77a72f7f63?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "Frank is a nature enthusiast who enjoys photography."
    },
    {
      name: "Nidhi",
      profilePic: "https://plus.unsplash.com/premium_photo-1682096128630-c5ec99af10f3?q=80&w=978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "Grace loves animals and volunteers at animal shelters."
    },
    {
      name: "Sambhavi",
      profilePic: "https://plus.unsplash.com/premium_photo-1682096065017-ab3d3a162b33?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "Hank is an adventurer who has been to over 20 countries."
    },
    {
      name: "Soni",
      profilePic: "https://plus.unsplash.com/premium_photo-1663099368265-cb85a42c1f0f?q=80&w=1120&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "Ivy is a professional dancer who teaches ballet and contemporary styles."
    },
    {
      name: "Khushboo",
      profilePic: "https://images.unsplash.com/photo-1606814893907-c2e42943c91f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "Jack enjoys woodworking and building furniture from scratch."
    }
  ];
  var sum=" "
people.forEach(function(elem){
   sum +=`<div class="storyContainer">
            <div class="story">
                <img src="${elem.profilePic}" alt="">
            </div>
            <div class="name">
                <h4>${elem.name}</h4>
            </div>
           </div>`
})

var storiyan=document.querySelector('.storiyan')
storiyan.innerHTML=sum
  