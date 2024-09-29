async function initializeRecognizer() {
    try {
        // Specify at least one configuration parameter, such as the language
        const recognizer = await navigator.createHandwritingRecognizer({languages: ['en']});
        console.log("Recognizer created:", recognizer);
    } catch (error) {
        console.error("Error creating recognizer:", error);
    }
}

initializeRecognizer();
