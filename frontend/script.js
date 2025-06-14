document.getElementById("surveyForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = {};

    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }

    try {
        const res = await fetch("https://your-api-id.execute-api.region.amazonaws.com/dev", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        const result = await res.json();
        document.getElementById("responseMessage").textContent = result.message || result.error;
    } catch (error) {
        document.getElementById("responseMessage").textContent = "Error submitting survey";
    }
});
