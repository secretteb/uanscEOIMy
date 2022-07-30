updateVisitCount();

function updateVisitCount() {
fetch('https://api.countapi.xyz/update/shadow1337.xyz/iloveoutuby/?amount=1')
.then(res => res.json())
.then(res => {
countEl.innerHTML = res.value;
})
}
