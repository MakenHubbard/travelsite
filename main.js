const places = [
    {
        id: "place1",
        name: "Alaska",
        description: "Alaska, northwest of Canada, is the largest and most sparsely populated U.S. state. It's known for its diverse terrain of open spaces, mountains and forests, with abundant wildlife and many small towns. It’s a destination for outdoor activities like skiing, mountain biking and kayaking. Massive Denali National Park is home to Denali (formerly called Mount McKinley), North America’s highest peak.",
        image: "https://defenders.org/sites/default/files/styles/homepage-feature-2015/public/alaska_denali_peggy-bechtell.png?itok=4y4v5-tX"
    },
    {
        id: "place2",
        name: "Norway",
        description: "Norway is a Scandinavian country encompassing mountains, glaciers and deep coastal fjords. Oslo, the capital, is a city of green spaces and museums. Preserved 9th-century Viking ships are displayed at Oslo’s Viking Ship Museum. Bergen, with colorful wooden houses, is the starting point for cruises to the dramatic Sognefjord. Norway is also known for fishing, hiking and skiing, notably at Lillehammer’s Olympic resort.",
        image: "https://media.nomadicmatt.com/norwayguide.jpg"
    },
    {
        id: "place3",
        name: "Cairo",
        description: "Cairo, Egypt’s sprawling capital, is set on the Nile River. At its heart is Tahrir Square and the vast Egyptian Museum, a trove of antiquities including royal mummies and gilded King Tutankhamun artifacts. Nearby, Giza is the site of the iconic pyramids and Great Sphinx, dating to the 26th century BC. In Gezira Island’s leafy Zamalek district, 187m Cairo Tower affords panoramic city views.",
        image: "http://images.kuoni.co.uk/73/mena-house-38484241-1510140066-WideInspirationalPhoto1170.jpg"
    },
    {
        id: "place4",
        name: "Grand Canyon",
        description: "Grand Canyon National Park, in Arizona, is home to much of the immense Grand Canyon, with its layered bands of red rock revealing millions of years of geological history. Viewpoints include Mather Point, Yavapai Observation Station and architect Mary Colter’s Lookout Studio and her Desert View Watchtower. Lipan Point, with wide views of the canyon and Colorado River, is a popular, especially at sunrise and sunset.",
        image: "https://www.nationalparks.org/sites/default/files/iStock_000042545368_Full.jpg"
    },
    {
        id: "place5",
        name: "The Red Woods",
        description: "The tallest trees in the world are redwoods (Sequoia sempervirens), which tower above the ground in California. These trees can easily reach heights of 300 feet (91 meters). Among the redwoods, a tree named Hyperion dwarfs them all. The tree was discovered in 2006, and is 379.7 feet (115.7 m) tall.",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/0a/46/61/64/the-redwood-grove.jpg"
    },
    {
        id: "place6",
        name: "Mont Saint-Michel Castle",
        description: "Besides being a tidal island and commune in Normandy, France, the Mont Saint-Michel is a castle unlike any other. Its seclusion is one part of this, but its history of being a strategic holding fortification since the 8th century AD is a larger part of it. Even if only 41 people occupy the island, the castle receives approximately 3,000,000 visitors each year.",
        image: "https://images.complex.com/complex/image/upload/c_fill,g_faces,w_1100/fl_lossy,pg_1,q_auto/onqkm8c2mxscm0n2sggh.jpg"
    },
]

function writeToDom(strang) {
    document.getElementById("Travel-Diary").innerHTML += strang;
}

function createCardBuilder() {
    for (let i = 0; i < places.length; i++) {
        let domString = "";
        domString += "<div class='card'>";
        domString += `<h2> ${places[i].name} </h2>`;
        domString += `<img src="${places[i].image}">`;
        domString += `<p> ${places[i].description} </p>`;
        domString += "<textarea class='entry'></textarea>";
        domString += "<button type='button'>Submit</button></div>";
        writeToDom(domString);
    }
}
createCardBuilder();

function diaryBuilder(e) {
    if (e.target.type === "button") {
        const placeName = e.target.parentNode.children[0].textContent;
        const userInput = e.target.parentNode.children[3].value;
        diaryCard(placeName, userInput);
    }

}

function eventListener() {
    document.getElementById('Travel-Diary').addEventListener('click', diaryBuilder);
}
eventListener();

const diaryCard = (placeName, userInput) => {
    let strung = "";
    strung = `<div class="dairy">
                <h2>${placeName}</h2
                <p>${userInput}</p>
              </div>`
    writeToDom(strung);
}