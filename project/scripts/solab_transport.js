alert(document.lastModified);
let oLastModif = new Date(document.lastModified);
let nLastModif = Date.parse(document.lastModified);
const pattern = /last_modif\s*=\s*([^;]*)/;

if (
    Date.parse(document.lastModified) >
    (parseFloat(document.cookie.match(pattern)?.[1]) || 0)
) {
    document.cookie = `last_modif=${Date.now()}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=${location.pathname
        }`;
    alert("This page has changed!");
}

const indexLink = document.querySelector("#index");
indexLink.addEventListener("click");

const galleryLink = document.querySelector("#gallery");
galleryLink.addEventListener("click");

const contactLink = document.querySelector("#contact");
contactLink.addEventListener("click");

const ticketLink = document.querySelector("#ticket");
ticketLink.addEventListener("click");

const destination = [
    { id: "abia", name: "Lagos - Aba (#20000)" },
    { id: "abuja", name: "Lagos - Abuja (#25000)"},
    { id: "edo", name: "Lagos - Edo (#30000)",},
    { id: "jigawa", name: "Lagos - Jigawa (#40000)",},
    { id: "kwara", name: "Lagos - Kwara (#45000)",},
   
];

// Populate the destination options
const destinationSelect = document.getElementById("destination");
destination.forEach(destination => {
    const option = document.createElement("option");
    option.value = destination.id;
    option.textContent = destination.name;
    destinationSelect.appendChild(option);
});

const reasons = [
    { id: "enquiry", name: "General Enquiry" },
    { id: "question", name: "Reservation Question" },
    { id: "satisfaction", name: "Customers' Satisfaction" },

];

// Populate the destination options
const reasonsSelect = document.getElementById("reasons");
reasons.forEach(reasons => {
    const option = document.createElement("option");
    option.value = reasons.id;
    option.textContent = reasons.name;
    reasonsSelect.appendChild(option);
});