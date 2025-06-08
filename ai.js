function typeWriterEffect(element, text, speed = 40) {
    let i = 0;
    element.textContent = ''; // Clear any existing content
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}


document.getElementById('promptTrigger').addEventListener('click', () => {
    const userPrompt = document.getElementById('userPrompt').value.toLowerCase();
    const placetrigger = ['place', 'area', 'address', 'where', 'saan', 'nasaan', 'way'];
    const product1 = ['skim coat - outdoor', 'product 1', 'outdoor'];
    const product2 = ['skim coat - indoor', 'indoor'];
    const product3 = ['skim coat - outdoor + indoor', "indoor and outdoor", "indoor + outdoor"];
    const product4 = ['tile adhesive', 'adhesive', 'tiles'];

    const prompt = {
        place: "We are located at Davao City",
        SkimCoatOutdoor: "Durable, weather-resistant skim coat for flawless exterior surfaces that withstand the elements.",
        indoor: "Smooth, high-quality skim coat for perfect interior walls with a professional finish.",
        indoorandoutdoor: "Versatile, all-purpose skim coat delivering seamless results for both indoor and outdoor projects.",
        adhesive: "Strong, reliable adhesive for secure tile installation, ensuring lasting bonds on any surface."
    };

    const output = document.getElementById('AIrespond');
    const words = userPrompt.split(/\s+/);

    if (!userPrompt) {
        alert('Please enter something');
    } else if (words.some(word => placetrigger.includes(word))) {
        typeWriterEffect(output, prompt.place);
    } else if (words.some(word => product1.includes(word))) {
        typeWriterEffect(output, prompt.SkimCoatOutdoor);
    } else if (words.some(word => product2.includes(word))) {
        typeWriterEffect(output, prompt.indoor);
    } else if (words.some(word => product3.includes(word))) {
        typeWriterEffect(output, prompt.indoorandoutdoor);
    } else if (words.some(word => product4.includes(word))) {
        typeWriterEffect(output, prompt.adhesive);
    } else {
        typeWriterEffect(output, "You've reached your free access limit. Purchase this website to acquire all the features.");
    }
});
