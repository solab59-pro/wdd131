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