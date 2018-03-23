const places = [
    {
        id: "place1",
        name: "Alaska",
        description: "A wonderful frontier.",
        image: "https: //www.google.com/imgres?imgurl=https%3A%2F%2Fwww.travelalaska.com%2F~%2Fmedia%2FImages%2FTravelAlaska%2FContent%2FHomePage%2FChugachMountains.jpg&imgrefurl=https%3A%2F%2Fwww.travelalaska.com%2F&docid=sqDFWUMeLhUb8M&tbnid=rWhjHdxhdOln_M%3A&vet=10ahUKEwjk_Oyoo4HaAhXEneAKHUx0D7oQMwhiKAAwAA..i&w=3000&h=1500&bih=662&biw=1366&q=alaska%20&ved=0ahUKEwjk_Oyoo4HaAhXEneAKHUx0D7oQMwhiKAAwAA&iact=mrc&uact=8"
    },
    {
        id: "place2",
        name: "Alaska",
        description: "A wonderful frontier.",
        image: "https: //www.google.com/imgres?imgurl=https%3A%2F%2Fwww.travelalaska.com%2F~%2Fmedia%2FImages%2FTravelAlaska%2FContent%2FHomePage%2FChugachMountains.jpg&imgrefurl=https%3A%2F%2Fwww.travelalaska.com%2F&docid=sqDFWUMeLhUb8M&tbnid=rWhjHdxhdOln_M%3A&vet=10ahUKEwjk_Oyoo4HaAhXEneAKHUx0D7oQMwhiKAAwAA..i&w=3000&h=1500&bih=662&biw=1366&q=alaska%20&ved=0ahUKEwjk_Oyoo4HaAhXEneAKHUx0D7oQMwhiKAAwAA&iact=mrc&uact=8"
    },
    {
        id: "place3",
        name: "Alaska",
        description: "A wonderful frontier.",
        image: "https: //www.google.com/imgres?imgurl=https%3A%2F%2Fwww.travelalaska.com%2F~%2Fmedia%2FImages%2FTravelAlaska%2FContent%2FHomePage%2FChugachMountains.jpg&imgrefurl=https%3A%2F%2Fwww.travelalaska.com%2F&docid=sqDFWUMeLhUb8M&tbnid=rWhjHdxhdOln_M%3A&vet=10ahUKEwjk_Oyoo4HaAhXEneAKHUx0D7oQMwhiKAAwAA..i&w=3000&h=1500&bih=662&biw=1366&q=alaska%20&ved=0ahUKEwjk_Oyoo4HaAhXEneAKHUx0D7oQMwhiKAAwAA&iact=mrc&uact=8"
    },
    {
        id: "place4",
        name: "Alaska",
        description: "A wonderful frontier.",
        image: "https: //www.google.com/imgres?imgurl=https%3A%2F%2Fwww.travelalaska.com%2F~%2Fmedia%2FImages%2FTravelAlaska%2FContent%2FHomePage%2FChugachMountains.jpg&imgrefurl=https%3A%2F%2Fwww.travelalaska.com%2F&docid=sqDFWUMeLhUb8M&tbnid=rWhjHdxhdOln_M%3A&vet=10ahUKEwjk_Oyoo4HaAhXEneAKHUx0D7oQMwhiKAAwAA..i&w=3000&h=1500&bih=662&biw=1366&q=alaska%20&ved=0ahUKEwjk_Oyoo4HaAhXEneAKHUx0D7oQMwhiKAAwAA&iact=mrc&uact=8"
    },
    {
        id: "place5",
        name: "Alaska",
        description: "A wonderful frontier.",
        image: "https: //www.google.com/imgres?imgurl=https%3A%2F%2Fwww.travelalaska.com%2F~%2Fmedia%2FImages%2FTravelAlaska%2FContent%2FHomePage%2FChugachMountains.jpg&imgrefurl=https%3A%2F%2Fwww.travelalaska.com%2F&docid=sqDFWUMeLhUb8M&tbnid=rWhjHdxhdOln_M%3A&vet=10ahUKEwjk_Oyoo4HaAhXEneAKHUx0D7oQMwhiKAAwAA..i&w=3000&h=1500&bih=662&biw=1366&q=alaska%20&ved=0ahUKEwjk_Oyoo4HaAhXEneAKHUx0D7oQMwhiKAAwAA&iact=mrc&uact=8"
    },
    {
        id: "place6",
        name: "Alaska",
        description: "A wonderful frontier.",
        image: "https: //www.google.com/imgres?imgurl=https%3A%2F%2Fwww.travelalaska.com%2F~%2Fmedia%2FImages%2FTravelAlaska%2FContent%2FHomePage%2FChugachMountains.jpg&imgrefurl=https%3A%2F%2Fwww.travelalaska.com%2F&docid=sqDFWUMeLhUb8M&tbnid=rWhjHdxhdOln_M%3A&vet=10ahUKEwjk_Oyoo4HaAhXEneAKHUx0D7oQMwhiKAAwAA..i&w=3000&h=1500&bih=662&biw=1366&q=alaska%20&ved=0ahUKEwjk_Oyoo4HaAhXEneAKHUx0D7oQMwhiKAAwAA&iact=mrc&uact=8"
    },
]

function writeToDom (strang) {
    document.getElementById("Travel-Diary").innerHTML += strang;
}

function createCardBuilder (placesArray) {
    for(let i=0; i < placesArray.length; i++) {
        let domString = "";
        domString += "<div>";
        domString += `<h2> ${placesArray[i].name} </h2>`;
        domString += `<img src="${placesArray[i].image}">`;
        domString += `<p> ${placesArray[i].description} </p>`;
        domString += "<textarea></textarea>";
        domString += "<button type='button'></button>";
        writeToDom(domString);
    }  
}
createCardBuilder(places);

function diaryBuilder () {

}

function eventListener() {

}